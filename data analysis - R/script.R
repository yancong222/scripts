#####################################################################################
# author: Yan Cong
#########################
load("...")

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


MIdata = read.csv("T5SepMannerImplicatureLoss.csv", header = TRUE)
SIdata = read.csv("T5SepScalarImplicatureLoss.csv", header = TRUE)
Presupdata = read.csv("T5SepPresupLoss.csv", header = TRUE)

AccuracyByModel = read.csv("accuracy mean v2.csv", header = TRUE)

summary(MIdata)
summary(SIdata)
summary(Presupdata)

summary(AccuracyByModel) # Mean   :0.7928 
se(AccuracyByModel$accuracy.mean) # 0.03366137

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

################################################################
library(RColorBrewer)

clrs_spec <- colorRampPalette(rev(brewer.pal(11, "Spectral")))
clrs_hcl <- function(n) {
  hcl(h = seq(230, 0, length.out = n), 
      c = 60, l = seq(10, 90, length.out = n), 
      fixup = TRUE)
}


t5all <- read.csv("T5all.csv", header = TRUE)
summary(t5all)
#Summarize
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

#######################################################
p=ggplot(data = data, aes(x = phenomena, y = mean)) + 
  geom_bar(fill = rep(clrs_hcl(3), 5), position = "dodge", stat = "identity") + 
  geom_errorbar(aes(ymin=mean-se,ymax=mean+se),width = 0.3,position = "dodge",alpha = 0.7) +
  facet_wrap(~ model) 
p

p + scale_x_discrete(name ="Pragmatic phenomena") +
  scale_y_continuous(name="Accuracy Mean") + 
  theme(axis.text.x = element_text(face="bold", color="#993333", 
                             size=7, angle=70))

################################################################
#####################################################

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

