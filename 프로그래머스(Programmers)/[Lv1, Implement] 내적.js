const solution = (a, b) => 
a.map((v, i) => v * b[i]).reduce((sum, v) => sum + v, 0)