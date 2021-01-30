#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jan 12 22:25:48 2021

@author: Yan Cong and Phillip Wolff
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
baseline_loss_difference = 0
baseline_loss_difference_lst = []

loss_difference_lst = []
loss_difference = 0

outputs_bad_loss = [] 
outputs_good_loss = []

outputs_baseline_soso_loss = []
outputs_baseline_good_loss = []

l=0

with open ('minimal pairs - scalar implicature.csv', newline='') as f:
    reader = csv.DictReader(f)
    for line in reader:
        l += 1
        if 0 < l < 169: #change here for different conditions
            if (line['condition'] == 'experimental'):
                #print('exp Line: ', line)
                sentence = line['pre_cw'] + ' <extra_id_0> ' + line['post_cw']
                #print('sentence: ', sentence)
                
                if (line['prediction'] == 'good'):
                    target_good = line['cw']
                    #print('good: ', target_good)
                else:
                    target_bad = line['cw']
                    #print('bad: ', target_bad)
                
                if l%2 == 0:
                    input_ids = t5_tokenizer(sentence, return_tensors='pt').input_ids.to(DEVICE)
                    labels_bad = t5_tokenizer('<extra_id_0> ' + target_bad + ' <extra_id_1> </s>', return_tensors='pt').input_ids.to(DEVICE)
                    labels_good = t5_tokenizer('<extra_id_0> ' + target_good + ' <extra_id_1> </s>', return_tensors='pt').input_ids.to(DEVICE)
                    
                    outputs_bad = t5_mlm(input_ids = input_ids, labels = labels_bad)
                    outputs_good = t5_mlm(input_ids = input_ids, labels = labels_good)
                    
                    outputs_bad_loss.append(outputs_bad.loss)
                    outputs_good_loss.append(outputs_good.loss)
                    
                    loss_difference = outputs_bad.loss - outputs_good.loss
                    loss_difference_lst.append(loss_difference)
                    #print('loss lst: ', loss_difference_lst)
                
            else:
                baseline_sentence = line['pre_cw'] + ' <extra_id_0> ' + line['post_cw']
                #print('baseline sentence: ', baseline_sentence)
                
                if (line['prediction'] == 'so-so'):
                    baseline_soso = line['cw']
                    #print('baseline soso: ', baseline_soso)
                else:
                    baseline_good = line['cw']
                    #print('baseline good: ', baseline_good)
                
                if l%2 == 0:
                    input_ids = t5_tokenizer(baseline_sentence, return_tensors='pt').input_ids.to(DEVICE)
                    labels_baseline_soso = t5_tokenizer('<extra_id_0> ' + baseline_soso + ' <extra_id_1> </s>', return_tensors='pt').input_ids.to(DEVICE)
                    labels_baseline_good = t5_tokenizer('<extra_id_0> ' + baseline_good + ' <extra_id_1> </s>', return_tensors='pt').input_ids.to(DEVICE)
                    
                    outputs_baseline_soso = t5_mlm(input_ids = input_ids, labels = labels_baseline_soso)
                    outputs_baseline_good = t5_mlm(input_ids = input_ids, labels = labels_baseline_good)
                    
                    #print('outputs bad loss: ', outputs_baseline_soso.loss)
                    #print('outputs good loss: ', outputs_baseline_good.loss)
                    
                    outputs_baseline_soso_loss.append(outputs_baseline_soso.loss)
                    outputs_baseline_good_loss.append(outputs_baseline_good.loss)
                    
                    baseline_loss_difference = outputs_baseline_soso.loss - outputs_baseline_good.loss
                    #print('baseline loss diff: ', baseline_loss_difference) # int
                    baseline_loss_difference_lst.append(baseline_loss_difference)
                    #print('baseline loss lst: ', baseline_loss_difference_lst)
                               

t= 0
with open('SepScalarImplicatureLoss.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["num", "model", "outputs bad loss", "outputs good loss",
                     "outputs baseline soso loss", "outputs baseline good loss",
                     "bad-good loss diff", "bad-good loss diff > 0", "b_soso-b_good loss diff", "b_soso-b_good loss diff > 0"])
    for i, j, p, q, m, n   in zip(outputs_bad_loss, outputs_good_loss, 
                              outputs_baseline_soso_loss, outputs_baseline_good_loss,
                              loss_difference_lst, baseline_loss_difference_lst):
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
