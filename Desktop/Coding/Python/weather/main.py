import csv

with open("./weather_data.csv") as content:
    data = csv.reader(content)
    temperatures = []
    for row in data:
        for item in row:
            if item.isdigit():
                temperatures.append(int(item))
    print(temperatures)

import pandas

data = pandas.read_csv("weather_data.csv")

print(data["Temperature"])
