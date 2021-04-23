#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jan 12 22:25:48 2021
@authors: Phillip Wolff and Yan Cong
"""

import torch
import csv
#from transformerslogits import T5Tokenizer, T5Config, T5ForConditionalGeneration, T5Model
from transformers import T5Tokenizer, T5Config, T5ForConditionalGeneration, T5Model
#%%

T5_PATH = 't5-small' # "t5-small", "t5-base", "t5-large", "t5-3b", "t5-11b"

DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu') 

t5_tokenizer = T5Tokenizer.from_pretrained(T5_PATH)
t5_config = T5Config.from_pretrained(T5_PATH)
t5_mlm = T5ForConditionalGeneration.from_pretrained(T5_PATH, config=t5_config).to(DEVICE)

#%%
##############initialize variables and data structures----##########################
first_loss_difference = 0
first_loss_difference_lst = []

second_loss_difference = 0
second_loss_difference_lst = []

outputs_bad_loss = []
outputs_good_loss = []

outputs_baseline_bad_loss = []
outputs_exp_soso_loss = []

l=0

##########################read CSV files line by line, generates cross-entropy loss---##########################
with open ('minimal pairs - manner implicature.csv', newline='') as f:
    reader = csv.DictReader(f)
    for line in reader:
        l += 1
        if 0 < l < 25: #change here for different conditions; sept 24
            sentence = line['pre_cw'] + ' <extra_id_0> ' + line['post_cw'] + ' </s>' 
            #print('sentence: ', sentence)
            
            if (line['condition'] == 'experimental'):
                exp_good = line['cw']
                #print('good: ', exp_good)
            else:
                baseline_bad = line['cw']
                #print('bad: ', baseline_bad)

            if l %2 == 0:
                input_ids = t5_tokenizer(sentence, return_tensors='pt').input_ids.to(DEVICE)
                labels_bad = t5_tokenizer('<extra_id_0> ' + baseline_bad + ' </s>', return_tensors='pt').input_ids.to(DEVICE)
                labels_good = t5_tokenizer('<extra_id_0> ' + exp_good + ' </s>', return_tensors='pt').input_ids.to(DEVICE)
                        
                outputs_bad = t5_mlm(input_ids = input_ids, labels = labels_bad)
                outputs_good = t5_mlm(input_ids = input_ids, labels = labels_good)
                
                outputs_bad_loss.append(outputs_bad.loss)
                outputs_good_loss.append(outputs_good.loss)
                        
                first_loss_difference = outputs_bad.loss - outputs_good.loss
                first_loss_difference_lst.append(first_loss_difference)

#print('first loss diff: ', first_loss_difference_lst)
            
        else:
            baseline_sentence = line['pre_cw'] + ' <extra_id_0> ' + line['post_cw'] + ' </s>'
            #print('baseline sentence: ', baseline_sentence)
                
            if (line['prediction'] == 'soso'):
                exp_soso = line['cw']
                #print('exp soso: ', exp_soso)
            else:
                baseline_bad = line['cw']
                #print('baseline bad: ', baseline_bad)
                
            if l%2 ==0:                                    
                input_ids = t5_tokenizer(baseline_sentence, return_tensors='pt').input_ids.to(DEVICE)
                labels_baseline_bad = t5_tokenizer('<extra_id_0> ' + baseline_bad + ' </s>', return_tensors='pt').input_ids.to(DEVICE)
                labels_exp_soso = t5_tokenizer('<extra_id_0> ' + exp_soso + ' </s>', return_tensors='pt').input_ids.to(DEVICE)
                        
                outputs_baseline_bad = t5_mlm(input_ids = input_ids, labels = labels_baseline_bad)
                outputs_exp_soso = t5_mlm(input_ids = input_ids, labels = labels_exp_soso)
                        
                outputs_baseline_bad_loss.append(outputs_baseline_bad.loss)
                outputs_exp_soso_loss.append(outputs_exp_soso.loss)
                
                second_loss_difference = outputs_baseline_bad.loss - outputs_exp_soso.loss
                second_loss_difference_lst.append(second_loss_difference)
                

loss_difference_lst = first_loss_difference_lst + second_loss_difference_lst

#%%
#######################################writes the results into a new csv file-----##########################
t=0
with open('SepMannerImplicatureLoss.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["num", "model", "outputs bad loss", "outputs good loss",
                     "outputs baseline bad loss", "outputs exp soso loss",
                     "bad-good loss diff", "bad-good loss diff > 0", "b_bad-soso loss diff", "b_bad-soso loss diff > 0"])
    for i, j, p, q, m, n   in zip(outputs_bad_loss, outputs_good_loss, 
                              outputs_baseline_bad_loss, outputs_exp_soso_loss,
                              first_loss_difference_lst, second_loss_difference_lst):
        t += 1
        if (m > 0 and n > 0):
            writer.writerow([t, T5_PATH, i, j, p, q, m, 1, n, 1])
        else:
            if (m > 0 and n < 0):
                writer.writerow([t, T5_PATH, i, j, p, q, m, 1, n, 0]) 
            else:
                if (m < 0 and n > 0):
                    writer.writerow([t, T5_PATH, i, j, p, q, m, 0, n, 1]) 
                else:
                    writer.writerow([t, T5_PATH, i, j, p, q, m, 0, n, 0]) 

#%%
