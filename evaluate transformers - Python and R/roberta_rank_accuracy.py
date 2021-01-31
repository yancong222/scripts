
# -*- coding: utf-8 -*-
"""
Created on Tue Aug 20 20:37:17 2019

@author: Phillip Wolff
"""
"""
Significantly modified on Tue Jan 30 2021

@author: Yan Cong
"""
#%%
import torch
#from pytorch_transformers import RobertaTokenizer, RobertaForMaskedLM
from transformers import RobertaTokenizer, RobertaForMaskedLM

def initialize_roberta(bert_model):
    global tokenizer
    global model
    tokenizer = RobertaTokenizer.from_pretrained('roberta-large')
    model = RobertaForMaskedLM.from_pretrained('roberta-large')
    model.eval()
    if torch.cuda.is_available(): 
        model.to('cuda')#if we have a GPU
    else:
        model.to('cpu')
   
def find_mask_indices(tokenized_text):
    masked_index = []
    for i in range(len(tokenized_text)):
        if tokenized_text[i] == 50264: #'<mask>'
            masked_index.append(i)
    return masked_index

def generate_predictions(prediction_scores,mindex,num_possibilities):
    predicted_k_indexes = torch.topk(prediction_scores[0, mindex],k=num_possibilities)
    predicted_logits_list = predicted_k_indexes[0] 
    predicted_indexes_list = predicted_k_indexes[1]
    return predicted_indexes_list, predicted_logits_list

def generate_possible_words_for_mask(doc):
    # "add_special_tokens adds a <s> to the beginning and </s> to the end of the text
    input_ids = torch.tensor(tokenizer.encode(doc,add_special_tokens=True)).unsqueeze(0)  
    input_ids_tensor = input_ids.to('cpu') # I changed cuda to cpu on 092820
    
    outputs = model(input_ids_tensor, labels=input_ids_tensor) #masked_lm_labels is changed to labels in a recent commit on master. 013021
    
    loss, prediction_scores = outputs[:2]
    num_possibilities = len(prediction_scores[0][0])
    last_masked_index = find_mask_indices(input_ids[0])[-1]
    predicted_indexes_list, predicted_logits_list = generate_predictions(prediction_scores,last_masked_index,num_possibilities)
    return predicted_indexes_list, predicted_logits_list

def find_rank_and_logit(target,predicted_indexes_list,predicted_logits_list):
    tokens_list = predicted_indexes_list.tolist()   
    target = 'Ġ'+target
    target_id = tokenizer.convert_tokens_to_ids(target)
    try:
        rank = tokens_list.index(target_id)
        logit = predicted_logits_list[rank].item()
    except Exception:
        print('Try increasing num_possibilities')
        rank = 'nan'
        logit = 'nan'
    return rank, logit
#%%
###################### Begin here ###########################
initialize_roberta('roberta-large')
import csv

#%%
# presupposition csv
rank_diff_0 = 0
rank_good = 0
rank_bad = 0
logit_good = 0.0
logit_bad = 0.0

rank_good_lst = []
rank_bad_lst = []
rank_diff_lst = []
logit_good_lst = []
logit_bad_lst = []

l = 0

with open ('minimal pairs bert - presupposition.csv', newline='') as csvfile:
     reader=csv.DictReader(csvfile)

     for row in reader:
         l += 1
         target = row['cw']
         doc = row['pre_cw'] + ' <mask> ' + row['post_cw'] + ' '+ row['post_cw_trigger']
         predicted_indexes_list, predicted_logits_list = generate_possible_words_for_mask(doc)
         rank, logit = find_rank_and_logit(target,predicted_indexes_list,predicted_logits_list)
         
         if l%2 != 0:
             #print(row)
             rank_good = rank
             logit_good = logit
             rank_good_lst.append(rank_good)
             logit_good_lst.append(logit_good)
         else:
             rank_bad = rank
             logit_bad = logit
             rank_bad_lst.append(rank_bad)
             logit_bad_lst.append(logit_bad)
             
             rank_diff_0 = rank_bad - rank_good
             rank_diff_lst.append(rank_diff_0)
            

#%%
n=0
with open('bert_accuracy_presupposition.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["num", "rank good", "rank bad", "rank diff", "rank diff > 0"])
    for i,j,q in zip(rank_good_lst, rank_bad_lst, rank_diff_lst):
        n += 1
        if q > 0:
            writer.writerow([n, i, j, q, 1])
        else:
            writer.writerow([n, i, j, q, 0])
            
#%%
# manner implicature csv
rank_diff = 0
rank_good = 0
rank_bad = 0

rank_diff_obj = 0
rank_soso = 0
rank_bad_obj = 0


rank_good_lst = []
rank_bad_lst = []
rank_diff_lst = []

rank_soso_lst = []
rank_bad_obj_lst = []
rank_diff_obj_lst = []



l = 0

with open ('minimal pairs bert - manner implicature.csv', newline='') as csvfile:
     reader=csv.DictReader(csvfile)

     for row in reader:
         l += 1
         target = row['cw']
         doc = row['pre_cw'] + '<mask>' + row['post_cw']
         #print('doc ', doc)
         predicted_indexes_list, predicted_logits_list = generate_possible_words_for_mask(doc)
         rank, logit = find_rank_and_logit(target,predicted_indexes_list,predicted_logits_list)
         
         if l < 25:
             if l%2 != 0:
                 #print('sbj ', row)
                 rank_good = rank
                 rank_good_lst.append(rank_good)
             else:
                 rank_bad = rank
                 rank_bad_lst.append(rank_bad)
                 
                 rank_diff = rank_bad - rank_good
                 rank_diff_lst.append(rank_diff)        
         else:
             if l%2 != 0:
                 #print('obj ', row)
                 rank_soso = rank
                 rank_soso_lst.append(rank_soso)
             else:
                 rank_bad_obj = rank
                 rank_bad_obj_lst.append(rank_bad_obj)
                 rank_diff_obj = rank_bad_obj - rank_soso
                 rank_diff_obj_lst.append(rank_diff_obj)
             
            

#%%
# manner implicature write csv

t=0
with open('bert_accuracy_mannerimplicature.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["num", "rank good", "rank bad", "rank diff",
                     "rank soso", "rank bad obj", "rank diff obj"
                     "rank diff sbj > 0", "rank diff obj > 0"])
    for i,j,q,m,n,p in zip(rank_good_lst, rank_bad_lst, rank_diff_lst,
                     rank_soso_lst, rank_bad_obj_lst, rank_diff_obj_lst):
        t += 1
        if ((q > 0) and (p > 0)):
            writer.writerow([t, i, j, q, m, n, p, 1, 1])
        else:
            if ((q < 0) and (p < 0)):
                writer.writerow([t, i, j, q, m, n, p, 0, 0])
            else:
                if ((q < 0) and (p > 0)):
                    writer.writerow([t, i, j, q, m, n, p, 0, 1])
                else:
                    writer.writerow([t, i, j, q, m, n, p, 1, 0])
                
            

#%%
# scalar implicature csv
rank_diff_baseline = 0
rank_good_baseline = 0
rank_soso_baseline = 0

rank_diff_exp = 0
rank_bad_exp = 0
rank_good_exp = 0

sensitivity = 0

rank_good_baseline_lst = []
rank_soso_baseline_lst = []
rank_diff_baseline_lst = []

rank_bad_exp_lst = []
rank_good_exp_lst = []
rank_diff_exp_lst = []

sensitivity_lst = []


l = 0

with open ('minimal pairs bert - scalar implicature.csv', newline='') as csvfile:
     reader=csv.DictReader(csvfile)

     for row in reader:
         l += 1
         target = row['cw']
         doc = row['pre_cw'] + ' <mask> ' + row['post_cw']
         #print('doc ', doc)
         predicted_indexes_list, predicted_logits_list = generate_possible_words_for_mask(doc)
         rank, logit = find_rank_and_logit(target,predicted_indexes_list,predicted_logits_list)
         
         if row['condition'] == 'baseline':
             if l%2 == 0:
                 #print('baseline ', row)
                 rank_good_baseline = rank
                 rank_good_baseline_lst.append(rank_good_baseline)
             else:
                 rank_soso_baseline = rank
                 rank_soso_baseline_lst.append(rank_soso_baseline)
                 
                 rank_diff_baseline = rank_soso_baseline - rank_good_baseline
                 rank_diff_baseline_lst.append(rank_diff_baseline)        
         else:
             if l%2 == 0:
                 #print('exp ', row)
                 rank_good_exp = rank
                 rank_good_exp_lst.append(rank_good_exp)
             else:
                 rank_bad_exp = rank
                 rank_bad_exp_lst.append(rank_bad_exp)
                 rank_diff_exp = rank_bad_exp - rank_good_exp
                 rank_diff_exp_lst.append(rank_diff_exp)
                 
                 sensitivity = rank_diff_exp - rank_diff_baseline
                 sensitivity_lst.append(sensitivity)
             
            

#%%
# scalar implicature write csv

t=0
with open('bert_accuracy_scalarimplicature.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["num", "rank good baseline", "rank soso baseline", "rank diff baseline",
                     "rank good exp", "rank bad exp", "rank diff exp", "rank_diff_exp - rank_diff_baseline", 
                     "rank diff baseline > 0", "rank diff exp > 0",
                     "sensitivity>0"])
    for i,j,q,m,n,p,a in zip(rank_good_baseline_lst, rank_soso_baseline_lst, rank_diff_baseline_lst,
                     rank_good_exp_lst, rank_bad_exp_lst, rank_diff_exp_lst, sensitivity_lst):
        t += 1
        if ((q > 0) and (p > 0) and (a > 0)):
            writer.writerow([t, i, j, q, m, n, p, a, 1, 1, 1])
        else:
            if ((q < 0) and (p < 0) and (a<0)):
                writer.writerow([t, i, j, q, m, n, p, a, 0, 0, 0])
            else:
                if ((q < 0) and (p > 0) and (a>0)):
                    writer.writerow([t, i, j, q, m, n, p, a, 0, 1, 1])
                else:
                    if ((q < 0) and (p > 0) and (a<0)):
                        writer.writerow([t, i, j, q, m, n, p, a, 0, 1, 0])
                    else:
                        if ((q > 0) and (p > 0) and (a<0)):
                            writer.writerow([t, i, j, q, m, n, p, a, 1, 1, 0])
                        else:
                            if ((q > 0) and (p < 0) and (a<0)):
                                writer.writerow([t, i, j, q, m, n, p, a, 1, 0, 0])
                
            


#%%
