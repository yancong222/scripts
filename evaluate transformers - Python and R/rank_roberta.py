"""
# -*- coding: utf-8 -*-
# @authors: Phillip Wolff and Yan Cong
"""
#####################import libraries---################################
import torch
#from pytorch_transformers import RobertaTokenizer, RobertaForMaskedLM
from transformers import RobertaTokenizer, RobertaForMaskedLM

##############################initialize roberta (fill in the mask)---##############################
def initialize_roberta(bert_model):
    global tokenizer
    global model
    tokenizer = RobertaTokenizer.from_pretrained('roberta-large')
    model = RobertaForMaskedLM.from_pretrained('roberta-large')
    model.eval()
    if torch.cuda.is_available(): model.to('cuda') #if we have a GPU

##############################find mask indices in tokenized text---##############################
def find_mask_indices(tokenized_text):
    masked_index = []
    for i in range(len(tokenized_text)):
        if tokenized_text[i] == 50264: #'<mask>'
            masked_index.append(i)
    return masked_index

##############################generate logits---##############################
def generate_predictions(prediction_scores,mindex,num_possibilities):
    predicted_k_indexes = torch.topk(prediction_scores[0, mindex],k=num_possibilities)
    predicted_logits_list = predicted_k_indexes[0] 
    predicted_indexes_list = predicted_k_indexes[1]
    return predicted_indexes_list, predicted_logits_list

##############################generate words based on context/surround words, calculates logits---##############################
def generate_possible_words_for_mask(doc):
    # "add_special_tokens adds a <s> to the beginning and </s> to the end of the text
    input_ids = torch.tensor(tokenizer.encode(doc,add_special_tokens=True)).unsqueeze(0)  
    input_ids_tensor = input_ids.to("cpu") # I changed cuda to cpu on 092820
    outputs = model(input_ids_tensor, masked_lm_labels=input_ids_tensor)
    loss, prediction_scores = outputs[:2]
    num_possibilities = len(prediction_scores[0][0])
    last_masked_index = find_mask_indices(input_ids[0])[-1]
    predicted_indexes_list, predicted_logits_list = generate_predictions(prediction_scores,last_masked_index,num_possibilities)
    return predicted_indexes_list, predicted_logits_list

##############################locate the word id, rank, and its logit---##############################
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

######################Begin here - csv file###########################
initialize_roberta('roberta-large')
#####read csv file line by line - I lost the logits... they are not quite right...
import csv
# make sure put the csv file in stellacong/
#raw = {}
        
###############metric: Hit 10 5 1 for Scalar Implicature---##############################
l = 0
r10 = 0
r5 = 0
r1 = 0
r = 0
with open ('ScalarImplicature1023.csv', newline = '') as f:
    reader = csv.DictReader(f)
    for row in reader:
        #print(row)
        l += 1
        if (l % 2 != 0) and (str(row['SI']) == 'unnoticed'):
            #print(row)
            if (int(row['rank']) < 11) and (int(row['rank']) > 5):
                r10 += 1
            elif int(row['rank']) < 6 and (int(row['rank']) > 0):
                r5 += 1                
            elif int(row['rank']) < 1:
                r1 += 1
            else:
                r += 0
                
print('r10: ', r10)    
print('r5: ', r5)     
print('r1: ', r1)    

################metric: relative rank for ScalarImplicature---##############################
# mean rank of lungs which
l = 0
lst = []
with open ('ScalarImplicature1021.csv', newline = '') as f:
    reader = csv.DictReader(f)
    for row in reader:
        l += 1
        if (l % 2 != 0) and (str(row['SI']) == 'noticed'):
            lst.append(int(row['rank']))
lst
len(lst)
sum(lst)/len(lst)

##############meric: relative rank for entailment-yes---##############################
# mean rank of "lungs that..."
l = 0
lst = []
with open ('ScalarImplicature1021.csv', newline = '') as f:
    reader = csv.DictReader(f)
    for row in reader:
        l += 1
        if (l % 2 != 0) and (str(row['SI']) == 'unnoticed'):
            lst.append(int(row['rank']))
lst
len(lst)
sum(lst)/len(lst)

with open ('MannerImplicature1020.csv', newline='') as f:
    reader = csv.DictReader(f)
    for line in reader:
        target = 'Yes'
        doc = str(line['before']) + str(' ') + str(line['cw']) + str(' ') + str(line['after']) + str(' ') + str(line['equestion']) + str(' <mask>') + str(' .')
        #print(doc)
        predicted_indexes_list, predicted_logits_list = generate_possible_words_for_mask(doc)
        rank, logit = find_rank_and_logit(target,predicted_indexes_list,predicted_logits_list)
        print(rank,logit)        
        
####################metric: logits mean---##############################################
l = 0
r = 0
n = 0
with open ('MannerImplicature1102.csv', newline = '') as f:
    reader = csv.DictReader(f)
    for row in reader:
        l += 1
        if 34 < l < 61:
            n += 1
            print(row['cwtype'], n)
            r += float(row['rewordlogits']) # reinforcement Internal argument 
print('tpretty-re-logits: ', r/n) 

####################metric: logits mean---##############################
l = 0
r = 0
n = 0
with open ('MannerImplicature1102.csv', newline = '') as f:
    reader = csv.DictReader(f)
    for row in reader:
        l += 1
        if 0 < l < 35:
            n += 1
            print(row['cwtype'], n)
            r += float(row['ewordlogtis']) # Internal argument 
print('tpretty-e-logits: ', r/n)  

###############3##metric: Hit @ 10 and trunc for yes rank group 1---##############################
l = 0
r = 0
with open ('MannerImplicature1023.csv', newline = '') as f:
    reader = csv.DictReader(f)
    for row in reader:
        l += 1
        if l < 35:
            if int(row['itruncquestionrank']) < 1: # change 11 to 6 for hit 5
                r += 1
print('tpretty-q: ', r/34)   
                
################################3##metric: mean rank---##############################
l = 0
lstt = []

with open ('MannerImplicature1023.csv', newline = '') as f:
    reader = csv.DictReader(f)
    for row in reader:
        l += 1
        if 60 < l < 87:
            lstt.append(int(row['itruncquestionrank']))
 

print('tshorterq: ', sum(lstt)/len(lstt))
      
##############metric: trunctation---##################################################
with open ('PrespSurprise1023.csv', newline='') as f:
    reader = csv.DictReader(f)
    for line in reader:
        target = 'No'
        doc = str(line['NPI']) + str(line['period2']) + str(line['iquestion']) + str(' ') + str('<mask>') + '.'    
        predicted_indexes_list, predicted_logits_list = generate_possible_words_for_mask(doc)
        rank, logit = find_rank_and_logit(target,predicted_indexes_list,predicted_logits_list)
        print(rank,logit)

