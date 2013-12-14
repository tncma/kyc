pincodeToLatLong = read.table("IN.txt", sep='\t')
data = read.csv("../data/hospitals.csv");
finalData = merge(pincodeToLatLong,data,by.x="V2",by.y="PINCODE")
write.table(finalData, file = "final_Data.csv", sep = ",")