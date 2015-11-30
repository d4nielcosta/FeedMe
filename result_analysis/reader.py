__author__ = 'Nicholas Saunderson'
import csv


with open('Glasgow_rest_db.csv', 'rb') as f:
    reader = csv.reader(f)
    main_list = list(reader)

    postCode_list = [];
    pc = {"": 0}

    for i in main_list:
        splits = i[7].split()
        postCode_list += splits

    counts = dict()
    for i in postCode_list:
        counts[i] = counts.get(i, 0) + 1

    for j in postCode_list:
        if j[0] == 'G':
            pc[j] = counts[j]




    with open('postCodes.csv', 'wb') as f:
        for i in pc:
            print i, pc[i]










