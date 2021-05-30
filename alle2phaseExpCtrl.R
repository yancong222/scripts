#########################
# author: Yan Cong
# artificial language learning experiment (revised; following Buccola et al 2018)
# as of 05/24/2021
#############################install packages##################################################
load("...") # add directory

install.packages("plyr") # you don't need to install pkg every single time
install.packages("dplyr") # you need to type Yes into the console
#install.packages("stringr")
install.packages("lattice")
install.packages("tidyverse")
install.packages("sciplot")

library(lattice)
library(plyr)
library(dplyr)
library(stringr)
library(forcats)
library(ggplot2)
theme_update(text = element_text(size=11),
             axis.text.x = element_text(angle=90, hjust=1))
library(sciplot)
library(tidyr)

##########################for data visualization ----#########################

# link: https://mgimond.github.io/ES218/Week04b.html
# Define an array of colors. The first array generates unique hues while the 
# second generates different shades of grey
col.qual <- c("#FBB4AE","#B3CDE3","#CCEBC5","#DECBE4","#FED9A6","#FFFFCC","#E5D8BD")
col.grey <- c("#DFDFDF","#BFBFBF","#9F9F9F","#808080","#606060","#404040","#202020")

# Modify the Trellis parameters
trellis.par.set(superpose.polygon = list(col = col.qual, border = "black"))
trellis.par.set(strip.background = list(col = col.grey))
trellis.par.set(add.text = list(cex = 0.8, col="black"))
trellis.par.set(par.xlab.text = list(cex = 0.8, col="grey20"))

#########################read CSV file; descriptive statistics#########################
data_exp = read.csv("alle2phaseExp.csv", header = TRUE)
data_ctrl = read.csv("alle2phaseCtrl.csv", header = TRUE)
############################accuracy check################################
data_good_long_exp <- gather(data_exp, noncritical, accuracy, 
                         c("key_resp_t1_2.corr", "key_resp_t1.corr", "key_resp_dax12_2.corr",
                           "key_resp_dax9_3.corr", "key_resp_dax12_3.corr", "key_resp_blicketfep21_2.corr",
                           "key_resp_smicketfep27_2.corr"), 
                         factor_key = TRUE)

aggAccuracy_exp <- aggregate(as.numeric(data_good_long_exp$accuracy), 
                         by=list(data_good_long_exp$prolific.ID), 
                         mean, na.rm = T)
lowAcc_exp <- subset(aggAccuracy_exp, x < 0.8)$Group.1
lowAcc_exp

data_sub_exp <- subset(data_exp, !(prolific.ID %in% lowAcc_exp)) 
data_sub_exp

###########################
data_good_long_ctrl <- gather(data_ctrl, noncritical, accuracy, 
                             c("key_resp_t1_2.corr", "key_resp_t1.corr", 
                               "key_resp_dax9_2.corr", "key_resp_tas32_2.corr"), 
                             factor_key = TRUE)

aggAccuracy_ctrl <- aggregate(as.numeric(data_good_long_ctrl$accuracy), 
                             by=list(data_good_long_ctrl$prolific.ID), 
                             mean, na.rm = T)
lowAcc_ctrl <- subset(aggAccuracy_ctrl, x < 0.8)$Group.1
lowAcc_ctrl

data_sub_ctrl <- subset(data_ctrl, !(prolific.ID %in% lowAcc_ctrl)) 
data_sub_ctrl

#########################manipulate data frame###########################
byphase_exp <- subset(data_sub_exp, 
                  data_sub_exp$trials_t1.ran == "1" | data_sub_exp$trials_t2.ran == "1")
byphase_exp$phase <- ifelse(byphase_exp$trials_t1.ran == "1", "phase1",
                        ifelse(byphase_exp$trials_t2.ran == "1", "phase2", ""))

byphase_exp$critical_b_cost <- ifelse(byphase_exp$critical_b.keys == "1", 1, 0)
byphase_exp$critical_w_cost <- ifelse(byphase_exp$critical_w.keys == "1", 1, 0)

byphase_long_exp <- gather(byphase_exp, critical, 
                           cost, critical_b_cost:critical_w_cost, factor_key = TRUE)

byphase_long_exp %>%
  group_by(phase) %>%
  summarise(mean = mean(cost),
            se = se(cost))
#################################################
byphase_ctrl <- subset(data_sub_ctrl, 
                      data_sub_ctrl$trials_t1.ran == "1" | data_sub_ctrl$trials_t3.ran == "1")
byphase_ctrl$phase <- ifelse(byphase_ctrl$trials_t1.ran == "1", "phase1",
                            ifelse(byphase_ctrl$trials_t3.ran == "1", "phase3", ""))

byphase_ctrl$critical_b_cost <- ifelse(byphase_ctrl$critical_b.keys == "1", 1, 0)
byphase_ctrl$critical_w_cost <- ifelse(byphase_ctrl$critical_w.keys == "1", 1, 0)

byphase_long_ctrl <- gather(byphase_ctrl, critical, 
                           cost, critical_b_cost:critical_w_cost, factor_key = TRUE)

byphase_long_ctrl %>%
  group_by(phase) %>%
  summarise(mean = mean(cost),
            se = se(cost))

########################plot error bar################################
library(RColorBrewer)

clrs_spec <- colorRampPalette(rev(brewer.pal(9, "Dark2")))
clrs_hcl <- function(n) {
  hcl(h = seq(230, 0, length.out = n), 
      c = 60, l = seq(10, 90, length.out = n), 
      fixup = TRUE)
}



data_exp=group_by(byphase_long_exp, session, phase)%>% 
  summarise(mean=mean(cost),se=se(cost))
head(data_exp)

data_ctrl=group_by(byphase_long_ctrl, session, phase)%>% 
  summarise(mean=mean(cost),se=se(cost))
head(data_ctrl)


par(mar = c(1,2))
p_exp=ggplot(data = data_exp, aes(x = phase, y = mean, y.label)) + 
  geom_bar(fill = c("#1B9E77", "#D95F02"),
           position = "dodge", stat = "identity") + 
  geom_errorbar(aes(ymin=mean-se, ymax=mean+se),
                width = 0.3,position = "dodge",alpha = 0.7) +
  facet_wrap(~ session) 

p_exp + scale_x_discrete(name ="Competition group") +
  scale_y_continuous(name="Proportion of costly-object-type response") + 
  theme(axis.text.x = element_text(face="bold", color="#993333", 
                                   size=7, angle=10))


#############################################################
p_ctrl=ggplot(data = data_ctrl, aes(x = phase, y = mean, y.label)) + 
  geom_bar(fill = c("#1B9E77", "#D95F02"),
           position = "dodge", stat = "identity") + 
  geom_errorbar(aes(ymin=mean-se, ymax=mean+se),
                width = 0.3,position = "dodge",alpha = 0.7) +
  facet_wrap(~ session) 

p_ctrl + scale_x_discrete(name ="Non-Competition group") +
  scale_y_continuous(name="Proportion of costly-object-type response") + 
  theme(axis.text.x = element_text(face="bold", color="#993333", 
                                   size=7, angle=10))






