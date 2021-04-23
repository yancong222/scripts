#########################
# author: Yan Cong
# evaluate transformer models' linguistic performance
# as of 04/23/2021
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
MIdata = read.csv("T5SepMannerImplicatureLoss.csv", header = TRUE)
SIdata = read.csv("T5SepScalarImplicatureLoss.csv", header = TRUE)
Presupdata = read.csv("T5SepPresupLoss.csv", header = TRUE)

AccuracyByModel = read.csv("accuracy mean v2.csv", header = TRUE)

summary(MIdata)
summary(SIdata)
summary(Presupdata)

summary(AccuracyByModel) # Mean   :0.7928 
se(AccuracyByModel$accuracy.mean) # 0.03366137

#########################plot a bar chart#########################
barchart(accuracy.mean ~ model | phenomena, data = AccuracyByModel,
         strip = strip.custom(bg="lightgrey",
                              par.strip.text=list(col="black", cex=.65, font=4)),
         groups = model,
         main = "T5 models and pragmatics",
         xlab = "T5 Models", stack = TRUE,
         ylab = "Accuracy Mean",
         auto.key = list(space = "right"),
         layout = c(3,1),
         scales = list(x = list(rot = 65)))

##########################make your figures pretty!!!###############################
library(RColorBrewer)

clrs_spec <- colorRampPalette(rev(brewer.pal(11, "Spectral")))
clrs_hcl <- function(n) {
  hcl(h = seq(230, 0, length.out = n), 
      c = 60, l = seq(10, 90, length.out = n), 
      fixup = TRUE)
}

#########################Summarize; Plot models using ggplot----################################
summary(AccuracyByModel)

t5all <- read.csv("T5all.csv", header = TRUE)
summary(t5all)

data=group_by(t5all, phenomena, model)%>% 
  summarise(mean=mean(bad.good.loss.diff...0),se=se(bad.good.loss.diff...0))
head(data)

#limits <- aes(ymax = upper, ymin = lower)
p=ggplot(data = data, aes(x = model, y = mean, y.label)) + 
  geom_bar(fill = rep(clrs_hcl(5), 3), position = "dodge", stat = "identity") + 
  geom_errorbar(aes(ymin=mean-se,ymax=mean+se),width = 0.3,position = "dodge",alpha = 0.7) +
  facet_wrap(~ phenomena) 
p

p + scale_x_discrete(name ="T5 models") +
  scale_y_continuous(name="Accuracy Mean")

########################Summarize; plot phenomena using ggplot-------############################
p=ggplot(data = data, aes(x = phenomena, y = mean)) + 
  geom_bar(fill = rep(clrs_hcl(3), 5), position = "dodge", stat = "identity") + 
  geom_errorbar(aes(ymin=mean-se,ymax=mean+se),width = 0.3,position = "dodge",alpha = 0.7) +
  facet_wrap(~ model) 
p

p + scale_x_discrete(name ="Pragmatic phenomena") +
  scale_y_continuous(name="Accuracy Mean") + 
  theme(axis.text.x = element_text(face="bold", color="#993333", 
                             size=7, angle=70))

############################plot barchart-------#################################
barchart(accuracy.mean ~ phenomena | model, data = AccuracyByModel,
         strip = strip.custom(bg="lightgrey",
                              par.strip.text=list(col="black", cex=.65, font=4)),
         groups = phenomena,
         main = "T5 models and pragmatics",
         xlab = "Pragmatics phenomena", stack = TRUE,
         ylab = "Accuracy Mean",
         auto.key = FALSE,
         scales = list(x = list(rot = 45)),
         layout = c(3,2),
         index.cond=list(c(4,2,1,3,5)))

##############################Exploratory Statistics------###########################
MIsmall <- subset(MIdata, MIdata$model == "t5-small")
d1 <- with(MIsmall, 
          MIsmall$outputs.bad.loss - MIsmall$outputs.good.loss)

############################Shapiro-Wilk normality test for the differences--####################
shapiro.test(d1) # => 0.05821
#From the output, the p-value is greater than the significance level 0.05 
#implying that the distribution of the differences (d) are not significantly different from normal distribution. 
#In other words, we can assume the normality.

res1 <- t.test(MIsmall$outputs.bad.loss, MIsmall$outputs.good.loss, paired = TRUE)
res1

d2 <- with(MIsmall, 
          MIsmall$outputs.baseline.bad.loss - MIsmall$outputs.exp.soso.loss)

###########################Shapiro-Wilk normality test for the differences-----###########################
shapiro.test(d2) # => 0.1347

res2 <- t.test(MIsmall$outputs.baseline.bad.loss, MIsmall$outputs.exp.soso.loss, paired = TRUE)
res2

d_sbj <- with(MIsmall, 
           MIsmall$bad.good.loss.diff - MIsmall$b_bad.soso.loss.diff)
###########################Shapiro-Wilk normality test for the differences----###########################
shapiro.test(d_sbj) # => 0.2139

res_sbj <- t.test(MIsmall$bad.good.loss.diff, MIsmall$b_bad.soso.loss.diff, paired = TRUE)
res_sbj

#######################normality test first, then decide whether move forward with parametric or non-parametric test----############################
MIbase <- subset(MIdata, MIdata$model=="t5-base")
d1 <- with(MIbase, MIbase$outputs.bad.loss-MIbase$outputs.good.loss)
shapiro.test(d1) #0.007458
#Note that, if the data are not normally distributed, 
#it’s recommended to use the non parametric paired two-samples Wilcoxon test.

wilcox.test(d1) #0.1763
#alternative hypothesis: true location is not equal to 0

t.test(MIbase$outputs.bad.loss,
       MIbase$outputs.good.loss, paired = TRUE) #0.02099

d2 <- with(MIbase, MIbase$outputs.baseline.bad.loss - MIbase$outputs.exp.soso.loss)
shapiro.test(d2)
t.test(MIbase$outputs.baseline.bad.loss, 
       MIbase$outputs.exp.soso.loss, paired = TRUE) #0.005274

d_sbj <- with(MIbase, MIbase$bad.good.loss.diff-MIbase$b_bad.soso.loss.diff)
shapiro.test(d_sbj) 
t.test(MIbase$bad.good.loss.diff, MIbase$b_bad.soso.loss.diff, paired = TRUE)

#######################normality test first, then decide whether move forward with parametric or non-parametric test----############################
MIlarge <- subset(MIdata, MIdata$model=="t5-large")
d1 <- with(MIlarge, MIlarge$outputs.bad.loss-MIlarge$outputs.good.loss)
shapiro.test(d1)
wilcox.test(d1)
t.test(MIlarge$outputs.bad.loss, MIlarge$outputs.good.loss, paired = TRUE)

d2 <- with(MIlarge, MIlarge$outputs.baseline.bad.loss-MIlarge$outputs.exp.soso.loss)
shapiro.test(d2)
t.test(MIlarge$outputs.baseline.bad.loss, MIlarge$outputs.exp.soso.loss, paired = TRUE)

d_sbj <- with(MIlarge, MIlarge$bad.good.loss.diff-MIlarge$b_bad.soso.loss.diff)
shapiro.test(d_sbj)

t.test(MIlarge$bad.good.loss.diff, MIlarge$b_bad.soso.loss.diff, paired = TRUE)

#######################normality test; paird t-test----############################
MI3b <- subset(MIdata, MIdata$model=="t5-3b")
d1 <- with(MI3b, MI3b$outputs.bad.loss-MI3b$outputs.good.loss)
shapiro.test(d1)
t.test(MI3b$outputs.bad.loss, MI3b$outputs.good.loss, paired = TRUE)

d2 <- with(MI3b, MI3b$outputs.baseline.bad.loss-MI3b$outputs.exp.soso.loss)
shapiro.test(d2)
t.test(MI3b$outputs.baseline.bad.loss, MI3b$outputs.exp.soso.loss, paired = TRUE)

d_sbj <- with(MI3b, MI3b$bad.good.loss.diff-MI3b$b_bad.soso.loss.diff)
shapiro.test(d_sbj)  
t.test(MI3b$bad.good.loss.diff, MI3b$b_bad.soso.loss.diff, paired = TRUE)  
  
MI11b <- subset(MIdata, MIdata$model=="t5-11b")
d1 <- with(MI11b, MI11b$outputs.bad.loss-MI11b$outputs.good.loss)
shapiro.test(d1)

t.test(MI11b$outputs.bad.loss, MI11b$outputs.good.loss, paired = TRUE)

d2 <- with(MI11b, MI11b$outputs.baseline.bad.loss-MI11b$outputs.exp.soso.loss)
shapiro.test(d2)
wilcox.test(d2)

t.test(MI11b$outputs.baseline.bad.loss, MI11b$outputs.exp.soso.loss, paired = TRUE)

d_sbj <- with(MI11b, MI11b$bad.good.loss.diff-MI11b$b_bad.soso.loss.diff)
shapiro.test(d_sbj)
t.test(MI11b$bad.good.loss.diff, MI11b$b_bad.soso.loss.diff, paired = TRUE)

########################one-way ANOVA------###########################
comp <- subset(MIdata, MIdata$model=="t5-small" | MIdata$model=="t5-11b")
#comp = read.csv("comp_mi.csv", header = TRUE)
one.way <- aov(bad.good.loss.diff ~ model, data = comp)
summary(one.way)

one.way <- aov(b_bad.soso.loss.diff ~ model, data = comp)
summary(one.way)

one.way <- aov(outputs.bad.loss ~ model, data = comp)
summary(one.way)

one.way <- aov(outputs.good.loss ~ model, data = comp)
summary(one.way)

one.way <- aov(outputs.baseline.bad.loss ~ model, data = comp)
summary(one.way)

one.way <- aov(outputs.exp.soso.loss ~ model, data = comp)
summary(one.way)

#####################normality test; t-test-----########################################
SIdata = read.csv("T5SepScalarImplicatureLoss.csv", header = TRUE)
SIsmall <- subset(SIdata, SIdata$model=="t5-small")
summary(SIsmall)
d_sst <- with(SIsmall, SIsmall$bad.good.loss.diff-SIsmall$b_soso.b_good.loss.diff)
shapiro.test(d_sst)
t.test(SIsmall$bad.good.loss.diff, SIsmall$b_soso.b_good.loss.diff, paired = TRUE)

SIbase <- subset(SIdata, SIdata$model=="t5-base")
summary(SIbase)
d_sst <- with(SIbase, SIbase$bad.good.loss.diff-SIbase$b_soso.b_good.loss.diff)
shapiro.test(d_sst)
t.test(SIbase$bad.good.loss.diff, SIbase$b_soso.b_good.loss.diff, paired = TRUE)

SIlarge <- subset(SIdata, SIdata$model=="t5-large")
summary(SIlarge)
d_sst <- with(SIlarge, SIlarge$bad.good.loss.diff-SIlarge$b_soso.b_good.loss.diff)
shapiro.test(d_sst)
t.test(SIlarge$bad.good.loss.diff, SIlarge$b_soso.b_good.loss.diff, paired = TRUE)

SI3b <- subset(SIdata, SIdata$model=="t5-3b")
summary(SI3b)
d_sst <- with(SI3b, SI3b$bad.good.loss.diff-SI3b$b_soso.b_good.loss.diff)
shapiro.test(d_sst)
t.test(SI3b$bad.good.loss.diff, SI3b$b_soso.b_good.loss.diff, paired = TRUE)

SI11b <-subset(SIdata, SIdata$model=="t5-11b")
summary(SI11b)
d_sst <- with(SI11b, SI11b$bad.good.loss.diff-SI11b$b_soso.b_good.loss.diff)
shapiro.test(d_sst)
t.test(SI11b$bad.good.loss.diff, SI11b$b_soso.b_good.loss.diff, paired = TRUE)

#########################one-way ANOVA for comparison----##########################
comp <- subset(SIdata, SIdata$model == "t5-small" | SIdata$model == "t5-11b")
one.way <- aov(outputs.bad.loss ~ model, data = comp)
summary(one.way)

one.way <- aov(outputs.good.loss ~ model, data = comp)
summary(one.way)

one.way <- aov(outputs.baseline.soso.loss ~ model, data = comp)
summary(one.way)

one.way <- aov(bad.good.loss.diff ~ model, data = comp)
summary(one.way)

one.way <- aov(b_soso.b_good.loss.diff ~ model, data = comp)
summary(one.way)

########################normality tests and parametric tests----#########################
Psmall <- subset(Presupdata, Presupdata$model=="t5-small")
d <- with(Psmall, Psmall$outputs.bad.loss-Psmall$outputs.good.loss)
shapiro.test(d)
t.test(Psmall$outputs.bad.loss,Psmall$outputs.good.loss,paired = TRUE)

Pbase <- subset(Presupdata, Presupdata$model=="t5-base")
d <- with(Pbase, Pbase$outputs.bad.loss-Pbase$outputs.good.loss)
shapiro.test(d)
wilcox.test(d)
t.test(Pbase$outputs.bad.loss,Pbase$outputs.good.loss,paired = TRUE)

Plarge <- subset(Presupdata, Presupdata$model=="t5-large")
d <- with(Plarge, Plarge$outputs.bad.loss-Plarge$outputs.good.loss)
shapiro.test(d)
t.test(Plarge$outputs.bad.loss,Plarge$outputs.good.loss,paired = TRUE)

P3b <-subset(Presupdata, Presupdata$model=="t5-3b")
d <- with(P3b, P3b$outputs.bad.loss-P3b$outputs.good.loss)
shapiro.test(d)
t.test(P3b$outputs.bad.loss,P3b$outputs.good.loss,paired = TRUE)

P11b <-subset(Presupdata, Presupdata$model=="t5-11b")
d <- with(P11b, P11b$outputs.bad.loss-P11b$outputs.good.loss)
shapiro.test(d)
t.test(P11b$outputs.bad.loss,P11b$outputs.good.loss,paired = TRUE)

####################ANOVA----##################################
comp <- subset(Presupdata, Presupdata$model == "t5-small" | Presupdata$model == "t5-11b")
one.way <- aov(loss.diff ~ model, data = comp)
summary(one.way)





