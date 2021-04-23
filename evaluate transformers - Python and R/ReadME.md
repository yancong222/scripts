Summary: Python script and R script for large-scale data mining project 

Project description: The team developed scripts and metrics to evaluate transformers' understanding of natural language inferences. Results are visualized in R (using ggplot and lattice)

Folder includes: Python scripts and R scripts

-----------------------------------------------

RoBERTa:

roberta_rank_accuracy.py implements the 'fill in the mask' algorithm to predict word, and uses metrics such as accuracy, HITs@K, relative rank, logits mean, and trucation.

rank_roberta.py implements the 'fill in the mask' algorithm to predict word, and functions are defined to generate logits and rank

-----------------------------------------------

Text-to-Text-Transformer (T5):

logits_rank_T5.py generates averaged rank in all, averaged logits, and probability distribution in word-prediction/cloze format.

loss_T5.py generates cross-entropy loss based on experimental conditions; it's also used to read csv files

loss_manner_implicature.py generates cross-entropy loss for manner implicatures 

loss_presupposition.py generates cross-entropy loss for presupposition

loss_scalar_implicature.py generates cross-entropy loss for scalar implicature


-----------------------------------------------

Data Analysis:

accuracy_stats.R is used to conduct descriptive/exploratory statistics, to visualize data, to run Shapiro-Wilk normality test (among others) to make sure a parametric test is valid, and to run ANOVA. 
