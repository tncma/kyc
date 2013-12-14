pincodeToLatLong = read.table("IN.txt", sep='\t')
data = read.csv("Physical_infrastructure_facilities_in_Municipality_and_corporation_schools_in_Tamil_Nadu.csv");
finalData = merge(pincodeToLatLong,data,by.x="V2",by.y="Pincode")
write.table(finalData, file = "final_Data.csv")