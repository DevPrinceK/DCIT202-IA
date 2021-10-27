x2=[5,2,6,9,3,5,7,8,8,10]
for i in range(1,len(x2)):
    for j in range(i−1,−1,−1):
        if x2[j]>x2[j+1]:
            x2[j+1],x2[j]=x2[j],x2[j+1]
            
print(x2)