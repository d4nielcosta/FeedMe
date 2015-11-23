__author__ = 'Nicholas Saunderson'
import csv


with open('Glasgow_rest_db.csv', 'rb') as f:
    reader = csv.reader(f)
    main_list = list(reader)

    postCode_list = [];

    for i in main_list:
        splits = i[7].split()
        postCode_list += splits







