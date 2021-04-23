#%%
# authors: Phillip Wolff and Yan Cong
#%%
# import libraries
import torch 
from transformerslogits import T5Tokenizer, T5Config, T5ForConditionalGeneration
import sys  

#%%
# t5-11b needs virtual machine, or a big GPU
T5_PATH = 't5-small' # "t5-small", "t5-base", "t5-large", "t5-3b", "t5-11b"

DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu') 

t5_tokenizer = T5Tokenizer.from_pretrained(T5_PATH)
t5_config = T5Config.from_pretrained(T5_PATH)
t5_mlm = T5ForConditionalGeneration.from_pretrained(T5_PATH, config=t5_config).to(DEVICE)

#%%
# Input text
# text = "A sugar cube can be dissolved by adding <extra_id_0>. </s>" #base: -0.37333520253499347
import csv

##############reinforce-implicature-word----##############################################
l=0
with open ('MannerImplicature1102.csv', newline='') as f:
    reader = csv.DictReader(f)
    for line in reader:
        l += 1
        if 22 < l < 35: #change here for different conditions
            target = str(line['target'])
            text = str(line['before']) + str(' ') + str(line['cw']) + str(' ') + str(line['ieafter']) + str(' ') + str(line['reinforce']) + str(' ') + str(line['ribefore']) + str(' <extra_id_0>. ')
            print('flag: ', text, target)
            encoded = t5_tokenizer.encode_plus(text, add_special_tokens=True, return_tensors='pt')
            input_ids = encoded['input_ids'].to(DEVICE)
            
            outputs_all = t5_mlm.generate(input_ids=input_ids, 
                          num_beams=32128, num_return_sequences=32128, #vocab_size=32128
                          max_length=3) #crucial need to be 3
            
            scores_all = outputs_all[1]
            generation_all = outputs_all[0] # crucial to have generation
            
            def _filter(output, end_token='<extra_id_1>'): 
                # The first token is <unk> (inidex at 0) and the second token is <extra_id_0> (indexed at 32099)
                _txt = t5_tokenizer.decode(output[2:], skip_special_tokens=False, clean_up_tokenization_spaces=False)
                if end_token in _txt:
                    _end_token_index = _txt.index(end_token)
                    return _txt[:_end_token_index]
                else:
                    return _txt
            
            result_all = list(map(_filter, generation_all))
            
            rank_in_all = result_all.index(target)
            logits_in_all = scores_all[rank_in_all]
            
            p_in_all = torch.nn.functional.softmax(torch.Tensor(scores_all), dim=0).tolist()[rank_in_all]

            print('rank_in_all: ', rank_in_all) 
            print('logits_in_all: ', logits_in_all) 
            
            ##############prob distribution-------#######################################
            print('p_in_all: ', p_in_all) 





