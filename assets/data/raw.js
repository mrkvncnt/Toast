const raw = [
  ['Demographic', 'Taxes', 'Food', 'Groceries', 'Bread & Grain', 'Grains', 'Baked Goods', 'Meat', 'Beef', 'Pork', 'Other Meat', 'Poultry', 'Seafood', 'Eggs', 'Dairy', 'Milk', 'Other Dairy', 'Produce', 'Fresh Fruit', 'Fresh Vegetables', 'Processed Fruit', 'Processed Vegetables', 'Other Food', 'Sugar & Sweets', 'Fats & Oils', 'Misc.Food', 'Beverages', 'Groceries Away', 'Restaurants', 'Alcohol', 'Housing', 'Shelter', 'Owned Home', 'Mortgage Fees & Interest', 'Property Taxes', 'Maintenance', 'Rent', 'Other Lodging', 'Utilities & Services', 'Natural Gas', 'Electricity', 'Other Fuels', 'Phone Servies', 'Residential Phone', 'Cell Phone', 'Water & Other', 'Household Operations', 'Personal Services', 'Other Household Expenses', 'Housekeeping Supplies', 'Laundry & cleaning Supplies', 'Other Household Products', 'Postage & Stationery', 'Household Furnishings & Appliances', 'Household Textiles', 'Furniture', 'Floor Coverings', 'Major Appliances', 'Small Appliances & Housewares', 'Miscellaneous Household Equipment', 'Apparel', 'Men & Boys', 'Women & Girls', 'Children Under 2', 'Footwear', 'Other Apparel', 'Transportation', 'Vehicle Purchases', 'Cars & Trucks, New', 'Cars & Trucks, Used', 'Other Vehicles', 'Fuel & Motor Oil', 'Other Vehicle Expenses', 'Vehicle Finance Charges', 'Maintenance & Repairs', 'Vehicle Insurance', 'Vehicle Rental & Fees', 'Public Transportation', 'Healthcare', 'Health Insurance',' Medical Services', 'Drugs', 'Medical Supplies', 'Entertainment', 'Fees & Admissions', 'AV Equipment & Services', 'Other Entertainment', 'Pets', 'Toys & Hobbies', 'Miscellaneous Equipment', 'Personal Care', 'Reading', 'Education', 'Tobacco Products', 'Miscellaneous', 'Cash Contributions', 'Personal Insurance & Pensions', 'Personal Insurance', 'Pensions & Social Security']
  ['National Average', 9967,'','','', 176, 388,'', 253, 181, 128, 186, 140, 55,'', 147, 303,'', 314, 274, 112, 136,'', 150, 117, 824, 423, 56, 3365, 558,'','','', 3265, 2065, 1616, 4167, 782,'', 381, 1420, 97,'', 238, 1118, 583,'', 439, 973,'', 177, 428, 150,'', 114, 515, 30, 280, 131, 916,'', 442, 694, 77, 379, 241,'','', 1900, 2101, 53, 1968,'', 220, 954, 967, 700, 712,'', 3414, 872, 486, 156,'', 750, 985,'', 710, 159, 599, 762, 110, 1491, 332, 1010, 1873,'', 418, 6353]
  ['One', 4794,'','','', 83, 205,'', 118, 83, 65, 99, 74, 30,'', 76, 160,'', 171, 147, 63, 71,'', 77, 61, 456, 256, 27, 2101, 390,'','','', 1373, 1168, 1033, 4710, 451,'', 249, 938, 67,'', 199, 547, 352,'', 68, 670,'', 103, 253, 107,'', 75, 243, 11, 134, 92, 685,'', 235, 388, 13, 197, 173,'','', 832, 896, 33, 999,'', 83, 794, 695, 390, 435,'', 2051, 479, 339, 98,'', 354, 667,'', 369, 80, 190, 496, 80, 743, 240, 773, 1403,'', 187, 2906]
  ['Two', 12669,'','','', 158, 389,'', 267, 190, 131, 168, 147, 53,'', 135, 319,'', 318, 289, 111, 137,'', 158, 118, 825, 434, 70, 3448, 737,'','','', 3034, 2416, 1960, 3503, 1037,'', 404, 1479, 117,'', 281, 1118, 600,'', 132, 1144,'', 168, 471, 187,'', 137, 624, 51, 320, 151, 1019,'', 415, 716, 40, 341, 309,'','', 2282, 2050, 69, 1979,'', 228, 938, 981, 809, 835,'', 4277, 1077, 654, 211,'', 787, 1086,'', 1018, 141, 718, 806, 127, 1329, 331, 1109, 2491,'', 527, 6877]
  ['Three', 12528,'','','', 215, 450,'', 293, 206, 166, 219, 177, 64,'', 178, 347,'', 356, 328, 126, 156,'', 179, 136, 965, 505, 59, 3893, 577,'','','', 4570, 2333, 2041, 4158, 912,'', 427, 1629, 118,'', 238, 1402, 677,'', 792, 1020,'', 229, 512, 131,'', 117, 590, 27, 325, 128, 941,'', 515, 708, 129, 391, 197,'','', 2442, 2541, 59, 2399,'', 277, 1103, 1246, 892, 737,'', 3921, 966, 498, 144,'', 836, 1117,'', 729, 156, 541, 870, 127, 2290, 447, 1282, 1589,'', 502, 8364]
  ['Four', 13977,'','','', 265, 570,'', 341, 266, 187, 276, 189, 84,'', 225, 430,'', 477, 372, 167, 200,'', 206, 170, 1166, 536, 67, 4801, 574,'','','', 5809, 2876, 1732, 3978, 859,'', 482, 1789, 98,'', 236, 1607, 788,'', 1391, 1158,'', 231, 489, 146,'', 115, 623, 25, 389, 149, 1079,'', 751, 992, 182, 612, 250,'','', 2520, 3207, 73, 2839,'', 350, 1116, 1266, 924, 935,'', 3871, 1102, 423, 163,'', 1251, 1157,'', 688, 288, 1080, 1041, 133, 2307, 362, 1096, 1704,'', 549, 9297]
  ['Five', 6704,'','','', 344, 599,'', 433, 294, 176, 340, 190, 89,'', 253, 447,'', 455, 396, 174, 212,'', 220, 179, 1262, 603, 73, 4225, 389,'','','', 4404, 2031, 1338, 5147, 571,'', 484, 1838, 81,'', 201, 1741, 798,'', 851, 954,'', 280, 582, 180,'', 144, 684, 29, 366, 153, 995,'', 659, 1123, 178, 735, 261,'','', 2087, 3746, 23, 3014,'', 347, 1048, 927, 659, 774,'', 3052, 874, 390, 151,'', 1020, 1152,'', 639, 296, 855, 882, 86, 2010, 398, 832, 1737,'', 417, 7848]
  ["< 25", 1790,'','','', 120, 206,'', 155, 87, 57, 127, 68, 40,'', 95, 151,'', 176, 138, 64, 80,'', 65, 61, 473, 222, 15, 2362, 317,'','','', 520, 287, 157, 6279, 310,'', 116, 741, 14,'', 46, 725, 210,'', 161, 367,'', 96, 147, 73,'', 55, 318, 10, 110, 73, 439,'', 306, 466, 50, 331, 162,'','', 1289, 2053, 24, 1417,'', 134, 471, 502, 361, 405,'', 1009, 387, 99, 51,'', 333, 542,'', 239, 124, 249, 473, 42, 2333, 220, 358, 299,'', 42, 2525]
  ["25 - 34", 7917,'','','', 189, 327,'', 207, 138, 107, 186, 106, 54,'', 135, 263,'', 296, 267, 111, 137,'', 119, 105, 812, 378, 37, 3416, 573,'','','', 2937, 1115, 1075, 7153, 415,'', 294, 1217, 50,'', 89, 1139, 454,'', 908, 709,'', 143, 316, 83,'', 119, 538, 17, 242, 111, 802,'', 480, 645, 188, 381, 350,'','', 1452, 2437, 58, 2013,'', 264, 696, 862, 690, 644,'', 2261, 588, 223, 92,'', 619, 826,'', 453, 178, 569, 643, 61, 1234, 323, 669, 949,'', 192, 6398]
  ["35 - 44", 11173,'','','', 227, 453,'', 304, 206, 146, 219, 161, 66,'', 183, 360,'', 359, 329, 137, 158,'', 163, 135, 983, 478, 61, 4249, 624,'','','', 4787, 1847, 1304, 5755, 602,'', 408, 1509, 68,'', 162, 1439, 640,'', 1128, 972,'', 233, 440, 141,'', 119, 663, 75, 289, 126, 1097,'', 581, 892, 109, 553, 243,'','', 2115, 2589, 102, 2437,'', 296, 920, 956, 793, 847,'', 3005, 832, 377, 134,'', 1090, 1031,'', 853, 248, 779, 959, 115, 1004, 366, 1083, 1580,'', 371, 7971]
  ["45 - 54", 16274,'','','', 201, 427,'', 291, 221, 149, 239, 166, 68,'', 175, 351,'', 378, 308, 122, 147,'', 187, 132, 979, 498, 74, 4157, 633,'','','', 5165, 2693, 1619, 3653, 1120,'', 440, 1632, 104,'', 233, 1492, 696,'', 280, 1111,'', 195, 433, 156,'', 122, 517, 23, 371, 184, 967,'', 629, 902, 61, 479, 237,'','', 2207, 2861, 45, 2472,'', 296, 1118, 1160, 769, 826,'', 3429, 928, 445, 165,'', 1056, 1161,'', 981, 171, 695, 927, 112, 3213, 410, 1202, 2218,'', 498, 9123]
  ["55 - 64", 13517,'','','', 168, 431,'', 287, 214, 157, 194, 164, 54,'', 143, 320,'', 309, 277, 114, 145,'', 160, 131, 851, 483, 61, 3229, 620,'','','', 3450, 2698, 2222, 2182, 1064,'', 442, 1560, 133,'', 298, 1161, 640,'', 108, 1058,'', 187, 501, 176,'', 100, 543, 36, 287, 151, 1130,'', 394, 702, 31, 366, 227,'','', 2262, 1946, 36, 2089,'', 211, 1084, 984, 782, 792,'', 3815, 1196, 583, 182,'', 655, 1093,'', 907, 139, 650, 750, 119, 1644, 418, 1214, 2357,'', 626, 8079]
  ["65 +", 5046,'','','', 138, 369,'', 221, 163, 111, 132, 128, 44,'', 126, 283,'', 287, 250, 99, 120,'', 146, 104, 676, 361, 58, 2511, 459,'','','', 1574, 2315, 2061, 2530, 790,'', 392, 1392, 134,'', 391, 672, 591,'', 110, 1125,'', 163, 503, 195,'', 126, 427, 16, 268, 106, 787,'', 258, 490, 33, 211, 200,'','', 1693, 1119, 44, 1290,'', 112, 1046, 1003, 612, 594,'', 4712, 911, 783, 214,'', 560, 954,'', 549, 102, 471, 670, 147, 388, 219, 1043, 2430,'', 467, 2762]
  ["$15,000 - $29,999", -879,'','','', 124, 286,'', 189, 148, 97, 134, 92, 43,'', 110, 211,'', 218, 189, 81, 105,'', 101, 91, 543, 331, 22, 1689, 210,'','','', 834, 1022, 1005, 4540, 262,'', 286, 1194, 81,'', 243, 644, 424,'', 136, 608,'', 133, 294, 115,'', 79, 266, 7, 139, 80, 425,'', 201, 380, 49, 240, 132,'','', 804, 1148, 14, 1218,'', 87, 485, 556, 334, 284,'', 2378, 464, 405, 113,'', 226, 653,'', 412, 74, 194, 482, 57, 502, 308, 558, 1089,'', 217, 1405]
  ["$30,000 - $39,999", -70,'','','', 162, 340,'', 230, 178, 112, 176, 125, 47,'', 133, 222,'', 242, 240, 94, 123,'', 139, 107, 664, 398, 48, 2098, 305,'','','', 1282, 1272, 1123, 4424, 370,'', 317, 1371, 73,'', 249, 942, 504,'', 130, 759,'', 173, 349, 106,'', 83, 304, 13, 201, 73, 466,'', 342, 462, 49, 287, 176,'','', 1513, 1521, 63, 1652,'', 141, 620, 807, 507, 367,'', 3059, 562, 508, 120,'', 327, 838,'', 375, 107, 298, 501, 67, 383, 394, 825, 1185,'', 267, 2459]
  ["$40,000 - $49,999", 1598,'','','', 151, 354,'', 230, 163, 132, 173, 149, 47,'', 130, 249,'', 236, 222, 97, 127,'', 134, 109, 706, 386, 34, 2767, 371,'','','', 2024, 1571, 1300, 4277, 379,'', 365, 1364, 88,'', 247, 1004, 534,'', 247, 755,'', 161, 296, 100,'', 74, 329, 14, 233, 86, 771,'', 324, 466, 90, 223, 249,'','', 878, 1694, 8, 1818,'', 170, 743, 1265, 524, 428,'', 3169, 774, 463, 152,'', 415, 925,'', 458, 116, 234, 661, 79, 486, 368, 887, 1560,'', 328, 3116]
  ["$50,000 - $69,999", 4357,'','','', 167, 381,'', 278, 168, 121, 176, 118, 54,'', 142, 284,'', 279, 252, 103, 140,'', 148, 107, 785, 413, 41, 3284, 480,'','','', 2515, 1643, 1383, 4704, 544,'', 352, 1450, 83,'', 199, 1185, 582,'', 317, 847,'', 156, 450, 161,'', 121, 468, 14, 302, 112, 857,'', 367, 531, 71, 302, 152,'','', 1603, 2575, 39, 2045,'', 215, 875, 1014, 635, 542,'', 3314, 774, 521, 125,'', 595, 952,'', 598, 159, 446, 659, 114, 723, 372, 1015, 1428,'', 307, 4780]
  ["$70,000 - $99,999", 8754,'','','', 197, 409,'', 268, 186, 135, 187, 139, 55,'', 159, 339,'', 352, 308, 133, 143,'', 165, 122, 903, 455, 67, 3665, 647,'','','', 3880, 2224, 1715, 4400, 798,'', 419, 1526, 99,'', 243, 1393, 667,'', 437, 984,'', 205, 432, 147,'', 118, 529, 20, 288, 150, 1258,'', 420, 771, 98, 424, 267,'','', 1770, 2460, 92, 2488,'', 282, 990, 1216, 771, 726,'', 3881, 1088, 493, 176,'', 768, 1052,'', 822, 213, 612, 836, 128, 1115, 382, 903, 1859,'', 461, 7586]
  ["$100,000 - $149,999", 16559,'','','', 251, 489,'', 350, 237, 188, 256, 201, 70,'', 188, 446,'', 458, 382, 142, 173,'', 194, 157, 1188, 547, 85, 4917, 901,'','','', 5879, 3076, 2208, 3357, 1216,'', 489, 1666, 133,'', 247, 1611, 764,'', 822, 1242,'', 212, 586, 183,'', 189, 770, 29, 417, 188, 1400,'', 684, 1070, 105, 558, 344,'','', 3184, 3103, 110, 2833,'', 392, 1289, 1064, 1062, 1005,'', 4758, 1342, 556, 194,'', 1079, 1387,'', 845, 242, 1138, 1110, 146, 1745, 316, 1341, 2506,'', 655, 11502]
  ["$150,000 - $199,999", 29888,'','','', 248, 517,'', 350, 260, 153, 227, 210, 78,'', 207, 451,'', 483, 404, 162, 188,'', 221, 168, 1273, 551, 118, 5901, 1026,'','','', 8521, 4689, 3761, 3282, 1808,'', 599, 1806, 174,'', 275, 1795, 863,'', 988, 1756,'', 278, 727, 178,'', 99, 1132, 82, 511, 338, 1930,'', 892, 1147, 111, 790, 484,'','', 4727, 2890, 90, 2974,'', 461, 3088, 1214, 1630, 1680,'', 5088, 1378, 695, 269,'', 1898, 1505,'', 2110, 218, 1427, 1361, 185, 4458, 280, 2057, 3078,'', 837, 17595]
  ["$200,000+", 80767,'','','', 278, 750,'', 337, 281, 191, 316, 294, 101,'', 243, 568,'', 627, 529, 195, 207,'', 270, 179, 1431, 646, 182, 8683, 1806,'','','', 11588, 6389, 4157, 3796, 3672,'', 714, 2097, 169,'', 341, 1921, 1060,'', 2011, 3035,'', 289, 899, 389,'', 231, 1591, 232, 671, 270, 1887,'', 1234, 1949, 159, 759, 678,'','', 6126, 5007, 79, 3155,'', 438, 2095, 1700, 1819, 2923,'', 6308, 2285, 757, 339,'', 3349, 1897,'', 1855, 377, 2036, 1832, 319, 8810, 247, 2913, 7649,'', 1274, 25355 ]
]

const parsed = raw[0].map(v => `"${v}"` )
console.log(parsed)