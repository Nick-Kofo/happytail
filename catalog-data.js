/* Φτιάχνεται αυτόματα από το source/catalog_from_csv.py. Μην το αλλάζετε με το χέρι. */
const BRAND_NAMES={"naturea": "Naturea", "ethelia": "Ethelia", "taste-of-the-wild": "Taste of the Wild", "doca": "Doca", "happy-dog": "Happy Dog", "happy-cat": "Happy Cat", "brit": "Brit", "lovies": "Lovies", "brisk": "Brisk", "miglior": "Miglior", "prevital": "PreVital", "petfarm": "Pet Farm", "flexi": "Flexi", "trixie": "Trixie", "harper-and-bone": "Harper and Bone", "felifor": "Felifor", "hapki": "Hapki", "flamingo": "Flamingo", "zeze": "Zeze", "baffs-naturals": "Baffs Naturals", "yowup": "YowUp!", "celebrate-freshness": "Celebrate Freshness", "the-barkers": "The Barkers", "happy-yak": "Happy Yak", "rafi": "Rafi", "piper": "Piper", "fisi": "Fisi", "churu": "Churu", "advance": "Advance", "reflex-plus": "Reflex Plus", "ambrosia": "Ambrosia", "euro-premium": "Euro Premium", "glee-for-pets": "Glee for Pets", "all-for-paws": "All for Paws", "fiboo": "Fiboo", "savic": "Savic", "perfect-care": "Perfect Care", "bio-petactive": "Bio PetActive", "pawise": "Pawise", "waudog": "Waudog", "earth-rated": "Earth Rated"};
const CATS={"dry": "Ξηρά τροφή", "wet": "Υγρή τροφή", "treats": "Λιχουδιές & μασητικά", "health": "Συμπληρώματα & υγεία", "toys": "Παιχνίδια", "walk": "Βόλτα: οδηγοί & περιλαίμια", "bowls": "Μπολ & ταΐστρες", "beds": "Κρεβάτια & μεταφορά", "wear": "Ρουχαλάκια", "litter": "Άμμος & τουαλέτα", "care": "Περιποίηση & υγιεινή"};
const PRODUCTS=[
{
"b": "naturea",
"n": "ELEMENTS PUPPY",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "01.80.0200"
},
{
"s": "12 kg",
"code": "01.80.1200"
}
]
},
{
"b": "naturea",
"n": "ELEMENTS ADULT CHICKEN",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "01.81.0200"
},
{
"s": "12 kg",
"code": "01.81.1200"
}
]
},
{
"b": "naturea",
"n": "ELEMENTS FIT & SENIOR",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "01.85.0200"
},
{
"s": "12 kg",
"code": "01.85.1200"
}
]
},
{
"b": "naturea",
"n": "DENTAL STICKS CHICKEN",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "XL 200 g",
"code": "01.23.0050"
}
]
},
{
"b": "naturea",
"n": "NATURALS AGNUS GRASSLANDS LAMB",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "01.52.0200"
},
{
"s": "12 kg",
"code": "01.52.0201"
}
]
},
{
"b": "naturea",
"n": "NATURALS MARE NORTH ATLANTIC SALMON",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "01.52.0202"
},
{
"s": "12 kg",
"code": "01.52.0203"
}
]
},
{
"b": "naturea",
"n": "NATURALS TERRA FREE RANGE",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "12 kg",
"code": "01.52.0204"
}
]
},
{
"b": "naturea",
"n": "WETLANDS DUCK",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "1,6 kg",
"code": ""
}
]
},
{
"b": "ethelia",
"n": "STERILISED & SENIOR",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "1,5 kg",
"code": ""
},
{
"s": "12 kg",
"code": ""
}
]
},
{
"b": "ethelia",
"n": "COAT & SKIN",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "1,5 kg",
"code": ""
},
{
"s": "12 kg",
"code": ""
}
]
},
{
"b": "naturea",
"n": "DUCK SEMI MOIST",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": ""
}
]
},
{
"b": "taste-of-the-wild",
"n": "PACIFIC STREAM PUPPY ΜΕ ΚΑΠΝΙΣΤΟ ΣΟΛΟΜΟ",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "42582"
}
]
},
{
"b": "taste-of-the-wild",
"n": "HIGH PRAIRIE PUPPY ΜΕ ΒΙΣΟΝΑ ΚΑΙ ΨΗΤΟ ΕΛΑΦΙ",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "42577"
}
]
},
{
"b": "taste-of-the-wild",
"n": "HIGH PRAIRIE ΜΕ ΒΙΣΟΝΑ ΚΑΙ ΨΗΤΟ ΕΛΑΦΙ",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "12,2 kg",
"code": "49751"
}
]
},
{
"b": "taste-of-the-wild",
"n": "SIERRA MOUNTAIN CANINE ΜΕ ΨΗΤΟ ΑΡΝΙ",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "42573"
},
{
"s": "12,2 kg",
"code": "49753"
}
]
},
{
"b": "taste-of-the-wild",
"n": "SOUTHWEST CANYON CANINE ΜΕ ΑΓΡΙΟΧΟΙΡΟ WILD BOAR (ΚΟΚΚΙΝΟ)",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "42586"
},
{
"s": "12,2 kg",
"code": "49759"
}
]
},
{
"b": "taste-of-the-wild",
"n": "ΒΙΣΟΝΑΣ & ΨΗΤΟ ΕΛΑΦΙ",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "42568"
}
]
},
{
"b": "doca",
"n": "ΣΑΛΑΜΙ ΣΚΥΛΟΥ ΚΟΤΟΠΟΥΛΟ ΧΟΝΔΡΟΙΤΙΝΗ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "800 g",
"code": "001-001-0051"
}
]
},
{
"b": "doca",
"n": "ΣΑΛΑΜΙ ΣΚΥΛΟΥ ΑΡΝΙ ΕΛΑΙΟΛΑΔΟ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "800 g",
"code": "001-001-0053"
}
]
},
{
"b": "doca",
"n": "ΣΑΛΑΜΙ ΣΚΥΛΟΥ ΚΡΕΑΣ ΤΥΡΙ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "800 g",
"code": "001-001-0040"
}
]
},
{
"b": "doca",
"n": "ΣΝΑΚ ΕΠΙΒΡΑΒΕΥΣΗΣ ΣΚΥΛΟΥ SALMON CUBES",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "001-003-0080"
}
]
},
{
"b": "doca",
"n": "ΣΝΑΚ ΕΠΙΒΡΑΒΕΥΣΗΣ ΣΚΥΛΟΥ BEEF CUBES",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "001-003-0081"
}
]
},
{
"b": "doca",
"n": "ΣΝΑΚ ΕΠΙΒΡΑΒΕΥΣΗΣ ΣΚΥΛΟΥ LAMB STICKS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "001-003-0064"
}
]
},
{
"b": "doca",
"n": "ΣΝΑΚ ΕΠΙΒΡΑΒΕΥΣΗΣ ΣΚΥΛΟΥ TURKEY STICKS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "001-003-0062"
}
]
},
{
"b": "doca",
"n": "SNACK ΕΠΙΒΡΑΒΕΥΣΗΣ ΣΚΥΛΟΥ BEEF STICKS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": ""
}
]
},
{
"b": "doca",
"n": "LAMB TRIPE ΠΑΤΣΑΣ ΑΡΝΙ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": ""
}
]
},
{
"b": "doca",
"n": "DRIED BEEF BARS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": ""
}
]
},
{
"b": "doca",
"n": "ΣΝΑΚ ΓΑΤΑΣ SALMON BITES",
"c": "treats",
"pet": "cat",
"shape": "pouch",
"v": [
{
"s": "80 g",
"code": "001-003-0083"
}
]
},
{
"b": "doca",
"n": "ΣΝΑΚ ΓΑΤΑΣ DUCK BITES",
"c": "treats",
"pet": "cat",
"shape": "pouch",
"v": [
{
"s": "80 g",
"code": "001-003-0085"
}
]
},
{
"b": "doca",
"n": "ΜΠΙΣΚΟΤΑ ΜΟΣΧΑΡΙ ΧΥΜΑ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "10 kg",
"code": "004-008-0045"
}
]
},
{
"b": "doca",
"n": "ΜΠΙΣΚΟΤΑ ΚΑΡΔΙΑ ΧΥΜΑ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "10 kg",
"code": "004-008-0047"
}
]
},
{
"b": "doca",
"n": "ΜΠΙΣΚΟΤΑ MIX BONE ΧΥΜΑ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "10 kg",
"code": "004-008-0050"
}
]
},
{
"b": "",
"n": "ΧΟΙΡΙΝΑ ΑΥΤΙΑ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": ""
}
]
},
{
"b": "",
"n": "ΜΟΣΧΑΡΙΣΙΑ ΑΥΤΙΑ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "25 g",
"code": ""
}
]
},
{
"b": "happy-dog",
"n": "MINI ADULT F/V",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "4 kg",
"code": "MN04013"
}
]
},
{
"b": "happy-dog",
"n": "NATUR CROQ CHICKEN",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "1 kg",
"code": "NT01005"
},
{
"s": "4 kg",
"code": "NT04006"
},
{
"s": "11 kg",
"code": "NT11001"
}
]
},
{
"b": "happy-dog",
"n": "NATUR CROQ SALMON",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "4 kg",
"code": "NT04008"
},
{
"s": "11 kg",
"code": "NT11004"
}
]
},
{
"b": "happy-cat",
"n": "MINKAS PERFECT MIX",
"c": "dry",
"pet": "cat",
"shape": "bag",
"v": [
{
"s": "1,5 kg",
"code": "MK01502"
},
{
"s": "4 kg",
"code": "MK04002"
}
]
},
{
"b": "happy-cat",
"n": "MINKAS STERILISED SALMON",
"c": "dry",
"pet": "cat",
"shape": "bag",
"v": [
{
"s": "1,5 kg",
"code": "MK01507"
},
{
"s": "4 kg",
"code": "MK04003"
}
]
},
{
"b": "happy-cat",
"n": "MINKAS URINARY CARE",
"c": "dry",
"pet": "cat",
"shape": "bag",
"v": [
{
"s": "1,5 kg",
"code": "MK01506"
},
{
"s": "10 kg",
"code": "MK10006"
}
]
},
{
"b": "brit",
"n": "CARE MINI GF ADULT LAMB",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "400 kg",
"code": "020-0608"
},
{
"s": "2 kg",
"code": "020-0607"
}
]
},
{
"b": "brit",
"n": "CARE D.HYPOALLERGENIC ADULT LAMB",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Small 1 kg",
"code": "020-1165"
},
{
"s": "Small 3 kg",
"code": "020-1166"
},
{
"s": "Medium 1 kg",
"code": "020-1122"
},
{
"s": "Medium 3 kg",
"code": "020-1123"
},
{
"s": "Medium 12 kg",
"code": "020-1124"
}
]
},
{
"b": "brit",
"n": "PREMIUM NATURE ADULT CHICKEN",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "S 1 kg",
"code": "020-0644"
},
{
"s": "M 1 kg",
"code": "020-0642"
},
{
"s": "M 3 kg",
"code": "020-0643"
},
{
"s": "M 15 kg",
"code": "020-0641"
}
]
},
{
"b": "brit",
"n": "PREMIUM NATURE ADULT LIGHT TURKEY & OAT",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "3 kg",
"code": "020-0660"
},
{
"s": "15 kg",
"code": "020-0659"
}
]
},
{
"b": "lovies",
"n": "ΣΚΥΛΟΤΡΟΦΗ ΒΟΔΙΝΟ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "1,250 g",
"code": "(00)602001"
}
]
},
{
"b": "lovies",
"n": "ΓΑΤΟΤΡΟΦΗ ΚΟΤΟΠΟΥΛΟ- ΓΑΛΟΠΟΥΛΑ",
"c": "wet",
"pet": "cat",
"shape": "can",
"v": [
{
"s": "405 g",
"code": "(00)602016"
}
]
},
{
"b": "lovies",
"n": "ΣΚΥΛΟΤΡΟΦΗ ΚΟΤΟΠΟΥΛΟ - ΓΑΛΟΠΟΥΛΑ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "1,250 g",
"code": "(00)602018"
}
]
},
{
"b": "lovies",
"n": "ΓΑΤΟΤΡΟΦΗ ΜΟΣΧΑΡΙ",
"c": "wet",
"pet": "cat",
"shape": "can",
"v": [
{
"s": "405 g",
"code": "(00)602019"
}
]
},
{
"b": "",
"n": "CYPRUS DINNER",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "1 kg",
"code": "31303"
}
]
},
{
"b": "",
"n": "CRETA DINNER",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "1 kg",
"code": "21302"
}
]
},
{
"b": "brisk",
"n": "MULTI FLAVOUR ΣΚΥΛΟΤΡΟΦΗ",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "10 kg",
"code": "5202546009485"
}
]
},
{
"b": "brisk",
"n": "ΣΚΥΛΟΤΡΟΦΗ ΣΥΝΤΗΡΗΣΗΣ",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "10 kg",
"code": "5202546009478"
}
]
},
{
"b": "miglior",
"n": "CANE ΚΟΝΣΕΡΒΑ ΣΚΥΛΟΥ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "405 g",
"code": "8007520011105"
}
]
},
{
"b": "prevital",
"n": "CAT SNACK PILLOWS ΚΟΤΟΠΟΥΛΟ - ΝΤΟΜΑΤΑ",
"c": "treats",
"pet": "cat",
"shape": "pouch",
"v": [
{
"s": "60 g",
"code": "5999566111389"
}
]
},
{
"b": "prevital",
"n": "CAT SNACK CRISPY MIX ΚΡΕΑΣ",
"c": "treats",
"pet": "cat",
"shape": "pouch",
"v": [
{
"s": "60 g",
"code": "5999566111358"
}
]
},
{
"b": "petfarm",
"n": "SHAMPOO & CONDITIONER SEA BREEZE",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "625 ml",
"code": "300-302"
}
]
},
{
"b": "petfarm",
"n": "SHAMPOO & CONDITIONER BABY POWDER",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "625 ml",
"code": "300-303"
}
]
},
{
"b": "",
"n": "DOG PLEASURE PERFUME -BABY POWDER",
"c": "care",
"pet": "dog",
"shape": "bottle",
"v": [
{
"s": "100 ml",
"code": "300-401"
}
]
},
{
"b": "",
"n": "DOG PLEASURE PERFUME -CANDY",
"c": "care",
"pet": "dog",
"shape": "bottle",
"v": [
{
"s": "100 ml",
"code": "300-402"
}
]
},
{
"b": "",
"n": "SHAMPOO OLIVE ESSENTIAL",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "500 ml",
"code": "300-200"
}
]
},
{
"b": "",
"n": "SHAMPOO OLIVE PUPPY & SENSITIVE",
"c": "care",
"pet": "dog",
"shape": "bottle",
"v": [
{
"s": "500 ml",
"code": "300-201"
}
]
},
{
"b": "",
"n": "SHAMPOO OLIVE DEEP CLEANING",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "500 ml",
"code": "300-202"
}
]
},
{
"b": "",
"n": "ΤΡΑΓΑΝΟ ΠΟΥΡΑΚΙ ΜΠΙΣΚΟΤΟΥ ΜΙΚΡΟ ΜΕ ΚΟΤΟΠΟΥΛΟ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "701-051"
}
]
},
{
"b": "",
"n": "ΟΔΟΝΤΙΚΕΣ ΜΠΑΡΕΣ ΜΕ ΡΥΖΙ ΚΑΙ ΛΑΧΑΝΙΚΑ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "12 cm",
"code": "558-001"
}
]
},
{
"b": "",
"n": "ΚΡΕΒΑΤΙ ΠΟΥΦ ΨΑΡΟΚΟΚΚΑΛΟ/ΓΚΡΙ",
"c": "beds",
"pet": "both",
"shape": "box",
"v": [
{
"s": "Small",
"code": "PO.S.020"
},
{
"s": "Medium",
"code": "PO.M.020"
},
{
"s": "Large",
"code": "PO.L.020"
}
]
},
{
"b": "",
"n": "ΜΑΛΑΚΑ ΣΤΙΚ ΜΕ ΣΟΛΟΜΟ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "200 g",
"code": "561-046"
}
]
},
{
"b": "",
"n": "ΜΙΝΙ ΚΟΚΚΑΛΑΚΙ ΜΕ ΜΟΣΧΑΡΙ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "125 g",
"code": "561-031"
}
]
},
{
"b": "",
"n": "ΜΑΛΑΚΕΣ ΜΠΟΥΚΙΕΣ ΜΕ ΚΟΤΟΠΟΥΛΟ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "200 g",
"code": "561-051"
}
]
},
{
"b": "",
"n": "ΜΠΟΥΚΙΕΣ OLIVE ΑΡΝΙ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "200 g",
"code": "561-252"
}
]
},
{
"b": "",
"n": "ΜΙΝΙ ΚΟΚΚΑΛΑΚΙ MIX",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "125 g",
"code": "561-036"
}
]
},
{
"b": "",
"n": "ΜΠΟΥΚΙΕΣ OLIVE ΜΟΣΧΑΡΙ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "200 g",
"code": "561-250"
}
]
},
{
"b": "",
"n": "ΜΑΛΑΚΕΣ ΜΠΟΥΚΙΕΣ ΜΕ ΣΟΛΟΜΟ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "200 g",
"code": "561-053"
}
]
},
{
"b": "",
"n": "ΧΑΛΑΚΙ PQP",
"c": "beds",
"pet": "both",
"shape": "box",
"v": [
{
"s": "Small",
"code": "CT.S.011"
},
{
"s": "Large",
"code": "CT.L.011"
}
]
},
{
"b": "flexi",
"n": "ΑΝΑΔΙΠΛΟΥΜΕΝΟΣ ΟΔΗΓΟΣ NEON",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "5 m έως 15 kg",
"code": "209316"
},
{
"s": "5 m έως 25 kg",
"code": "209322"
}
]
},
{
"b": "flexi",
"n": "ΑΝΑΔΙΠΛΟΥΜΕΝΟΣ ΟΔΗΓΟΣ DESIGN BLACK PINK",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "έως 15 kg",
"code": "12356"
}
]
},
{
"b": "flexi",
"n": "ΑΝΑΔΙΠΛΟΥΜΕΝΟΣ ΟΔΗΓΟΣ BLACK",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "5 m έως 15 kg",
"code": "11831"
},
{
"s": "5 m έως 25 kg",
"code": "11711"
},
{
"s": "5 m έως 50 kg",
"code": "11721"
}
]
},
{
"b": "flexi",
"n": "ΟΔΗΓΟΣ CAVO ΠΛΕΞΟΥΔΑ ΦΟΥΞ",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "2 m",
"code": "143511"
}
]
},
{
"b": "flexi",
"n": "ΟΔΗΓΟΣ CAVO ΠΛΕΞΟΥΔΑ ΠΡΑΣΙΝΟ",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "2 m",
"code": "143528"
}
]
},
{
"b": "flexi",
"n": "ΟΔΗΓΟΣ CAVO ΠΛΕΞΟΥΔΑ ΚΟΚΚΙΝΟ",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "2 m",
"code": "143503"
}
]
},
{
"b": "flexi",
"n": "ΟΔΗΓΟΣ CAVO ΠΛΕΞΟΥΔΑ ΜΑΥΡΟ",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "2 m",
"code": "143501"
}
]
},
{
"b": "flexi",
"n": "CAVO ΟΔΗΓΟΣ SAGE- PETROL",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "2 m S-M",
"code": "143532"
}
]
},
{
"b": "flexi",
"n": "CAVO REFLECT ΦΩΣΦΟΡΙΖΟΝ ΦΟΥΞ",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "Ενιαίο",
"code": "135811"
}
]
},
{
"b": "flexi",
"n": "ΠΕΡΙΛΑΙΜΙΟ ΜΕ ΜΑΞΙΛΑΡΑΚΙ BLACK",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "S-M",
"code": "1995601"
},
{
"s": "M-L",
"code": "1995701"
}
]
},
{
"b": "flexi",
"n": "ΠΕΡΙΛΑΙΜΙΟ ΜΕ ΜΑΞΙΛΑΡΑΚΙ RED",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XS-S",
"code": "1995503"
},
{
"s": "S-M",
"code": "1995603"
},
{
"s": "M-L",
"code": "1995703"
}
]
},
{
"b": "flexi",
"n": "ΠΕΡΙΛΑΙΜΙΟ ΜΕ ΜΑΞΙΛΑΡΑΚΙ AQUA",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "S-M",
"code": "1995628"
},
{
"s": "M-L",
"code": "1995728"
},
{
"s": "L",
"code": "1995828"
}
]
},
{
"b": "flexi",
"n": "ΠΕΡΙΛΑΙΜΙΟ ΜΕ ΜΑΞΙΛΑΡΑΚΙ PINK",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XS-S",
"code": "1995511"
},
{
"s": "S-M",
"code": "1995611"
},
{
"s": "M-L",
"code": "1995711"
}
]
},
{
"b": "trixie",
"n": "ΟΔΗΓΟΣ BLUSH",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "M-L 2 m 20 mm",
"code": "200535"
},
{
"s": "XS-S 2 m 15 mm",
"code": "200435"
}
]
},
{
"b": "trixie",
"n": "ΟΔΗΓΟΣ SUNGRIA",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "M-L 2 m 20 mm",
"code": "200431"
}
]
},
{
"b": "trixie",
"n": "ΟΔΗΓΟΣ SAGE",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "M-L 2 m 20 mm",
"code": "200534"
}
]
},
{
"b": "trixie",
"n": "ΟΔΗΓΟΣ PETROL",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "M-L 2 m 20 mm",
"code": "200532"
}
]
},
{
"b": "trixie",
"n": "ΠΕΡΙΛΑΙΜΙΟ SUNGRIA",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "S 25-40 cm 15 mm",
"code": "202231"
},
{
"s": "M-L 35-55 cm 20 mm",
"code": "201631"
}
]
},
{
"b": "trixie",
"n": "ΠΕΡΙΛΑΙΜΙΟ ΠΕΤΡΟΛ",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XS-S 22-35 cm 10 mm",
"code": "201432"
},
{
"s": "S-M 30-45 cm 15 mm",
"code": "201532"
},
{
"s": "M-L 35-55 cm 20 mm",
"code": "201632"
}
]
},
{
"b": "trixie",
"n": "ΠΕΡΙΛΑΙΜΙΟ SAGE",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XS-S 22-35 cm 10 mm",
"code": "201434"
},
{
"s": "S-M 30-45 cm 15 mm",
"code": "201534"
}
]
},
{
"b": "trixie",
"n": "ΠΕΡΙΛΑΙΜΙΟ ΡΟΖ BLUSH",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XS-S 22-35 cm 10 mm",
"code": "201435"
},
{
"s": "S-Μ 30-45 cm 15 mm",
"code": "201535"
}
]
},
{
"b": "trixie",
"n": "ΣΑΜΑΡΙ ΚΟΚΚΙΝΟ",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "S 40-50 cm 15 mm",
"code": "204403"
},
{
"s": "M 50-65 cm 20 mm",
"code": "204503"
},
{
"s": "L 65-80 cm 25 mm",
"code": "204603"
}
]
},
{
"b": "trixie",
"n": "ΣΑΜΑΡΙ ΦΟΥΞ",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XS-S 30-40 cm 10 mm",
"code": "204311"
},
{
"s": "S 40-50 cm 15 mm",
"code": "204411"
},
{
"s": "M 50-65 cm 20 mm",
"code": "204511"
}
]
},
{
"b": "",
"n": "ΘΗΚΗ ΓΙΑ ΣΑΚΟΥΛΕΣ ΑΚΑΘΑΡΣΙΩΝ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "22841"
}
]
},
{
"b": "",
"n": "ΣΑΚΟΥΛΕΣ ΧΥΜΑ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "22843"
}
]
},
{
"b": "",
"n": "ΘΗΚΕΣ ΛΙΧΟΥΔΙΩΝ BE NORDIC",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "Ενιαίο",
"code": "32292"
}
]
},
{
"b": "",
"n": "ΘΗΚΕΣ ΛΙΧΟΥΔΙΩΝ",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "Ενιαίο",
"code": "3226"
}
]
},
{
"b": "",
"n": "ΠΙΑΤΟ ΑΝΟΞΕΙΔΩΤΟ ΣΤΑΘΕΡΟ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "0,45 L 19 cm",
"code": "24851"
}
]
},
{
"b": "",
"n": "ΣΟΥΠΛΑ ΓΙΑ ΜΠΩΛ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "Ενιαίο",
"code": "24561"
}
]
},
{
"b": "",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ ΦΙΔΙ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "34931"
}
]
},
{
"b": "",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ SNACK ROLL",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "32020"
}
]
},
{
"b": "",
"n": "ΚΡΕΜΑ ΦΡΟΝΤΙΔΑΣ ΠΑΤΟΥΣΩΝ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "50 ml",
"code": "2571"
}
]
},
{
"b": "",
"n": "ΟΔΟΝΤΟΚΡΕΜΑ ΣΚΥΛΩΝ ΜΕΝΤΑ",
"c": "care",
"pet": "dog",
"shape": "bottle",
"v": [
{
"s": "100 g",
"code": "2557"
}
]
},
{
"b": "",
"n": "ΟΔΟΝΤΟΒΟΥΡΤΣΑ 3ΚΕΦΑΛΩΝ ΣΚΥΛΟΥ/ΓΑΤΑΣ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "25622"
}
]
},
{
"b": "",
"n": "ΟΔΟΝΤΟΒΟΥΡΤΣΕΣ ΣΙΛΙΚΟΝΗΣ ΣΚΥΛΟΥ/ΓΑΤΑΣ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "25624"
}
]
},
{
"b": "trixie",
"n": "ΔΟΧΕΙΟ ΦΑΓΗΤΟΥ ΚΑΙ ΝΕΡΟΥ ΤΑΞΙΔΙΟΥ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "Ενιαίο",
"code": "25019"
}
]
},
{
"b": "",
"n": "ΚΛΙΚΕΡ ΕΚΠΑΙΔΕΥΣΗΣ ΑΠΛΟ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "2289"
}
]
},
{
"b": "",
"n": "ΣΕΤ ΟΔΟΝΤΙΚΗΣ ΦΡΟΝΤΙΔΑΣ ΓΙΑ ΓΑΤΕΣ",
"c": "care",
"pet": "cat",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "25620"
}
]
},
{
"b": "",
"n": "ΤΣΙΜΠΙΔΑΚΙ ΤΣΙΜΟΥΡΙΩΝ ΛΕΥΚΟ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "24282"
}
]
},
{
"b": "",
"n": "ΠΑΙΧΝΙΔΙ ΓΑΤΑΣ SNACK ROLL",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "4592"
}
]
},
{
"b": "",
"n": "ΛΕΚΑΝΗ CARLO ΜΕ ΠΛΑΙΣΙΟ ΓΚΡΙ",
"c": "litter",
"pet": "cat",
"shape": "tray",
"v": [
{
"s": "38X17X58",
"code": "40121"
},
{
"s": "38X17X58 cm",
"code": "40121"
}
]
},
{
"b": "",
"n": "ΝΥΧΟΚΟΠΤΗΣ ΨΑΛΙΔΙ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "2373"
}
]
},
{
"b": "",
"n": "ΠΙΑΤΟ ΤΑΞΙΔΙΟΥ ΣΙΛΙΚΟΝΗΣ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "Ενιαίο",
"code": "25011"
}
]
},
{
"b": "",
"n": "ΠΙΑΤΟ ΑΝΟΞΕΙΔΩΤΟ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "0,5 L 13 cm",
"code": "25271"
}
]
},
{
"b": "",
"n": "ΒΑΣΗ ΜΕ ΔΥΟ ΠΙΑΤΑ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "0,45 L 13 cm",
"code": "25231"
}
]
},
{
"b": "",
"n": "ΠΙΑΤΟ ΜΕΤΑΛΛΙΚΟ ΜΕ ΛΑΣΤΙΧΕΝΙΑ ΒΑΣΗ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "0,5 L 14 cm",
"code": "25071"
}
]
},
{
"b": "",
"n": "ΠΙΑΤΟ ΚΕΡΑΜΙΚΟ PET'S HOME ΚΡΕΜ/ΠΕΤΡΟΛ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "0,3 L 12 cm",
"code": "25050"
}
]
},
{
"b": "",
"n": "ΠΙΑΤΟ ΚΕΡΑΜΙΚΟ PET'S HOME ΚΡΕΜ/ΚΑΦΕ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "0,8 L 16 cm",
"code": "25054"
}
]
},
{
"b": "",
"n": "ΠΙΑΤΟ ΓΑΤΑΣ ΚΕΡΑΜΙΚΟ ΔΙΑΦΟΡΑ ΧΡΩΜΑΤΑ",
"c": "bowls",
"pet": "cat",
"shape": "bowl",
"v": [
{
"s": "0,3 L 15 cm",
"code": "24795"
}
]
},
{
"b": "trixie",
"n": "ΟΔΗΓΟΣ RED",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "Extra long 3 m",
"code": "196803"
}
]
},
{
"b": "trixie",
"n": "ΟΔΗΓΟΣ BLACK",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "Extra long 3 m",
"code": "196801"
}
]
},
{
"b": "",
"n": "ΣΑΜΑΡΙ CITY STYLE",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XS-S",
"code": "1969616"
},
{
"s": "S-M",
"code": "1969716"
},
{
"s": "M-L",
"code": "1969816"
}
]
},
{
"b": "",
"n": "ΒΟΥΡΤΣΑ ΓΙΑ ΧΝΟΥΔΙΑ ΜΕ ΒΑΣΗ ΚΑΘΑΡΙΣΜΟΥ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "33 cm",
"code": "23235"
}
]
},
{
"b": "",
"n": "ΒΟΥΡΤΣΑ ΑΠΑΛΗ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "19 cm",
"code": "24155"
}
]
},
{
"b": "",
"n": "ΠΙΑΤΟ ΑΝΟΞΕΙΔΩΤΟ ΑΠΛΟ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "2,8 L 24 cm",
"code": "24844"
}
]
},
{
"b": "",
"n": "ΠΙΑΤΟ ΑΝΟΞΕΙΔΩΤΟ ΜΕ ΠΛΑΣΤΙΚΗ ΕΠΕΝΔΥΣΗ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "0,25 L 12 cm",
"code": "25270"
}
]
},
{
"b": "",
"n": "GEL ΚΑΘΑΡΙΣΜΟΥ ΔΟΝΤΙΩΝ ΒΟΔΙΝΟ ΣΚΥΛΟΥ/ΓΑΤΑΣ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "100 g",
"code": "25446"
}
]
},
{
"b": "",
"n": "ΟΔΟΝΤΟΚΡΕΜΑ ΣΚΥΛΟΥ ΜΕ ΓΕΥΣΗ ΒΟΔΙΝΟ",
"c": "care",
"pet": "dog",
"shape": "bottle",
"v": [
{
"s": "100 g",
"code": "2545"
}
]
},
{
"b": "",
"n": "ΟΔΟΝΤΟΚΡΕΜΑ ΣΚΥΛΟΥ ΜΕ ΓΕΥΣΗ ΜΕΝΤΑ",
"c": "care",
"pet": "dog",
"shape": "bottle",
"v": [
{
"s": "100 g",
"code": "2557"
}
]
},
{
"b": "",
"n": "ΟΔΟΝΤΟΒΟΥΡΤΣΑ ΣΙΛΙΚΟΝΗΣ ΣΚΥΛΟΥ/ΓΑΤΑΣ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "25624"
}
]
},
{
"b": "",
"n": "EYE CARE ΣΤΑΓΟΝΕΣ ΚΑΘΑΡΙΣΜΟΥ ΜΑΤΙΩΝ",
"c": "health",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "50 ml",
"code": "2546"
}
]
},
{
"b": "",
"n": "ΣΠΡΕΙ ΜΕ ΛΑΔΙ JOJOBA ΓΙΑ ΑΠΑΛΟΤΗΤΑ ΚΑΙ ΛΑΜΨΗ ΓΙΑ ΣΚΥΛΟΥΣ",
"c": "health",
"pet": "dog",
"shape": "bottle",
"v": [
{
"s": "175 ml",
"code": "2932"
}
]
},
{
"b": "",
"n": "ΑΝΤΙΠΑΡΑΣΙΤΙΚΟ ΠΕΡΙΛΑΙΜΙΟ ΣΚΥΛΩΝ ΚΑΦΕ",
"c": "health",
"pet": "dog",
"shape": "bottle",
"v": [
{
"s": "60 cm",
"code": "3906"
}
]
},
{
"b": "",
"n": "ΛΙΧΟΥΔΙΑ VIGAN CUBES ΜΕ ΦΡΟΥΤΑ ΚΑΙ ΛΑΧΑΝΙΚΑ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "31286"
}
]
},
{
"b": "",
"n": "ΛΙΧΟΥΔΙΑ DENTA FUN CHEW BITES",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "150 g",
"code": "31501"
}
]
},
{
"b": "",
"n": "ΛΙΧΟΥΔΙΑ DENTINOS ΜΕ ΒΙΤΑΜΙΝΕΣ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "50 g",
"code": "4266"
}
]
},
{
"b": "",
"n": "ΛΙΧΟΥΔΙΑ COOKIES ΜΕ ΚΟΤΟΠΟΥΛΟ & ΓΑΡΙΔΑ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "50 g",
"code": "42748"
}
]
},
{
"b": "",
"n": "ΛΙΧΟΥΔΙΑ ΓΙΑ ΧΑΠΙΑ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "25842"
}
]
},
{
"b": "",
"n": "PET'S HOME CERAMIC BOWL",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "0,8 L 16 cm",
"code": "25051"
}
]
},
{
"b": "",
"n": "SALMON OIL",
"c": "health",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "250 ml",
"code": "2993"
}
]
},
{
"b": "",
"n": "ΟΔΗΓΟΣ ΣΧΟΙΝΙ BLACK",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "5 m 20 mm Medium",
"code": "19901"
}
]
},
{
"b": "flexi",
"n": "MULTI BOX",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "5X7 cm",
"code": "12111"
}
]
},
{
"b": "",
"n": "BALL LATEX HEDGEHOG",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "7 cm",
"code": "35432"
}
]
},
{
"b": "",
"n": "ΛΟΥΤΡΙΝΟ FOX",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "45 cm",
"code": "361013"
}
]
},
{
"b": "",
"n": "PLAYING ROPE COTTON ΣΧΟΙΝΙ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "50 cm",
"code": "3269"
}
]
},
{
"b": "",
"n": "ΑΔΙΑΒΡΟΧΟ RAINCOAT VIMY",
"c": "wear",
"pet": "dog",
"shape": "box",
"v": [
{
"s": "40 cm 40-61 cm",
"code": "67973"
},
{
"s": "50 cm 48-73 cm",
"code": "67975"
},
{
"s": "62 cm 78-89 cm",
"code": "67977"
}
]
},
{
"b": "harper-and-bone",
"n": "SENIOR LIGHT DOG FLAVOURS FARM",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Ενιαίο",
"code": "30-243"
}
]
},
{
"b": "harper-and-bone",
"n": "ADULT DOG WILD MOUNTAIN",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Medium Large · κωδ. 30-255",
"code": "30-255"
},
{
"s": "Medium Large · κωδ. 30-254",
"code": "30-254"
}
]
},
{
"b": "harper-and-bone",
"n": "PUPPY DOG FLAVOURS FARM",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Ενιαίο",
"code": "30-236"
}
]
},
{
"b": "harper-and-bone",
"n": "ADULT DOG OCEAN WONDERS",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Medium Large · κωδ. 30-247",
"code": "30-247"
},
{
"s": "Medium Large · κωδ. 30-246",
"code": "30-246"
}
]
},
{
"b": "harper-and-bone",
"n": "ADULT DOG FRESH MARKET",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Medium Large",
"code": "30-251"
}
]
},
{
"b": "harper-and-bone",
"n": "ADULT DOG FLAVOURS FARM",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Medium Large",
"code": "30-239"
}
]
},
{
"b": "harper-and-bone",
"n": "CAT STERILISED WILD MOUNTAIN",
"c": "dry",
"pet": "cat",
"shape": "bag",
"v": [
{
"s": "Ενιαίο",
"code": "30-234"
}
]
},
{
"b": "harper-and-bone",
"n": "CAT STERILISED FLAVOURS FARM",
"c": "dry",
"pet": "cat",
"shape": "bag",
"v": [
{
"s": "Ενιαίο",
"code": "30-224"
}
]
},
{
"b": "harper-and-bone",
"n": "CAT STERILISED OCEAN WONDERS",
"c": "dry",
"pet": "cat",
"shape": "bag",
"v": [
{
"s": "Ενιαίο",
"code": "30-229"
}
]
},
{
"b": "harper-and-bone",
"n": "ADULT DOG MINI OCEAN WONDERS",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Ενιαίο",
"code": "30-244"
}
]
},
{
"b": "harper-and-bone",
"n": "ADULT DOG MINI WILD MOUNTAIN",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Ενιαίο",
"code": "30-252"
}
]
},
{
"b": "harper-and-bone",
"n": "ADULT DOG MINI FRESH MARKET",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Ενιαίο",
"code": "30-248"
}
]
},
{
"b": "felifor",
"n": "CAT STERILISED",
"c": "dry",
"pet": "cat",
"shape": "bag",
"v": [
{
"s": "15 kg",
"code": "30-325"
}
]
},
{
"b": "harper-and-bone",
"n": "CATS & DOG IBERIAN SOFT TREATS CHICKEN, SALMON & TUNA",
"c": "treats",
"pet": "both",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "30-338"
}
]
},
{
"b": "harper-and-bone",
"n": "CATS & DOG IBERIAN SOFT TREATS BEEF",
"c": "treats",
"pet": "both",
"shape": "pouch",
"v": [
{
"s": "90 g",
"code": "30-337"
}
]
},
{
"b": "",
"n": "RHIDE BONE",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "11 cm",
"code": "521766"
}
]
},
{
"b": "",
"n": "DUCK SUSHI",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "520272"
}
]
},
{
"b": "hapki",
"n": "CHICKEN BISCUITS WRAPPED ΚΟΚΚΑΛΑΚΙ",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "521109"
}
]
},
{
"b": "hapki",
"n": "BBQ CHICKEN FILLET",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "520257"
}
]
},
{
"b": "hapki",
"n": "RABBIT RICE ROLLS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "521122"
}
]
},
{
"b": "",
"n": "R-HIDE WRAPPED STICK CHICKEN & FISH",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "520294"
}
]
},
{
"b": "earth-rated",
"n": "BAGS ON 1 ROLL - UNSCENTED",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "35-012"
}
]
},
{
"b": "earth-rated",
"n": "BAGS ON 21 REFILL ROLLS - LAVENDER",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "35-009"
}
]
},
{
"b": "zeze",
"n": "SCRATCHING TREE DARIN ΑΣΤΕΡΙΑ",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "33,5*33,5*46 cm",
"code": "32-032"
}
]
},
{
"b": "zeze",
"n": "SCRATCHING BOARD GREEN",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "44*22*4 cm",
"code": "32-033"
}
]
},
{
"b": "zeze",
"n": "SCRATCHING BOARD YELLOW",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "44*22*4 cm",
"code": "32-035"
}
]
},
{
"b": "zeze",
"n": "SCRATCHING BOARD PINK",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "44*22*4 cm",
"code": "32-034"
}
]
},
{
"b": "zeze",
"n": "SCRATCHING TREE ALLOY ΠΟΥΛΙ",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "33,3*33,5*46 cm",
"code": "32-031"
}
]
},
{
"b": "waudog",
"n": "SILICONE NO SPLASH WATER BOWL, PINK",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "1 L",
"code": "31-867"
},
{
"s": "750 ml",
"code": "31-869"
}
]
},
{
"b": "waudog",
"n": "SILICONE NO SPLASH WATER BOWL, BLUE",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "750 ml",
"code": "31-868"
}
]
},
{
"b": "flamingo",
"n": "TRAINING PADS 90 X 60",
"c": "litter",
"pet": "dog",
"shape": "tray",
"v": [
{
"s": "Ενιαίο",
"code": "517529"
}
]
},
{
"b": "flamingo",
"n": "PET WIPES COTTONSOFT NEUTRAL ΧΩΡΙΣ ΑΡΩΜΑ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "522193"
}
]
},
{
"b": "flamingo",
"n": "PET WIPES WHITE MUSK ΜΕ ΑΡΩΜΑ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "522196"
}
]
},
{
"b": "",
"n": "LINT ROLLER",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "32-018"
}
]
},
{
"b": "waudog",
"n": "NYLON DOG LEASH \"SUPERMAN\"",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "15 mm 122 cm",
"code": "31-189"
},
{
"s": "20 mm 122 cm",
"code": "31-190"
}
]
},
{
"b": "waudog",
"n": "NYLON DOG COLLAR WITH QR PASSPORT, \"UNICORNS\" METAL",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "L",
"code": "31-121"
},
{
"s": "XL",
"code": "31-122"
},
{
"s": "M",
"code": "31-120"
}
]
},
{
"b": "waudog",
"n": "NYLON DOG LEASH \"UNICORNS\"",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "15 mm 152-183 cm S",
"code": "31-193"
}
]
},
{
"b": "waudog",
"n": "DOG COLLAR \"SUPERMAN\" METAL",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XL 35-58 cm",
"code": "31-118"
}
]
},
{
"b": "waudog",
"n": "NYLON DOG COLLAR WITH QR PASSPORT, \"NASA\", PLASTIC",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "L",
"code": "31-441"
},
{
"s": "M",
"code": "31-440"
}
]
},
{
"b": "waudog",
"n": "WATERPROOF DOG LEASH",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "20 mm 183 cm M",
"code": "31-550"
}
]
},
{
"b": "waudog",
"n": "NYLON DOG LEASH \"NASA\"",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "20 mm L 122 cm M",
"code": "31-444"
}
]
},
{
"b": "waudog",
"n": "NYLON DOG LEASH \"NASA\", ADJUSTABLE",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "15 mm S",
"code": "31-446"
}
]
},
{
"b": "waudog",
"n": "NYLON DOG HARNESS WITH QR PASSPORT, \"NASA\"",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "L",
"code": "31-416"
}
]
},
{
"b": "waudog",
"n": "NYLON DOG COLLAR WITH QR PASSPORT \"SUPERMAN\"",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "L",
"code": "31-117"
}
]
},
{
"b": "waudog",
"n": "NYLON DOG COLLAR WITH QR \"SUPERMAN\"",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XL",
"code": "31-116"
}
]
},
{
"b": "waudog",
"n": "NYLON LEASH \"INDIE\" ADJUSTABLE",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "15 mm S",
"code": "31-281"
}
]
},
{
"b": "waudog",
"n": "NYLON LEASH \"NASA\" ADJUSTABLE",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "20 mm M",
"code": "31-447"
}
]
},
{
"b": "waudog",
"n": "NYLON COLLAR WITH QR \"NASA\" PLASTIC",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XL",
"code": "31-442"
}
]
},
{
"b": "waudog",
"n": "NYLON COLLAR WITH QR \"UNICORNS\" METAL",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "Ενιαίο",
"code": "31-119"
}
]
},
{
"b": "waudog",
"n": "WATERPROOF LEASH GLOW IN THE DARK",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "20 mm M",
"code": "31-586"
},
{
"s": "15 mm S",
"code": "31-587"
}
]
},
{
"b": "waudog",
"n": "WATERPROOF COLLAR WITH QR GLOW IN THE DARK",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "L",
"code": "31-590"
},
{
"s": "XL",
"code": "31-591"
}
]
},
{
"b": "waudog",
"n": "WATERPROOF COLLAR WITH QR",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "M",
"code": "31-659"
}
]
},
{
"b": "waudog",
"n": "WATERPROOF LEASH BLACK",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "15 mm 183 cm S",
"code": "31-647"
}
]
},
{
"b": "waudog",
"n": "COLLAR WITH QR",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XL",
"code": "31-560"
}
]
},
{
"b": "waudog",
"n": "NYLON DOG COLLAR WITH QR",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "Ενιαίο",
"code": "31-899"
}
]
},
{
"b": "waudog",
"n": "NYLON COLLAR WITH QR \"INDIE\" PLASTIC",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "S",
"code": "31-387"
}
]
},
{
"b": "waudog",
"n": "NYLON COLLAR WITH QR TAZ",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "S",
"code": "31-735"
},
{
"s": "M",
"code": "31-736"
},
{
"s": "L",
"code": "31-737"
},
{
"s": "XL",
"code": "31-738"
}
]
},
{
"b": "waudog",
"n": "NYLON COLLAR WITH QR",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "Ενιαίο",
"code": "31-710"
}
]
},
{
"b": "waudog",
"n": "NYLON LEASH \"UNICORNS\"",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "20 mm 152-183 cm M",
"code": "31-195"
}
]
},
{
"b": "waudog",
"n": "NYLON COLLAR WITH QR LOONEY TUNES",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "L",
"code": "31-713"
}
]
},
{
"b": "flamingo",
"n": "HARNESS ABBI CHERRY RED",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "Small 40-50 cm",
"code": "523356"
},
{
"s": "Medium 50-65 cm",
"code": "523357"
},
{
"s": "Large 55-70 cm",
"code": "523358"
},
{
"s": "XL 65-80 cm",
"code": "523359"
}
]
},
{
"b": "baffs-naturals",
"n": "BEEF LUNG CUBES",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "BF9911"
}
]
},
{
"b": "baffs-naturals",
"n": "BEEF TRACHEA SNACK",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "BF9927"
}
]
},
{
"b": "baffs-naturals",
"n": "BEEF LUNG BISCUITS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "BF9925"
}
]
},
{
"b": "baffs-naturals",
"n": "BEEF LUNG TRAINING BITES",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "BF9929"
}
]
},
{
"b": "baffs-naturals",
"n": "LAMB LUNG TRAINING BITES",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "BF9921"
}
]
},
{
"b": "baffs-naturals",
"n": "CHICKEN NECK",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "BF9932"
}
]
},
{
"b": "baffs-naturals",
"n": "BEEF BACKSTRAP SINEW",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "BF9913"
}
]
},
{
"b": "baffs-naturals",
"n": "BEEF STRIPS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "BF9944"
}
]
},
{
"b": "baffs-naturals",
"n": "LAMB MINI BURGER",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "BF9975"
}
]
},
{
"b": "yowup",
"n": "DOG YOGURT",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "115 g",
"code": "YO110"
}
]
},
{
"b": "yowup",
"n": "CAT YOGURT",
"c": "treats",
"pet": "cat",
"shape": "pouch",
"v": [
{
"s": "85 g",
"code": "YO210"
}
]
},
{
"b": "yowup",
"n": "DOG SKIN & HAIR",
"c": "health",
"pet": "dog",
"shape": "bottle",
"v": [
{
"s": "115 g",
"code": "YO111"
}
]
},
{
"b": "yowup",
"n": "CAT SKIN & HAIR",
"c": "health",
"pet": "cat",
"shape": "bottle",
"v": [
{
"s": "85 g",
"code": "YO211"
}
]
},
{
"b": "yowup",
"n": "L.CASEI CAT",
"c": "health",
"pet": "cat",
"shape": "bottle",
"v": [
{
"s": "85 g",
"code": "YO240"
}
]
},
{
"b": "celebrate-freshness",
"n": "CHICKEN & RICE BALL",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "84103"
}
]
},
{
"b": "celebrate-freshness",
"n": "CHICKEN NUGGETS BITES",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "84099"
}
]
},
{
"b": "celebrate-freshness",
"n": "BEEF COIN",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "84084"
}
]
},
{
"b": "celebrate-freshness",
"n": "RABBIT SUSHI",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "84100"
}
]
},
{
"b": "celebrate-freshness",
"n": "CHICKEN SANDWICH",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "84002"
}
]
},
{
"b": "celebrate-freshness",
"n": "CHICKEN BREAST",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "84006"
}
]
},
{
"b": "celebrate-freshness",
"n": "SALMON CALCIUM BONE",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "84014"
}
]
},
{
"b": "celebrate-freshness",
"n": "DUCK CALCIUM BONE",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "84024"
}
]
},
{
"b": "celebrate-freshness",
"n": "RABBIT STICK",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "84113"
}
]
},
{
"b": "celebrate-freshness",
"n": "DUCK STICKS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Small",
"code": "84122"
}
]
},
{
"b": "celebrate-freshness",
"n": "LAMB STICKS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "100 g",
"code": "84017"
}
]
},
{
"b": "celebrate-freshness",
"n": "COLLAGEN CHICKEN ROLLS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "84403"
}
]
},
{
"b": "celebrate-freshness",
"n": "COLLAGEN SALMON DONUT",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "84411"
}
]
},
{
"b": "celebrate-freshness",
"n": "COLLAGEN DENTAL BEEF STAR STICKS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "84417"
}
]
},
{
"b": "celebrate-freshness",
"n": "COLLAGEN DENTAL DUCK STAR STICKS",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "84421"
}
]
},
{
"b": "the-barkers",
"n": "BBQ TWISTED STICK DUCK",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "15 cm 40 g",
"code": "80407"
}
]
},
{
"b": "the-barkers",
"n": "BBQ STICK CHICKEN",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "30,5 cm 100 g",
"code": "80409"
}
]
},
{
"b": "celebrate-freshness",
"n": "ΛΑΔΙ ΣΟΛΟΜΟΥ",
"c": "health",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "100 ml",
"code": "90500"
}
]
},
{
"b": "celebrate-freshness",
"n": "CHICKEN SUSHI CAT",
"c": "treats",
"pet": "cat",
"shape": "pouch",
"v": [
{
"s": "Ενιαίο",
"code": "84081"
}
]
},
{
"b": "happy-yak",
"n": "HIMALAYAN CHEESE BONE",
"c": "treats",
"pet": "dog",
"shape": "pouch",
"v": [
{
"s": "Small",
"code": "84314"
},
{
"s": "Medium",
"code": "84315"
}
]
},
{
"b": "rafi",
"n": "ADULT ΠΑΤΕ ΑΡΝΙ BLUEBERRY & CRANBERRY",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "300 g",
"code": "D78067"
}
]
},
{
"b": "rafi",
"n": "ADULT ΠΑΤΕ ΓΑΛΟΠΟΥΛΑ BLUEBERRY & CRANBERRY",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "300 g",
"code": "D78068"
}
]
},
{
"b": "rafi",
"n": "ADULT ΠΑΤΕ ΚΥΝΗΓΙ BLUEBERRY & CRANBERRY",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "300 g",
"code": "D78069"
},
{
"s": "400 g",
"code": "D78002"
}
]
},
{
"b": "rafi",
"n": "ADULT MINI ΑΡΝΙ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "150 g",
"code": "D78065"
}
]
},
{
"b": "piper",
"n": "ADULT ΚΥΝΗΓΙ & ΚΟΛΟΚΥΘΑ POUCH",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "150 g",
"code": "D75119"
}
]
},
{
"b": "rafi",
"n": "CAT ADULT ΠΑΤΕ STERILISED ΤΟΝΟΣ",
"c": "wet",
"pet": "cat",
"shape": "can",
"v": [
{
"s": "100 g",
"code": "D78100"
}
]
},
{
"b": "rafi",
"n": "CAT ADULT ΠΑΤΕ ΠΑΠΙΑ",
"c": "wet",
"pet": "cat",
"shape": "can",
"v": [
{
"s": "100 g",
"code": "D78101"
}
]
},
{
"b": "rafi",
"n": "CAT ADULT ΠΑΤΕ STERILISED ΓΑΛΟΠΟΥΛΑ",
"c": "wet",
"pet": "cat",
"shape": "can",
"v": [
{
"s": "100 g",
"code": "D78102"
}
]
},
{
"b": "rafi",
"n": "ADULT ΠΑΤΕ ΟΡΤΥΚΙ,BLUEBERRY & CRANBERRY",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "400 g",
"code": "D78005"
}
]
},
{
"b": "rafi",
"n": "ADULT ΠΑΤΕ ΑΡΝΙ, BLUEBERRY & CRANBERRY",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "400 g",
"code": "D78001"
}
]
},
{
"b": "rafi",
"n": "ADULT ΠΑΤΕ ΠΑΠΙΑ, BLUEBERRY & CRANBERRY",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "400 g",
"code": "D78004"
}
]
},
{
"b": "rafi",
"n": "ADULT ΠΑΤΕ ΒΟΔΙΝΟ BEEF BLUEBERRY & CRANBERRY",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "400 g",
"code": "D78000"
}
]
},
{
"b": "celebrate-freshness",
"n": "ADULT DOG ΚΟΤΟΠΟΥΛΟ, ΣΥΚΩΤΙ & ΓΛΥΚΟΠΑΤΑΤΑ ΣΕ ΖΕΛΕ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "170 g",
"code": "84502"
}
]
},
{
"b": "fisi",
"n": "CAT KITTEN ΚΟΤΟΠΟΥΛΟ ΜΕ ΓΑΛΑ ΠΑΤΕ",
"c": "wet",
"pet": "cat",
"shape": "can",
"v": [
{
"s": "400 g",
"code": "FS001"
}
]
},
{
"b": "fisi",
"n": "CAT STERILIZED ΚΟΤΟΠΟΥΛΟ ΜΕ ΓΑΛΟΠΟΥΛΑ ΣΕ ΣΑΛΤΣΑ",
"c": "wet",
"pet": "cat",
"shape": "can",
"v": [
{
"s": "400 g",
"code": "FS205"
}
]
},
{
"b": "fisi",
"n": "CAT STERILISED DUCK",
"c": "wet",
"pet": "cat",
"shape": "can",
"v": [
{
"s": "400 g",
"code": "FS011"
}
]
},
{
"b": "fisi",
"n": "DOG ADULT ΣΟΛΟΜΟΣ - ΚΟΛΟΚΥΘΑ ΠΑΤΕ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "400 g",
"code": "FS508"
}
]
},
{
"b": "churu",
"n": "CAT SKIN & COAT TUNA & SCALLOP",
"c": "treats",
"pet": "cat",
"shape": "pouch",
"v": [
{
"s": "56 g",
"code": "IN673"
}
]
},
{
"b": "churu",
"n": "CAT SKIN & COAT CHICKEN",
"c": "treats",
"pet": "cat",
"shape": "pouch",
"v": [
{
"s": "56 g",
"code": "IN672"
}
]
},
{
"b": "churu",
"n": "CAT BITES CHICKEN & TUNA & SALMON",
"c": "treats",
"pet": "cat",
"shape": "pouch",
"v": [
{
"s": "30 g",
"code": "IN723"
}
]
},
{
"b": "churu",
"n": "CAT BITES CHICKEN",
"c": "treats",
"pet": "cat",
"shape": "pouch",
"v": [
{
"s": "30 g",
"code": "IN724"
}
]
},
{
"b": "advance",
"n": "DIET DOG HYPOALLERGENIC",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "AD967263"
}
]
},
{
"b": "advance",
"n": "VET DOG GASTROENTERIC MM",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "400 g",
"code": "AD967596"
}
]
},
{
"b": "advance",
"n": "VET DOG HYPOALLERGENIC LAMB",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "400 g",
"code": "AD967602"
}
]
},
{
"b": "reflex-plus",
"n": "ADULT MINI SALMON",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Small 3 kg",
"code": "L10903"
}
]
},
{
"b": "ambrosia",
"n": "ADULT SENSITIVE FRESH TURKEY & RABBIT",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "AM25059"
},
{
"s": "12 kg",
"code": "AM25060"
}
]
},
{
"b": "ambrosia",
"n": "SENIOR LIGHT STERILISED TURKEY & SALMON",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "AM25016"
},
{
"s": "12 kg",
"code": "AM25017"
}
]
},
{
"b": "ambrosia",
"n": "ADULT CHICKEN & VEGIES",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "AM25048"
},
{
"s": "12 kg",
"code": "AM25049"
}
]
},
{
"b": "ambrosia",
"n": "ADULT CHICKEN & SALMON",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "AM25007"
},
{
"s": "12 kg",
"code": "AM25008"
}
]
},
{
"b": "ambrosia",
"n": "ADULT MINI CHICKEN & SALMON",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "AM25054"
},
{
"s": "6 kg",
"code": "AM25053"
}
]
},
{
"b": "ambrosia",
"n": "PUPPY REGULAR CHICKEN & FISH",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "2 kg",
"code": "AM25000"
},
{
"s": "6 kg",
"code": "AM25052"
}
]
},
{
"b": "ambrosia",
"n": "PUPPY CHICKEN & SALMON",
"c": "dry",
"pet": "dog",
"shape": "bag",
"v": [
{
"s": "Large 2 kg",
"code": "AM25055"
}
]
},
{
"b": "ambrosia",
"n": "GRAIN FREE CAT KITTEN FRESH TURKEY & CHICKEN",
"c": "dry",
"pet": "cat",
"shape": "bag",
"v": [
{
"s": "1,5 kg",
"code": "AM25065"
},
{
"s": "5 kg",
"code": "AM25066"
}
]
},
{
"b": "ambrosia",
"n": "GRAIN FREE CAT ADULT STERILIZED FRESH SALMON & CHICKEN",
"c": "dry",
"pet": "cat",
"shape": "bag",
"v": [
{
"s": "1,5 kg",
"code": "AM25067"
},
{
"s": "5 kg",
"code": "AM25068"
}
]
},
{
"b": "ambrosia",
"n": "GRAIN FREE STERILIZED CAT FRESH DUCK & TURKEY",
"c": "dry",
"pet": "cat",
"shape": "bag",
"v": [
{
"s": "1,5 kg",
"code": "AM25085"
},
{
"s": "5 kg",
"code": "AM25086"
}
]
},
{
"b": "euro-premium",
"n": "ΜΟΣΧΑΡΙ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "300 g",
"code": "0- 46521"
}
]
},
{
"b": "euro-premium",
"n": "ΑΡΝΙ",
"c": "wet",
"pet": "dog",
"shape": "can",
"v": [
{
"s": "300 g",
"code": "0- 46522"
}
]
},
{
"b": "glee-for-pets",
"n": "ΒΟΥΡΤΣΑ ΑΥΤΟΚΑΘΑΡΙΖΟΜΕΝΗ SLICKER",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "85008"
}
]
},
{
"b": "glee-for-pets",
"n": "ΓΑΝΤΙ ΔΙΠΛΗΣ ΟΨΗΣ ΓΚΡΙ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "85021"
}
]
},
{
"b": "glee-for-pets",
"n": "ΓΑΝΤΙ ΜΟΝΗΣ ΟΨΗΣ ΜΠΛΕ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "85022"
}
]
},
{
"b": "glee-for-pets",
"n": "COMB ΧΤΕΝΑ ΜΕΤΑΛΛΙΚΗ ΔΙΠΛΗΣ ΟΨΗΣ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "85009"
}
]
},
{
"b": "glee-for-pets",
"n": "DOG HOUSE OLYMPUS GREY L87XW72XH77,5CM",
"c": "beds",
"pet": "dog",
"shape": "box",
"v": [
{
"s": "Ενιαίο",
"code": "85101"
}
]
},
{
"b": "glee-for-pets",
"n": "JACKET BLUE SERPENS",
"c": "wear",
"pet": "dog",
"shape": "box",
"v": [
{
"s": "30 cm M",
"code": "85989"
},
{
"s": "35 cm L",
"code": "85990"
},
{
"s": "40 cm XL",
"code": "85991"
},
{
"s": "45 cm 2XL",
"code": "85992"
}
]
},
{
"b": "glee-for-pets",
"n": "ΜΠΟΥΦΑΝ ΜΠΛΕ",
"c": "wear",
"pet": "dog",
"shape": "box",
"v": [
{
"s": "30 cm S",
"code": "85269"
},
{
"s": "35 cm M",
"code": "85270"
},
{
"s": "40 cm L",
"code": "85271"
},
{
"s": "45 cm XL",
"code": "85272"
}
]
},
{
"b": "glee-for-pets",
"n": "ΤΣΑΝΤΑ MODERN ART",
"c": "beds",
"pet": "both",
"shape": "box",
"v": [
{
"s": "Ενιαίο",
"code": "89162"
}
]
},
{
"b": "glee-for-pets",
"n": "ΤΣΑΝΤΑ ΜΕΤΑΦΟΡΑΣ ALPHABET",
"c": "beds",
"pet": "both",
"shape": "box",
"v": [
{
"s": "L",
"code": "89187"
}
]
},
{
"b": "glee-for-pets",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ PANDA FLYING SQUEAKY",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "30 cm",
"code": "91064"
}
]
},
{
"b": "glee-for-pets",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ BUNNY LONG LEG SQUEAKY",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "37 cm",
"code": "91066"
}
]
},
{
"b": "glee-for-pets",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ LATEX DONAT",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "14 cm",
"code": "91118"
}
]
},
{
"b": "glee-for-pets",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ INTERACTIVE FUN BIRD",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "91141"
}
]
},
{
"b": "glee-for-pets",
"n": "ΚΡΕΒΑΤΙ GENEVA ΠΑΓΟΥ",
"c": "beds",
"pet": "both",
"shape": "box",
"v": [
{
"s": "Small 60 cm",
"code": "G87711"
},
{
"s": "Medium 70 cm",
"code": "G87717"
}
]
},
{
"b": "all-for-paws",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ LAMBSWOOL CUDDLE ROPE",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "AF3038"
}
]
},
{
"b": "all-for-paws",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ LAMBSWOOL PLUSH BONE 9\"",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "AF5418"
}
]
},
{
"b": "all-for-paws",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ LITTLE BUDDY HOTDOG WITH COLA",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "AF4232"
}
]
},
{
"b": "all-for-paws",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ OCTOPUS",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "AF4724"
}
]
},
{
"b": "all-for-paws",
"n": "ΠΑΙΧΝΙΔΙ ΓΑΤΑΣ INSTINCTS BIRD WAND",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "AF2018"
}
]
},
{
"b": "all-for-paws",
"n": "ΠΑΙΧΝΙΔΙ ΓΑΤΑΣ COMFORT TAILED MOUSE",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "AF2374"
}
]
},
{
"b": "all-for-paws",
"n": "ΠΑΙΧΝΙΔΙ ΓΑΤΑΣ LONG FLUFF WAND ΠΟΡΤΟΚΑΛΙ",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "AF2809"
}
]
},
{
"b": "all-for-paws",
"n": "ΠΑΙΧΝΙΔΙ ΓΑΤΑΣ FURRY BALL FLUFFY SPRING WITH FINGER RING ΚΟΚΚΙΝΟ",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "AF2824"
}
]
},
{
"b": "all-for-paws",
"n": "ΠΑΙΧΝΙΔΙ ΓΑΤΑΣ TACO MOUSE",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "Ενιαίο",
"code": "AF2834"
}
]
},
{
"b": "glee-for-pets",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ COW KNOTTED ROPE WITH COFFEE WOOD",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "33 cm",
"code": "91186"
}
]
},
{
"b": "fiboo",
"n": "SLOW FEEDER FIBOOWL MAT ΡΟΖ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "Medium 19 cm",
"code": "FB033010"
}
]
},
{
"b": "fiboo",
"n": "SLOW FEEDER FIBOOWL SPIKY ΚΙΤΡΙΝΟ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "19 cm",
"code": "FB035009"
}
]
},
{
"b": "fiboo",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ FRINGOO MINI ΚΙΤΡΙΝΟ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "12 cm",
"code": "FB054018"
}
]
},
{
"b": "fiboo",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ FRINGOO MINI ΡΟΖ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "12 cm",
"code": "FB054021"
}
]
},
{
"b": "fiboo",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ FRISBOO MINI ΠΟΡΤΟΚΑΛΙ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "17 cm",
"code": "FB055017"
}
]
},
{
"b": "fiboo",
"n": "ΠΑΙΧΝΙΔΙ ΣΚΥΛΟΥ FRISBOO MINI ΠΡΑΣΙΝΟ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "17 cm",
"code": "FB055019"
}
]
},
{
"b": "fiboo",
"n": "SLOW FEEDER FIBOOWL ΜΠΛΕ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "19 cm",
"code": "FB066007"
}
]
},
{
"b": "fiboo",
"n": "SLOW FEEDER FIBOOWL ΜΠΟΡΝΤΟ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "19 cm",
"code": "FB066029"
}
]
},
{
"b": "fiboo",
"n": "FIBOONE DENTAL TOY ΡΟΖ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "19 cm",
"code": "FB024021"
}
]
},
{
"b": "fiboo",
"n": "FIBOONE DENTAL TOY ΠΡΑΣΙΝΟ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "19 cm",
"code": "FB024019"
}
]
},
{
"b": "fiboo",
"n": "FIBOONE DENTAL TOY ΠΟΡΤΟΚΑΛΙ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "19 cm",
"code": "FB024017"
}
]
},
{
"b": "fiboo",
"n": "FIBOONE DENTAL TOY ΚΙΤΡΙΝΟ",
"c": "toys",
"pet": "dog",
"shape": "ball",
"v": [
{
"s": "19 cm",
"code": "FB024018"
}
]
},
{
"b": "glee-for-pets",
"n": "ΠΕΡΙΛΑΙΜΙΟ ΓΑΤΑΣ BLUE FISHES",
"c": "walk",
"pet": "cat",
"shape": "leash",
"v": [
{
"s": "Ενιαίο",
"code": "89206"
}
]
},
{
"b": "glee-for-pets",
"n": "ΠΕΡΙΛΑΙΜΙΟ ΓΑΤΑΣ ICE CREAM",
"c": "walk",
"pet": "cat",
"shape": "leash",
"v": [
{
"s": "Ενιαίο",
"code": "89214"
}
]
},
{
"b": "glee-for-pets",
"n": "ΣΑΜΑΡΑΚΙ + ΟΔΗΓΟΣ ΓΑΤΑΣ BLACK FISHBONE",
"c": "walk",
"pet": "cat",
"shape": "leash",
"v": [
{
"s": "S",
"code": "89221"
}
]
},
{
"b": "glee-for-pets",
"n": "ΣΑΜΑΡΑΚΙ + ΟΔΗΓΟΣ GREEN FISHES",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "M",
"code": "89223"
}
]
},
{
"b": "savic",
"n": "LITTER SCOOP FINN",
"c": "litter",
"pet": "cat",
"shape": "tray",
"v": [
{
"s": "Ενιαίο",
"code": ""
}
]
},
{
"b": "perfect-care",
"n": "ΑΜΜΟΣ ΓΑΤΑΣ SENSITIVE WHITE BENTONITE",
"c": "litter",
"pet": "cat",
"shape": "tray",
"v": [
{
"s": "5 L",
"code": "90862"
},
{
"s": "10 L",
"code": ""
}
]
},
{
"b": "perfect-care",
"n": "PET PADS CARBON 60 X 90",
"c": "litter",
"pet": "dog",
"shape": "tray",
"v": [
{
"s": "Ενιαίο",
"code": "90771"
}
]
},
{
"b": "perfect-care",
"n": "ΑΜΜΟΣ ΓΑΤΑΣ ACTIVE CARBON",
"c": "litter",
"pet": "cat",
"shape": "tray",
"v": [
{
"s": "5 L",
"code": ""
},
{
"s": "10 L",
"code": "90860"
}
]
},
{
"b": "perfect-care",
"n": "ΚΑΛΛΥΝΤΙΚΗ ΛΟΣΙΟΝ ΠΡΟΣΤΑΣΙΑΣ ΣΙΤΡΟΝΕΛΛΑ",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "500 ml",
"code": "0 179"
}
]
},
{
"b": "bio-petactive",
"n": "EAR CLEANER FOR DOGS & CATS",
"c": "health",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "100 ml",
"code": "BP329"
}
]
},
{
"b": "glee-for-pets",
"n": "ΣΑΜΑΡΑΚΙ ΙΜΑΝΤΑΣ MULTICOLOR",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XS 20-35 cm",
"code": "89325"
},
{
"s": "S 25-45 cm",
"code": "89331"
},
{
"s": "M 35-60 cm",
"code": "89337"
}
]
},
{
"b": "glee-for-pets",
"n": "ΣΑΜΑΡΑΚΙ ΙΜΑΝΤΑΣ FLOWERS",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XS 20-35 cm",
"code": "89327"
},
{
"s": "S 25-45 cm",
"code": "89334"
},
{
"s": "M 35-60 cm",
"code": "89340"
}
]
},
{
"b": "glee-for-pets",
"n": "ΣΑΜΑΡΑΚΙ NEOPRENE BLUE",
"c": "walk",
"pet": "dog",
"shape": "leash",
"v": [
{
"s": "XS 25-36 cm",
"code": "88767"
},
{
"s": "S 41-51 cm",
"code": "88768"
},
{
"s": "M 56-66 cm",
"code": "88769"
},
{
"s": "L 71-81 cm",
"code": "88770"
}
]
},
{
"b": "glee-for-pets",
"n": "ΟΝΥΧΟΔΡΟΜΙΟ FREYA ΑΝΟΙΧΤΟ ΓΚΡΙ",
"c": "toys",
"pet": "cat",
"shape": "ball",
"v": [
{
"s": "29 Χ 29 Χ 47 cm",
"code": "87736"
}
]
},
{
"b": "pawise",
"n": "ΜΠΟΛ ΑΡΓΟΥ ΤΑΙΣΜΑΤΟΣ FLOWER",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "Small",
"code": "PW 11091"
},
{
"s": "Large",
"code": "PW11092"
}
]
},
{
"b": "pawise",
"n": "ΜΠΟΥΚΑΛΙ ΝΕΡΟΥ ΤΑΞΙΔΙΟΥ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "500 ml",
"code": "PW11201"
},
{
"s": "750 ml",
"code": "PW11202"
}
]
},
{
"b": "pawise",
"n": "ΜΠΙΜΠΕΡΟ ΜΕ ΒΟΥΡΤΣΑ",
"c": "bowls",
"pet": "both",
"shape": "bowl",
"v": [
{
"s": "Ενιαίο",
"code": "PW11555"
}
]
},
{
"b": "perfect-care",
"n": "POOP BAGS MULTICOLOR",
"c": "care",
"pet": "both",
"shape": "bottle",
"v": [
{
"s": "Ενιαίο",
"code": "90817"
}
]
}
];
