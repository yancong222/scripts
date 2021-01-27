# author: Yan Cong

install.packages("ggpubr")
library("ggpubr")

my_data_intrusion = read.csv("m_intensity_intrusion.csv", header = TRUE)
#my_data$name <- rownames(my_data)
ggscatter(my_data_intrusion, x = "sonority.scale", y = "intrusion.proportion", 
          cor.coef = TRUE,
          cor.coeff.args = list(method = "pearson", label.x = 3, label.sep = "\n"),
          xlab = "Sonority Index", ylab = "Proportion Intrusion",
          #color = "sonority", palette = "jco",           # Color by groups "sonority"
          # ellipse = TRUE, # add groups
          label = my_data_intrusion$color.word, repel = TRUE, # old: my_data$X...color
          add = "reg.line", conf.int = TRUE,
          add.params = list(color = "#00AFBB", fill = "lightgray")) # Customize reg. line) 

############################intensity###################################
my_data_perf = read.csv("m_intensity_performance.csv", header = TRUE)
#my_data$name <- rownames(my_data)
ggscatter(my_data_perf, x = "sonority.scale", y = "accuracy.proportion", 
          cor.coef = TRUE,
          cor.coeff.args = list(method = "pearson", label.x = 3, label.sep = "\n"),
          xlab = "Sonority Index", ylab = "Proportion Correct",
          #color = "sonority", palette = "jco",           # Color by groups "sonority"
          # ellipse = TRUE, # add groups
          label = my_data_perf$color.word, repel = TRUE, # old: my_data$X...color
          add = "reg.line", conf.int = TRUE,
          add.params = list(color = "salmon3", fill = "lightgray")) # Customize reg. line) 


############################rhythmSep###################################

par(mfrow=c(2,2))

data_masker_m = read.csv("masker_mrhythm.csv", header = TRUE)
data_masker_m$mrhythm = factor(data_masker_m$mrhythm,
                                levels = unique(data_masker_m$mrhythm))
summary(data_masker_m)
head(data_masker_m)
masker.mrhythm = interaction.plot(x.factor = data_masker_m$mrhythm,
                 trace.factor = data_masker_m$X...color.word,
                 response = data_masker_m$intrusion.proportion,
                 #fun = mean,
                 type = "b",
                 ylab = "Proportion Intrusion",
                 xlab = "Background Rhythm",
                 col = c("blue", "green", "red", "black"),
                 trace.label = "Color Word",
                 legend = FALSE,
                 pch = c(19, 17, 15, 13),
                 fixed = TRUE,
                 leg.bty = "o")


data_masker_t = read.csv("masker_trhythm.csv", header = TRUE)
data_masker_t$trhythm = factor(data_masker_t$trhythm,
                                levels = unique(data_masker_t$trhythm))
summary(data_masker_t)
head(data_masker_t)
masker.trhythm = interaction.plot(x.factor = data_masker_t$trhythm,
                 trace.factor = data_masker_t$X...color.word,
                 response = data_masker_t$intrusion.proportion,
                 #fun = mean,
                 type = "b",
                 ylab = "Proportion Intrusion",
                 xlab = "Target Rhythm",
                 col = c("blue", "green", "red", "black"),
                 trace.label = "Color Word",
                 legend = FALSE,
                 pch = c(19, 17, 15, 13),
                 fixed = TRUE,
                 leg.bty = "o")


data_target_m = read.csv("target_mrhythm.csv", header = TRUE)
data_target_m$mrhythm = factor(data_target_m$mrhythm,
                               levels = unique(data_target_m$mrhythm))
summary(data_target_m)
head(data_target_m)
target.mrhythm = interaction.plot(x.factor = data_target_m$mrhythm,
                                  trace.factor = data_target_m$X...color.word,
                                  response = data_target_m$proportion.correct,
                                  #fun = mean,
                                  type = "b",
                                  ylab = "Proportion Correct",
                                  xlab = "Background Rhythm",
                                  col = c("blue", "green", "red", "black"),
                                  trace.label = "Color Word",
                                  legend = FALSE,
                                  pch = c(19, 17, 15, 13),
                                  fixed = TRUE,
                                  leg.bty = "o")



data_target_t = read.csv("4A_target_trhythm.csv", header = TRUE)
data_target_t$trhythm = factor(data_target_t$trhythm,
                               levels = unique(data_target_t$trhythm))
summary(data_target_t)
head(data_target_t)
target.trhythm = interaction.plot(x.factor = data_target_t$trhythm,
                                  trace.factor = data_target_t$X...color.word,
                                  response = data_target_t$proportion.correct,
                                  #fun = mean,
                                  type = "b",
                                  ylab = "Proportion Correct",
                                  xlab = "Target Rhythm (Baseline 4A)",
                                  col = c("blue", "green", "red", "black"),
                                  trace.label = "Color Word",
                                  legend = FALSE,
                                  pch = c(19, 17, 15, 13),
                                  fixed = TRUE,
                                  leg.bty = "o")

###########################


###########################

# Shapiro-Wilk test can be performed as follow:
#  Null hypothesis: the data are normally distributed
shapiro.test(my_data$sonority.scale)
shapiro.test(my_data$intrusion.proportion)

ggqqplot(my_data$accuracy.proportion, ylab = "Performance")
ggqqplot(my_data$sonority.scale, ylab = "Sonority Index")


#In the result below :
  
#  t is the t-test statistic value (t = 19.744),
#df is the degrees of freedom (df= 2),
#p-value is the significance level of the t-test (p-value = 0,003).
#conf.int is the confidence interval of the correlation coefficient at 95% (conf.int = [0.88, 0.99]);
#sample estimates is the correlation coefficient (Cor.coeff = 0.997).
res <- cor.test(my_data$accuracy.proportion, my_data$sonority.scale,
                method = "pearson")
res
