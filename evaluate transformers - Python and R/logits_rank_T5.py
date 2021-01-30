#%%
# authors: Phillip Wolff and Yan Cong
import torch 

from transformerslogits import T5Tokenizer, T5Config, T5ForConditionalGeneration

import sys  

#%%
T5_PATH = 't5-small' # "t5-small", "t5-base", "t5-large", "t5-3b", "t5-11b"

DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu') 

t5_tokenizer = T5Tokenizer.from_pretrained(T5_PATH)
t5_config = T5Config.from_pretrained(T5_PATH)
#t5_mlm = T5ForConditionalGeneration.from_pretrained("C:\\Users\\Administrator\\Desktop\\t5-3b-pytorch_model.bin", config=t5_config, local_files_only=True).to(DEVICE)
t5_mlm = T5ForConditionalGeneration.from_pretrained(T5_PATH, config=t5_config).to(DEVICE)

#%%
# Input text
# text = "A sugar cube can be dissolved by adding <extra_id_0>.</s>" #base: -0.37333520253499347
text = "The moive is good, which is to say that it's not <extra_id_0>. </s>"  # great "

#%%

encoded = t5_tokenizer.encode_plus(text, add_special_tokens=True, return_tensors='pt')
input_ids = encoded['input_ids'].to(DEVICE)

#%%

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

rank_in_all = result_all.index('great')
logits_in_all = scores_all[rank_in_all]

# p_in_all = torch.nn.functional.softmax(torch.Tensor(scores_all), dim=0) #tensor
p_in_all = torch.nn.functional.softmax(torch.Tensor(scores_all), dim=0).tolist()[rank_in_all]

print(result_all)
print(scores_all)

print('rank_in_all: ', rank_in_all) # 14
print('logits_in_all: ', logits_in_all) # -1.58004363377889

# prob distribution
print('p_in_all: ', p_in_all) #tensor([1.6723e-03, 1.6085e-03, 1.5772e-03,  
        #..., 1.7735e-06, 1.7735e-06,
        #1.7734e-06]) 
        # tolist: 0.0007268478511832654
        


#%%
outputs = t5_mlm.generate(input_ids=input_ids, 
                          num_beams=10, num_return_sequences=10, #crucial
                          max_length=3) #crucial need to be 3


scores = outputs[1]
generation = outputs[0] # crucial to have generation

def _filter(output, end_token='<extra_id_1>'): 
    # The first token is <unk> (inidex at 0) and the second token is <extra_id_0> (indexed at 32099)
    _txt = t5_tokenizer.decode(output[2:], skip_special_tokens=False, clean_up_tokenization_spaces=False)
    if end_token in _txt:
        _end_token_index = _txt.index(end_token)
        return _txt[:_end_token_index]
    else:
        return _txt

result = list(map(_filter, generation)) #t5-small: ['good', '', 'bad', 'too', 'the',
                                        # 'really', 'so', 'worth', 'very', 'hard']
top1 = result[0]
rank = result.index('good')

p = torch.nn.functional.softmax(torch.Tensor(scores), dim=0)

print(result)
print(scores)

# prob distribution
print('p: ', p) #num_beams=10: tensor([0.1432, 0.1377, 0.1350, 0.1091, 0.1015, 0.0875, 0.0803, 0.0689, 0.0688,
        #0.0679])
        #num_beams=5: tensor([0.2285, 0.2198, 0.2155, 0.1741, 0.1620])
        #num_beams=2: tensor([0.5097, 0.4903])

print('rank: ', rank)

#%%
# model.signatures.keys()
