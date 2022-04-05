'''
torch
transformers
sentencepiece
protobuf

# Extra packages needed to run demo code:
streamlit
flask
'''

from datetime import datetime
import json
import math
import os
import sys

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM, T5Tokenizer
from transformers import logging as transformers_logging

tokenizer = AutoTokenizer.from_pretrained("allenai/macaw-large")
model = AutoModelForSeq2SeqLM.from_pretrained("allenai/macaw-large")
input_string = "$answer$ ; $mcoptions$ ; $question$ = What is the color of a cloudy sky?"
input_ids = tokenizer.encode(input_string, return_tensors="pt")
output = model.generate(input_ids, max_length=200)

tokenizer.batch_decode(output, skip_special_tokens=True)

import utils
from utils import SLOT_FROM_LC, GENERATOR_OPTIONS_DEFAULT, decompose_slots, get_raw_response, load_model, make_input_from_example, run_macaw, run_model, run_model_with_outputs

model_dict = load_model("allenai/macaw-large", cuda_devices = None) 
res1 = run_macaw("Q: Which force pulls objects to the ground?\nA\nE", model_dict)
# Alternate input syntax
res2 = run_macaw({"Q:":"Which force causes a compass needle to point north?", "A":""}, model_dict)
# Add sampling options for the output
res3 = run_macaw("Q: Which force pulls objects to the ground?\nA\nE", model_dict, {"do_sample": True, "temperature": 2.0})

# Add more reqturn sequences and make the outputs less repetative
res4 = run_macaw("Q: What is an implication of something being opaque?\nA\nE", model_dict, 
{"do_sample": True, "num_return_sequences": 5, "repetition_penalty": 3.0})
res4['output_slots_list']

'''
[{'answer': 'it cannot be seen',
  'explanation': 'If an object is made of something then the parts of that object are exposed to light. Being transparent means not being visible to others. Visibility in some environments decreases for example when using clear materials or stickers on objects, such as metal'},
 {'answer': "it's hard to see through",
  'explanation': 'If an object is made of something then the parts of that object are covered with this material. Being transparent means not being visible in bright light. Visibility has no impact on anything except for image quality.'},
 {'answer': 'it can be seen without being covered',
  'explanation': 'Being transparent has a positive impact on seeing. Transparency is the opposite of confidentiality. If an object is made from something then that material will remain opaque to everyone except those who are close to him or her.'},
 {'answer': 'it is hard to see through',
  'explanation': 'If an object is made of something then the parts of that object are covered with visible material. Being transparent means not seeing thru small holes in things. Opacity has no impact on visibility.'},
 {'answer': "it can't be seen",
  'explanation': 'If an object is made of something then the parts of that object are visible to the observer. Being transparent means not being observed by humans or animals.'}]
'''


