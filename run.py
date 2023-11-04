import pymongo
myclient = pymongo.MongoClient("mongodb+srv://Ethen31:m1woMi1nnCNrWEA1@cluster0.gpxk0yo.mongodb.net/")
print("connected")

mydb = myclient["mydatabase"]
mycol = mydb["customers"]

mydict = { "name": ["diarrhea","fatigue","itchy"] }

x = mycol.insert_one(mydict)

print("done")