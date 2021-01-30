#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jan 12 22:57:17 2021

@author: yancong
"""

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jan 12 22:25:48 2021

@author: yancong
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

l=0


with open ('minimal pairs - presupposition.csv', newline='') as f:
    reader = csv.DictReader(f)
    for line in reader:
        l += 1
        if 0 < l < 83: #change here for different conditions
            sentence = line['pre_cw'] + ' <extra_id_0> ' + line['post_cw'] + ' ' + line['post_cw_trigger'] + ' </s>'
            #print('sentence: ', l, sentence)
            
            if (line['condition'] == 'experimental'):                
                target_good = line['cw']
                #print('good: ', target_good)
                input_ids = t5_tokenizer(sentence, return_tensors='pt').input_ids.to(DEVICE)

                labels_good = t5_tokenizer('<extra_id_0> ' + target_good + ' <extra_id_1> </s>', return_tensors='pt').input_ids.to(DEVICE)
                outputs_good = t5_mlm(input_ids = input_ids, labels = labels_good)


            else:
                target_bad = line['cw']
                #print('bad: ', target_bad)
                input_ids = t5_tokenizer(sentence, return_tensors='pt').input_ids.to(DEVICE)

                labels_bad = t5_tokenizer('<extra_id_0> ' + target_bad + ' <extra_id_1> </s>', return_tensors='pt').input_ids.to(DEVICE)             
                outputs_bad = t5_mlm(input_ids = input_ids, labels = labels_bad)
                    
            if l%2 == 0:     # 1vs.2 as a pair           
                outputs_bad_loss.append(outputs_bad.loss)
                outputs_good_loss.append(outputs_good.loss)
                    
                loss_difference = outputs_bad.loss - outputs_good.loss
                #print('loss diff: ', loss_difference) # int
                loss_difference_lst.append(loss_difference)



n=0
with open('SepPresupLoss.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["num", "model", "outputs bad loss", "outputs good loss", "loss diff", "loss diff > 0"])
    for i,j,q in zip(outputs_bad_loss, outputs_good_loss, loss_difference_lst):
        n += 1
        if q > 0:
            writer.writerow([n, T5_PATH, i, j, q, 1])
        else:
            writer.writerow([n, T5_PATH, i, j, q, 0])
            


            
#print('loss lst: ', loss_difference_lst)
#print('bad loss: ', outputs_bad_loss)     
#print('good loss: ', outputs_good_loss)      

    

#%%
