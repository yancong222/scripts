# author: Yan Cong

install.packages("readxl")
install.packages("igraph")

# download and read file
library("readxl")
dist.177data = read_xls("177data.xls", sheet = 1, range = "A1:D4", col_names = FALSE)
dist.177data

# run MDS with function cmdscale(), and get x and y coordinates.
fit = cmdscale(dist.177data, eig = TRUE, k = 2)
x = fit$points[, 1]
y = fit$points[, 2]

# display the results, which shows clustering and confusability
plot(x, y, pch = 19, xlim = range(x) + c(0, 0.5)) 
color.names = c("blue", "red", "white", "green")
text(x, y, pos = 4, labels = color.names)

# this is flipping both x- and y- axis
x = 0 - x
y = 0 - y
plot(x, y, pch = 19, xlim = range(x) + c(0, 0.5))
text(x, y, pos = 4, labels = color.names)

# MDS is also implemented in the igraph package as layout.mds
library(igraph)
g = graph.full(nrow(dist.177data))
V(g)$label = color.names
layout = layout.mds(g, dist = as.matrix(dist.177data))
plot(g, layout = layout, vertex.size = 3)

#====================================================================================================
# Sheet 2
dist.177data = read_xls("177data.xls", sheet = 2, range = "A1:D4", col_names = FALSE)
dist.177data

# run MDS with function cmdscale(), and get x and y coordinates.
fit = cmdscale(dist.177data, eig = TRUE, k = 2)
x = fit$points[, 1]
y = fit$points[, 2]

# display the results, which shows clustering and confusability
plot(x, y, pch = 19, xlim = range(x) + c(0, 0.5)) 
color.names = c("blue", "red", "white", "green")
text(x, y, pos = 4, labels = color.names)

# this is flipping both x- and y- axis
x = 0 - x
y = 0 - y
plot(x, y, pch = 19, xlim = range(x) + c(0, 0.5))
text(x, y, pos = 4, labels = color.names)

# MDS is also implemented in the igraph package as layout.mds
library(igraph)
g = graph.full(nrow(dist.177data))
V(g)$label = color.names
layout = layout.mds(g, dist = as.matrix(dist.177data))
plot(g, layout = layout, vertex.size = 3)

