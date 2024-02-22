#####################################################################################
##    Sample analysis script for linguistic surveys run on Mechanical Turk         ##
##    For surveys cosntructed using the tools described in Erlewine&Kotek (2013)   ##
##    May 2013 Hadas Kotek, licensed under the MIT license                         ##
#####################################################################################
#install.packages("plyr") # you don't need to install pkg every single time
library(plyr)
#install.packages("dplyr") # you need to type Yes into the console
library(dplyr)
#install.packages("stringr")
library(stringr)

#install.packages("lattice")
library(lattice)

library(ggplot2)
library(viridis)
# file prep ----

# read in the file
results <- read.csv("cmb_v3.csv",header=TRUE) 

# so here is my way to show me my accuracy

fillers <- subset(results, results$true_how == 'necessarily')
#fillers


# add isCorrect (the correct answers) column into a dataframe based on condition
fillers$isCorrect <- ifelse(fillers$true_can_1.response == fillers$predicted, 1, 0)
#fillers

aggAccuracy <- aggregate(fillers$isCorrect, by=list(fillers$participant), mean, na.rm = T)

lowAcc <- subset(aggAccuracy, x < 0.75)$Group.1
#lowAcc
results <- subset(results, !(participant %in% lowAcc)) 
#results


# create a dataframe for target items ---
targets <- subset(results, results$true_how == 'possibly')
head(targets)

# add conditions columns 
targets$scenarios <- ifelse(grepl("pos-t-comp-f", targets$code), "pos-t-comp-f", "pos-f-comp-t")
targets$ling_envr <- ifelse((grepl("-bu", targets$code) | grepl("-nothing", targets$code) | grepl("-only", targets$code)), 
                            "downward", "upward")

# targets and controls [upward]
plain <- subset(results, results$ling_con == 'upward')
plain$cond <- ifelse(grepl("pos-t-comp-f", plain$code), "pos-t-comp-f", 
                     ifelse(grepl("pos-f-comp-t", plain$code), "pos-f-comp-t",
                            ifelse(grepl("pos-t-comp-t", plain$code), "c-pos-t-comp-t", "c-pos-f-comp-f")))


# targets and controls [downward]
modified <- subset(results, grepl("downward_", results$ling_con))

modified$ling_subcon <- ifelse(modified$ling_con == "downward_not", "not", 
                        ifelse(modified$ling_con == "downward_nothing", "nothing", "only"))

modified$cond <- ifelse(grepl("pos-t-comp-f", modified$code), "pos-t-comp-f", 
                     ifelse(grepl("pos-f-comp-t", modified$code), "pos-f-comp-t",
                            ifelse(grepl("pos-t-comp-t", modified$code), "c-pos-t-comp-t", 
                                   "c-pos-f-comp-f")))

# intercept-only mixed logistic regression in order to test for difference from 50% chance level
#install.packages("lme4")
library(lme4)

upward_pos_glmer_data = subset(targets, targets$ling_con == 'upward' & targets$scenarios == 'pos-t-comp-f')
upward_pos_glmer_model = glmer(true_can_1.response ~ 1 + (1|participant), family='binomial', data = upward_pos_glmer_data)
summary(upward_pos_glmer_model)

upward_comp_glmer_data = subset(targets, targets$ling_con == 'upward' & targets$scenarios == 'pos-f-comp-t')
upward_comp_glmer_model = glmer(true_can_1.response ~ 1 + (1|participant), family='binomial', data = upward_comp_glmer_data)
summary(upward_comp_glmer_model)

not_pos_glmer_data = subset(targets, targets$ling_con == 'downward_not' & targets$scenarios == 'pos-t-comp-f')
not_pos_glmer_model = glmer(true_can_1.response ~ 1 + (1|participant), family='binomial', data = not_pos_glmer_data)
summary(not_pos_glmer_model)

not_comp_glmer_data = subset(targets, targets$ling_con == 'downward_not' & targets$scenarios == 'pos-f-comp-t')
not_comp_glmer_model = glmer(true_can_1.response ~ 1 + (1|participant), family='binomial', data = not_comp_glmer_data)
summary(not_comp_glmer_model)

#nothing_pos_glmer_data = subset(targets, targets$ling_con == 'downward_nothing' & targets$scenarios == 'pos-t-comp-f')
#nothing_pos_glmer_model = glmer(true_can_1.response ~ 1 + (1|participant), family='binomial', data = nothing_pos_glmer_data) # Error: Response is constant

nothing_comp_glmer_data = subset(targets, targets$ling_con == 'downward_nothing' & targets$scenarios == 'pos-f-comp-t')
nothing_comp_glmer_model = glmer(true_can_1.response ~ 1 + (1|participant), family='binomial', data = nothing_comp_glmer_data)
summary(nothing_comp_glmer_model)

#only_pos_glmer_data = subset(targets, targets$ling_con == 'downward_only' & targets$scenarios == 'pos-t-comp-f')
#only_pos_glmer_model = glmer(true_can_1.response ~ 1 + (1|participant), family='binomial', data = only_pos_glmer_data) # Error: Response is constant
 
only_comp_glmer_data = subset(targets, targets$ling_con == 'downward_only' & targets$scenarios == 'pos-f-comp-t')
only_comp_glmer_model = glmer(true_can_1.response ~ 1 + (1|participant), family='binomial', data = only_comp_glmer_data)
summary(only_comp_glmer_model)

psych::describe(targets$true_can_1.response)

#######There is also the question of whether our two target response rates (78% and 63%) 
#are significantly different from each other.
##upward
upward_pos_comp_data = subset(targets, targets$ling_con == 'upward' & 
                                (targets$scenarios == 'pos-t-comp-f' | 
                                   targets$scenarios == 'pos-f-comp-t'))
wilcox.test(true_can_1.response ~ scenarios, data = upward_pos_comp_data, paired = TRUE)

##downward
not_pos_comp_data = subset(modified, modified$ling_subcon == 'not' & 
                                (modified$cond == 'pos-t-comp-f' | 
                                   modified$cond == 'pos-f-comp-t'))
wilcox.test(true_can_1.response ~ cond, 
            data = not_pos_comp_data, 
            paired = TRUE)

nothing_pos_comp_data = subset(modified, modified$ling_subcon == 'nothing' & 
                             (modified$cond == 'pos-t-comp-f' | 
                                modified$cond == 'pos-f-comp-t'))
wilcox.test(true_can_1.response ~ cond, 
            data = nothing_pos_comp_data, 
            paired = TRUE)

only_pos_comp_data = subset(modified, modified$ling_subcon == 'only' & 
                                 (modified$cond == 'pos-t-comp-f' | 
                                    modified$cond == 'pos-f-comp-t'))
wilcox.test(true_can_1.response ~ cond, 
            data = only_pos_comp_data, 
            paired = TRUE)

######Statistically, 
#we would like to show that both targets are significantly different from the "no" responses. 
####upward
upward_no_pos = subset(plain, plain$cond == 'c-pos-f-comp-f' |
                        plain$cond == 'pos-t-comp-f')
wilcox.test(true_can_1.response ~ cond, data = upward_no_pos, paired = TRUE)


upward_no_comp = subset(plain, plain$cond == 'c-pos-f-comp-f' |
                         plain$cond == 'pos-f-comp-t')
wilcox.test(true_can_1.response ~ cond, data = upward_no_comp, paired = TRUE)

####downward
not_no_pos = subset(modified, (ling_subcon == 'not') &
                      (modified$cond == 'c-pos-f-comp-f' |
                         modified$cond == 'pos-t-comp-f'))
wilcox.test(true_can_1.response ~ cond, data = not_no_pos, paired = TRUE)

not_no_comp = subset(modified, (ling_subcon == 'not') &
                      (modified$cond == 'c-pos-f-comp-f' |
                         modified$cond == 'pos-f-comp-t'))
wilcox.test(true_can_1.response ~ cond, data = not_no_comp, paired = TRUE)

nothing_no_pos = subset(modified, (ling_subcon == 'nothing') &
                      (modified$cond == 'c-pos-f-comp-f' |
                         modified$cond == 'pos-t-comp-f'))
wilcox.test(true_can_1.response ~ cond, data = nothing_no_pos, paired = TRUE)

nothing_no_comp = subset(modified, (ling_subcon == 'nothing') &
                          (modified$cond == 'c-pos-f-comp-f' |
                             modified$cond == 'pos-f-comp-t'))
wilcox.test(true_can_1.response ~ cond, data = nothing_no_comp, paired = TRUE)

#cannot include 'only' because it's all necessarily no possibly
only_no_pos = subset(modified, (ling_subcon == 'only') &
                          (modified$cond == 'c-pos-f-comp-f' |
                             modified$cond == 'pos-t-comp-f'))
# fill na cells with mean of that column
only_no_pos$true_can_1.response[is.na(only_no_pos$true_can_1.response)]<-mean(only_no_pos$true_can_1.response,na.rm=TRUE)
wilcox.test(true_can_1.response ~ cond, data = only_no_pos, paired = TRUE)

only_no_comp = subset(modified, (ling_subcon == 'only') &
                       (modified$cond == 'c-pos-f-comp-f' |
                          modified$cond == 'pos-f-comp-t'))
# fill na cells with mean of that column
only_no_comp$true_can_1.response[is.na(only_no_comp$true_can_1.response)]<-mean(only_no_comp$true_can_1.response,na.rm=TRUE)
wilcox.test(true_can_1.response ~ cond, data = only_no_comp, paired = TRUE)
