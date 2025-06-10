
#####################################################################################
##    Sample analysis script for linguistic surveys run on Mechanical Turk         ##
##    For surveys cosntructed using the tools described in Erlewine&Kotek (2013)   ##
##    May 2013 Hadas Kotek, licensed under the MIT license                         ##
#####################################################################################
install.packages("plyr") # you don't need to install pkg every single time
install.packages("dplyr") # you need to type Yes into the console
#install.packages("stringr")
install.packages("lattice")
install.packages("tidyverse")

library(lattice)
library(plyr)
library(dplyr)
library(stringr)
library(forcats)
library(ggplot2)
# file prep ----

# read in the file
results <- read.csv("merge30.csv",header=TRUE) 
summary(results)
# so here is my way to show me my accuracy

fillers <- subset(results, results$true_how == 'necessarily')
fillers


# add isCorrect (the correct answers) column into a dataframe based on condition
fillers$isCorrect <- ifelse(fillers$true_can_1.response == fillers$predicted, 1, 0)
fillers

aggAccuracy <- aggregate(fillers$isCorrect, by=list(fillers$participant), mean, na.rm = T)

lowAcc <- subset(aggAccuracy, x < 0.80)$Group.1
lowAcc
results <- subset(results, !(participant %in% lowAcc)) 
results

results$true_can_not <- ifelse(results$true_can_1.response == 0, "cannot", "can")
results

# data visualization ----

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


# targets and controls [upward]
plain <- subset(results, results$ling_con == 'upward')
plain$cond <- ifelse(grepl("pos-t-comp-f", plain$code), "pos-t-comp-f", 
                     ifelse(grepl("pos-f-comp-t", plain$code), "pos-f-comp-t",
                            ifelse(grepl("pos-t-comp-t", plain$code), "c-pos-t-comp-t", "c-pos-f-comp-f")))

histogram(~ true_can_1.response | cond, data = plain,
          type="percent",
          scales = list(
            x=list(at=c(0, 1), labels = c("cannot", "can"), font = "italic"),
            y=list(at=c(0,10,20,30,40,50,60,70,80,90,100), cex = 0.5)),
          xlab=list(label = "Response", cex = 1),
          main=list(label="Plain form", cex=1),
          group = true_can_not, auto.key = list(columns = 2),
          col = c('lightblue', 'pink'))

# targets and controls [downward]
modified <- subset(results, grepl("downward_", results$ling_con))

modified$ling_subcon <- ifelse(modified$ling_con == "downward_not", "not", 
                        ifelse(modified$ling_con == "downward_nothing", "nothing", "only"))

modified$cond <- ifelse(grepl("pos-t-comp-f", modified$code), "pos-t-comp-f", 
                     ifelse(grepl("pos-f-comp-t", modified$code), "pos-f-comp-t",
                            ifelse(grepl("pos-t-comp-t", modified$code), "c-pos-t-comp-t", 
                                   "c-pos-f-comp-f")))

histogram(~ true_can_1.response | ling_subcon * cond, data = modified,
          type="percent",
          scales = list(
            x=list(at=c(0, 1), labels = c("cannot", "can"), font = "italic"),
            y=list(at=c(0,20,40,60,80,100), cex = 0.5)),
          xlab=list(label = "Response", cex = 1),
          main=list(label = "Modified by Negation and Quantifiers", cex=1),
          group = true_can_not, auto.key = list(columns = 2),
          col = c('lightblue', 'pink'))

#show.settings()  // about colors
#trellis.par.get()

#############################################################
# RT
p <- plain %>%
  ggplot( aes(x=true_how, y=true_can_1.rt, fill=true_how)) + 
    geom_boxplot() +
    ggtitle("Plain form") +
    xlab("Scenarios") +
    theme(legend.position = "top", legend.title = element_blank(), 
        legend.background = element_rect(fill="lightblue", 
                                         size=0.5, linetype="solid")) +
    ylab("Response Time (seconds)") +
    xlab("") +
    xlab("")
p
p + ylim(0,20)




q <- modified %>%
  ggplot( aes(x=ling_subcon, y=true_can_1.rt, fill=true_how)) + 
  geom_boxplot() +
  ggtitle("Modified by negation and quantifiers") +
  xlab("Conditions") +
  theme(legend.position = "top", legend.title = element_blank(), 
        legend.background = element_rect(fill="lightblue", 
                                         size=0.5, linetype="solid")) +
  ylab("Response Time (seconds)") +
  xlab("") +
  xlab("")
q
q + ylim(0,20)


targets <- subset(results, results$true_how == 'possibly')
targets

# add conditions columns 
targets$scenarios <- ifelse(grepl("pos-t-comp-f", targets$code), "pos-t-comp-f", "pos-f-comp-t")
targets$ling_envr <- ifelse((grepl("-bu", targets$code) | grepl("-nothing", targets$code) | grepl("-only", targets$code)), 
                            "downward", "upward")
targets


r <- targets %>%
  ggplot( aes(x=ling_envr, y=true_can_1.rt, fill=ling_envr)) + 
  geom_boxplot() +
  ggtitle("Targets") +
  xlab("Conditions") +
  theme(legend.position = "top", legend.title = element_blank(), 
        legend.background = element_rect(fill="lightblue", 
                                         size=0.5, linetype="solid")) +
  ylab("Response Time (seconds)") +
  xlab("") +
  xlab("")
r
r + ylim(0,20)



t <- results %>%
  ggplot( aes(x=true_how, y=true_can_1.rt, fill=true_how, na.omit(results))) + 
  geom_boxplot() +
  ggtitle("Overall") +
  xlab("Conditions") +
  theme(legend.position = "top", legend.title = element_blank(), 
        legend.background = element_rect(fill="lightblue", 
                                         size=0.5, linetype="solid")) +
  ylab("Response Time (seconds)")  
t
t + ylim(0,20)


######################################################
######################################################
#######################################################
####################
# plot histograms - overall
histogram(~ true_can_1.response | code, data=results)

# create a dataframe for target items ---
targets <- subset(results, results$true_how == 'possibly')
targets

# add conditions columns 
targets$scenarios <- ifelse(grepl("pos-t-comp-f", targets$code), "pos-t-comp-f", "pos-f-comp-t")
targets$ling_envr <- ifelse((grepl("-bu", targets$code) | grepl("-nothing", targets$code) | grepl("-only", targets$code)), 
                            "downward", "upward")
targets

histogram(~ true_can_1.response | cond * ling_envr, data=targets)


###statistics
two.way <- aov(true_can_1.response ~ ling_envr + scenarios, data = targets)
summary(two.way)
interaction <- aov(true_can_1.response ~ ling_envr * scenarios, data = targets)
summary(interaction)
ling_con <- aov(true_can_1.response ~ ling_envr * scenarios + ling_con, data = targets)
summary(ling_con)

#######################################################################################
#########################################################
#
# add filler conditions columns
fillers$control_cond <- ifelse(grepl("pos-t-comp-t", fillers$code), "pos-t-comp-t", "pos-f-comp-f")
fillers$control_ling_envr <- ifelse((grepl("-bu", fillers$code) | grepl("-nothing", fillers$code) | grepl("-only", fillers$code)), 
                            "downward", "upward")
fillers
histogram(~ true_can_1.response | control_cond * control_ling_envr, data=fillers)

# looking at individual items ----
#target items (for ratings or binary forced choice coded as 0-1)
aggregate(targets$true_can_1.response, by=list(targets$ling_envr), mean)
aggregate(targets$true_can_1.response, by=list(targets$cond, targets$ling_envr), mean)

aggregate(fillers$true_can_1.response, by=list(fillers$control_ling_envr), mean, na.rm = T)
aggregate(fillers$true_can_1.response, by=list(fillers$control_cond, fillers$control_ling_envr), mean, na.rm = T)

aggregate(targets$true_can_1.response, by=list(targets$true_how), mean, na.rm = T)

aggregate(fillers$true_can_1.response, by=list(fillers$true_how), mean, na.rm = T)


########################################################################################
#########################################################
#remane factors, give columns meaningful names
#code below assumes two factors, change as needed

targets <- rename(targets, c("context"="Factor1", "meaning"="Factor2", 
                             "subcontext"="Factor3"))
targets
summary(targets)
#hist(targets)


histogram(~ Choice | context * meaning, data=targets)
histogram(~ Choice | subcontext * meaning, data=targets)
histogram(~ Choice | subcontext, data=targets)
histogram(~ Choice | context, data=targets)
histogram(~ Choice | meaning, data=targets)
histogram(~ Choice, data=targets)



# choicel: how confident they feel about their choice
histogram(~ Choicel | context * meaning, data=targets)
histogram(~ Choicel | subcontext * meaning, data=targets)
histogram(~ Choicel | subcontext, data=targets)
histogram(~ Choicel | context, data=targets)
histogram(~ Choicel | meaning, data=targets)
histogram(~ Choicel, data=targets)


# basic aggregation (for ratings or binary forced choice coded as 0-1)----
aggregate(targets$Choice, by=list(targets$WorkerId), mean)
# basic aggregation for Choicel: how sure they are about their choice
aggregate(targets$Choicel, by=list(targets$WorkerId), mean)

aggregate(targets$Choice, by=list(targets$context, targets$meaning), mean)
# basic aggregation for Choicel: how sure they are about their choice
aggregate(targets$Choicel, by=list(targets$WorkerId, targets$context, targets$meaning), mean)



# basic aggregation (for completions)
aggregate(targets$WorkerId, by=list(targets$Choice), length)
aggregate(targets$WorkerId, by=list(targets$Choice, targets$Factor1, targets$Factor2), length)


# looking at individual items ----
#target items (for ratings or binary forced choice coded as 0-1)
aggregate(targets$Choice, by=list(targets$Item), mean)
aggregate(targets$Choice, by=list(targets$Condition, targets$Item), mean)

# target items (for completions)
aggregate(targets$WorkerId, by=list(targets$Choice, targets$Condition), length)

# filler items with expected answers
aggregate(results$isCorrect, by=list(results$Item), mean, na.rm = T)

