# Φτιάχνει το catalog-data.js από το CSV του καταλόγου (Google Sheets → Λήψη → CSV).
# Χρήση:  python3 catalog_from_csv.py "/path/καταλογος site - Φύλλο1.csv"
import csv, json, re, sys, unicodedata

SRC = sys.argv[1]
OUT = '../catalog-data.js'

# λέξη-κλειδί στην αρχή του ονόματος → (slug μάρκας, όνομα που φαίνεται)
BRANDS = [
    (r'NATUREA|WETLANDS|DUCK SEMI MOIST', 'naturea', 'Naturea'),
    (r'ETHELIA', 'ethelia', 'Ethelia'),
    (r'PACIFIC STREAM|HIGH PRAIRIE|SIERRA MOUNTAIN|SOUTHWEST CANYON|ΒΙΣΟΝΑΣ', 'taste-of-the-wild', 'Taste of the Wild'),
    (r'DOCA', 'doca', 'Doca'),
    (r'HD ', 'happy-dog', 'Happy Dog'),
    (r'HC ', 'happy-cat', 'Happy Cat'),
    (r'BRIT', 'brit', 'Brit'),
    (r'LOVIES', 'lovies', 'Lovies'),
    (r'BRISK', 'brisk', 'Brisk'),
    (r'MIGLIOR', 'miglior', 'Miglior'),
    (r'PRE VITAL', 'prevital', 'PreVital'),
    (r'PETFARM', 'petfarm', 'Pet Farm'),
    (r'FLEXI|CAVO', 'flexi', 'Flexi'),
    (r'TRIXIE|ΤΡΙΧΙΕ|ΟΔΗΓΟΣ TRIXIE', 'trixie', 'Trixie'),
    (r'H & B|H & D', 'harper-and-bone', 'Harper and Bone'),
    (r'FELIFOR', 'felifor', 'Felifor'),
    (r'HAPKI', 'hapki', 'Hapki'),
    (r'FLAMINGO', 'flamingo', 'Flamingo'),
    (r'ZEZE', 'zeze', 'Zeze'),
    (r'BAFFS', 'baffs-naturals', 'Baffs Naturals'),
    (r'YOW UP', 'yowup', 'YowUp!'),
    (r'CELEBRATE', 'celebrate-freshness', 'Celebrate Freshness'),
    (r'THE BARKERS', 'the-barkers', 'The Barkers'),
    (r'HAPPY YAK', 'happy-yak', 'Happy Yak'),
    (r'RAFI', 'rafi', 'Rafi'),
    (r'PIPER', 'piper', 'Piper'),
    (r'FISI', 'fisi', 'Fisi'),
    (r'CHURU', 'churu', 'Churu'),
    (r'ADVANCE', 'advance', 'Advance'),
    (r'REFLEX', 'reflex-plus', 'Reflex Plus'),
    (r'AMBROSIA', 'ambrosia', 'Ambrosia'),
    (r'EURO PREMIUM', 'euro-premium', 'Euro Premium'),
    (r'GLEE', 'glee-for-pets', 'Glee for Pets'),
    (r'AFP', 'all-for-paws', 'All for Paws'),
    (r'FB |FIBOO', 'fiboo', 'Fiboo'),
    (r'SAVIC', 'savic', 'Savic'),
    (r'PERFECT CARE|ΑΜΜΟΣ ΓΑΤΑΣ PERFECT CARE', 'perfect-care', 'Perfect Care'),
    (r'BIO OTIC', 'bio-petactive', 'Bio PetActive'),
    (r'PAWISE', 'pawise', 'Pawise'),
]
# Κωδικοί προμηθευτή που δείχνουν μάρκα όταν το όνομα δεν τη γράφει
CODE_BRANDS = [(r'^31-\d', 'waudog', 'Waudog'), (r'^35-0', 'earth-rated', 'Earth Rated')]
# Αφαιρούνται από το όνομα (ο προμηθευτής τα γράφει μπροστά)
STRIP_PREFIX = r'^(?:NATUREA |DOCA |HD |HC |BRIT |LOVIES |PETFARM |H & [BD] |FB |AFP |GLEE |PAWISE |RAFI |FISI |CHURU |AMBROSIA |ADVANCE |REFLEX PLUS |EURO PREMIUM |CELEBRATE FRESHNESS |CELEBRATE |HAPPY YAK |YOW UP |BAFFS NATURALS |THE BARKERS |FLAMINGO |ZEZE |SAVIC |PERFECT CARE |BIO OTIC |HAPKI |PRE VITAL |MIGLIOR |BRISK |FELIFOR |TRIXIE |ΤΡΙΧΙΕ |WD )+'

CATS = [  # (κατηγορία, regex) με σειρά προτεραιότητας
    ('health', r'SALMON OIL|ΛΑΔΙ ΣΟΛΟΜΟΥ|ΛΑΔΙ JOJOBA|EYE CARE|EAR CLEANER|ΑΝΤΙΠΑΡΑΣΙΤΙΚΟ|L\.CASEI|SKIN & HAIR'),
    ('walk',   r'ΟΔΗΓΟΣ|LEASH|ΠΕΡΙΛΑΙΜΙΟ|COLLAR|ΣΑΜΑΡ|HARNESS|FLEXI|CAVO|MULTI BOX|ΘΗΚΕΣ ΛΙΧΟΥΔΙΩΝ'),
    ('bowls',  r'ΠΙΑΤΟ|ΠΙΑΤΑ|ΜΠΟΛ|BOWL|ΜΠΩΛ|FEEDER|ΔΟΧΕΙΟ|ΜΠΟΥΚΑΛΙ|ΜΠΙΜΠΕΡΟ'),
    ('beds',   r'ΚΡΕΒΑΤΙ|HOUSE|ΤΣΑΝΤΑ|ΧΑΛΑΚΙ'),
    ('wear',   r'JACKET|ΜΠΟΥΦΑΝ|ΑΔΙΑΒΡΟΧΟ|RAINCOAT'),
    ('litter', r'ΑΜΜΟΣ|ΛΕΚΑΝΗ|SCOOP|ΤΟΥΑΛΕΤΑ|PADS|ΠΑΝΕΣ'),
    ('toys',   r'ΠΑΙΧΝ|TOY|ΛΟΥΤΡΙΝΟ|PLAYING ROPE|FRINGOO|FRISBOO|SCRATCHING|ΟΝΥΧΟΔΡΟΜΙΟ|ΚΛΙΚΕΡ|BALL LATEX'),
    ('care',   r'SHAMPOO|PERFUME|ΒΟΥΡΤΣΑ|ΧΤΕΝΑ|COMB|ΓΑΝΤΙ|ΟΔΟΝΤΟ|ΝΥΧΟΚΟΠΤ|ΤΣΙΜΠΙΔ|BAGS|ΣΑΚΟΥΛ|WIPES|LINT|ΛΟΣΙΟΝ|ΚΡΕΜΑ|GEL |ΟΔΟΝΤΙΚΗΣ'),
    ('wet',    r'ΚΟΝΣΕΡΒΑ|ΠΑΤΕ|POUCH|ΖΕΛΕ|ΣΑΛΤΣΑ|ΣΑΛΑΜΙ|LOVIES|EURO PREMIUM|DINNER|FISI|RAFI|VET DOG .*400GR'),
    ('treats', r'SNACK|ΣΝΑΚ|ΛΙΧΟΥΔΙ|TREAT|STICK|(?<![Α-Ω])ΣΤΙΚ|BITES|CUBES|BISCUIT|ΜΠΙΣΚΟΤ|ΑΥΤΙΑ|SUSHI|FILLET|ROLLS|BONE|ΚΟΚΚΑΛ|ΜΠΟΥΚΙΕΣ|ΠΟΥΡΑΚΙ|ΜΠΑΡΕΣ|TRACHEA|SINEW|STRIPS|BURGER|NECK|YOGURT|CHEESE|COIN|SANDWICH|BREAST|NUGGETS|RICE BALL|DONUT|STAR|TRIPE|BARS|CHURU|PILLOWS|CRISPY|SEMI MOIST|COLLAGEN'),
    ('dry',    r'\d+(?:[.,]\d+)?\s*KG|ADULT|PUPPY|KITTEN|SENIOR|STERILI|CROQ|MINKAS|NATUR|DIET|VET'),
    ('care',   r'.'),
]
CAT_NAMES = {'dry': 'Ξηρά τροφή', 'wet': 'Υγρή τροφή', 'treats': 'Λιχουδιές & μασητικά', 'health': 'Συμπληρώματα & υγεία',
             'toys': 'Παιχνίδια', 'walk': 'Βόλτα: οδηγοί & περιλαίμια', 'bowls': 'Μπολ & ταΐστρες',
             'beds': 'Κρεβάτια & μεταφορά', 'wear': 'Ρουχαλάκια', 'litter': 'Άμμος & τουαλέτα', 'care': 'Περιποίηση & υγιεινή'}
CAT_SHAPE = {'dry': 'bag', 'wet': 'can', 'treats': 'pouch', 'health': 'bottle', 'toys': 'ball', 'walk': 'leash',
             'bowls': 'bowl', 'beds': 'box', 'wear': 'box', 'litter': 'tray', 'care': 'bottle'}

CAT_PET = r'CAT|ΓΑΤ|MINKAS|FELIFOR|ΑΜΜΟΣ|SCRATCHING|ΛΕΚΑΝΗ|ΟΝΥΧΟΔΡΟΜΙΟ|CHURU|PRE VITAL|FISI CAT|RAFI CAT|SCOOP'
BOTH_PET = r'ΣΚΥΛΟΥ\s*/\s*ΓΑΤΑΣ|CATS & DOG|DOGS & CATS|ΣΚΥΛΟΥ/ ΓΑΤΑΣ'
DOG_PET = r'DOG|ΣΚΥΛ|PUPPY|CANINE|LEASH|ΟΔΗΓΟΣ|ΣΑΜΑΡΙ|HARNESS|FLEXI|ΠΕΡΙΛΑΙΜΙΟ|COLLAR|JACKET|ΜΠΟΥΦΑΝ|RAINCOAT|ΑΔΙΑΒΡΟΧΟ|PADS'

SIZE = r'(?:ΕΩΣ \d+\s*KG|\d+(?:[.,]\d+)?(?:\s*[*XΧ]\s*\d+(?:[.,]\d+)?)+\s*CM|\d+(?:[.,]\d+)?\s*(?:KG|ΚΙΛΑ|GR|G|ML|MM|L|Λ|CM|M)\b(?:\s*[-–]\s*\d+(?:[.,]\d+)?\s*CM)?|\d+(?:[.,]\d+)?\s*-\s*\d+(?:[.,]\d+)?\s*CM|\d+X\d+(?:X\d+)?(?:\s*CM)?|\d+\s*[*Χ]\s*\d+(?:\s*[*Χ]\s*\d+)?\s*CM|EXTRA LARGE|EXTRA LONN?G|SMALL|MEDIUM|LARGE|2XL|XS-S|S-M|S-Μ|M-L|XS|XL|S|M|L)'

def up(s):
    s = unicodedata.normalize('NFD', s.upper())
    return unicodedata.normalize('NFC', ''.join(c for c in s if unicodedata.category(c) != 'Mn'))

FIX = {'ΠΑΙΧΝΔΙ': 'ΠΑΙΧΝΙΔΙ', 'HYPOALLERGRNIC': 'HYPOALLERGENIC', 'DESING': 'DESIGN', 'LONNG': 'LONG', 'NYLN ': 'NYLON ',
       'FDOG': 'DOG', 'INSTICTS': 'INSTINCTS', 'COMFORD': 'COMFORT', 'SQUEKY': 'SQUEAKY', 'ΠΡΑΣΙΝ0': 'ΠΡΑΣΙΝΟ',
       ' RAPPED': ' WRAPPED', 'KOKKINO': 'ΚΟΚΚΙΝΟ', '20MM,183CM': '20MM 183CM', 'STICS': 'STICKS', 'ΟΝΟΙΧΟΔΡΟΜΙΟ': 'ΟΝΥΧΟΔΡΟΜΙΟ', 'LUNEY': 'LOONEY', 'RE?LL': 'REFILL',
       'SNAC ': 'SNACK ', '4OGR': '40GR', 'BETONITE': 'BENTONITE', 'MULTY': 'MULTI', 'ΣΚΥΛ. ': 'ΣΚΥΛΟΤΡΟΦΗ ', 'H & D': 'H & B',
       'ΣΟΛΩΜΟ ': 'ΣΟΛΟΜΟ ', 'ΣΟΛΩΜΟΥ': 'ΣΟΛΟΜΟΥ', 'ΚΟΤΟΠ. ΣΥΚΩΤΙ ΓΛΥΚΟΠ.': 'ΚΟΤΟΠΟΥΛΟ, ΣΥΚΩΤΙ & ΓΛΥΚΟΠΑΤΑΤΑ', 'ΑΥΤΟΚΑΘΡ.': 'ΑΥΤΟΚΑΘΑΡΙΖΟΜΕΝΗ ',
       'ΔΙΑΦ.ΧΡΩΜΑΤΑ': 'ΔΙΑΦΟΡΑ ΧΡΩΜΑΤΑ', 'ΙΜΑΝΤΑΣ Α': 'ΙΜΑΝΤΑΣ', 'ΚΟΤΟΠΟΥΛΟ.-': 'ΚΟΤΟΠΟΥΛΟ - ', 'BEEFS': 'BEEF', 'ΒΙΣΟΝΑΣ Κ ': 'ΒΙΣΟΝΑΣ & ',
       'FLEXI NEON': 'FLEXI ΑΝΑΔΙΠΛΟΥΜΕΝΟΣ ΟΔΗΓΟΣ NEON', 'FLEXI BLACK 5M': 'FLEXI ΑΝΑΔΙΠΛΟΥΜΕΝΟΣ ΟΔΗΓΟΣ BLACK 5M',
       'FLEXI DESIGN': 'FLEXI ΑΝΑΔΙΠΛΟΥΜΕΝΟΣ ΟΔΗΓΟΣ DESIGN'}

def clean(name):
    n = up(name)
    for a, b in FIX.items(): n = n.replace(a, b)
    n = re.sub(r'([A-ZΑ-Ω])(\d+(?:[.,]\d+)?\s*KG)\b', r'\1 \2', n)
    n = re.sub(r'(\d\s*MM)\s*\*\s*', r'\1 ', n)
    n = re.sub(r'\bW\s*(?=\d)', '', n)
    n = re.sub(r'LOT\s*NO\s*:?\s*\S+', '', n)
    n = re.sub(r'\(?\s*\d+\s*(?:Τ\s*Μ\s*Χ|TMX|PCS)\.?\s*\)?', ' ', n)
    n = n.replace('()', '')
    n = re.sub(r'\d+\s*\+\s*\d+\s*ΔΩΡΟ', '', n)
    n = re.sub(r'\s*/\s*', '/', n).replace('\\', '/')
    n = re.sub(r'\s+', ' ', n).strip(' ,.-')
    # κωδικοί προμηθευτή στην αρχή (π.χ. "50797 WD", "TM122153", "001-014260")
    while True:
        m = re.match(r'^(?:[A-Z]{0,3}\d[\w\-]*|\d+[A-Z]*)\s+(?=\S)', n)
        if not m or re.match(SIZE + r'\b', n): break
        n = n[m.end():]
    return n

rows, seen = [], set()
with open(SRC, newline='', encoding='utf-8') as f:
    for r in csv.reader(f):
        r = (r + ['', '', ''])[:3]
        a, b, c = (x.strip() for x in r)
        if b == 'ΕΙΔΟΣ': continue
        if b: code, name = a, b
        elif re.search(r'[A-Za-zΑ-Ωα-ω]{3}', a): code, name = c, a
        else: continue
        if 'DISPLAY WITH' in name.upper(): continue          # σταντ καταστήματος, όχι προϊόν
        key = up(re.sub(r'\s+', ' ', name))
        if key in seen: continue
        seen.add(key)
        pack = c if b else ''
        rows.append((code, name, pack))

def brand_of(code, n):
    for rx, slug, label in BRANDS:
        if re.match(r'(?:\S+\s+)?(?:' + rx + r')', n) and re.search(rx, n): return slug, label
    for rx, slug, label in CODE_BRANDS:
        if re.match(rx, code): return slug, label
    return '', ''

def cat_of(n):
    for k, rx in CATS:
        if re.search(rx, n): return k

def pet_of(n, cat):
    if re.search(BOTH_PET, n): return 'both'
    if re.search(CAT_PET, n): return 'cat'
    if re.search(DOG_PET, n): return 'dog'
    return 'both' if cat in ('bowls', 'care', 'health', 'beds') else 'dog'

products, index = [], {}
for code, raw, pack in rows:
    n = clean(raw)
    slug, label = brand_of(code, n)
    cat = cat_of(n)
    pet = pet_of(n, cat)
    display = re.sub(STRIP_PREFIX, '', n).strip()
    for w in ('ETHELIA ', 'PIPER ', 'PERFECT CARE ', 'TRIXIE ', 'FLEXI '):
        if w in display and display.replace(w, '').strip(): display = display.replace(w, '', 1).strip()
    sizes = [s.strip() for s in re.findall(r'(?<![\w.,\'])' + SIZE + r'(?![\w.])', display)]
    base = re.sub(r'(?<![\w.,\'])' + SIZE + r'(?![\w.])', '', display)
    base = base.replace('()', '')
    base = re.sub(r'\s/\s?|/\s', ' ', base)
    base = re.sub(r'\s+,', ',', base); base = re.sub(r',\s*,', ',', base)
    base = re.sub(r'\s+', ' ', base).strip(' ,-/')
    variant = ' '.join(sizes) or ''
    pk = up(pack).replace(' ', '')
    if not variant and re.fullmatch(r'\d+(?:[.,]\d+)?', pk) and float(pk.replace(',', '.')) >= 10: variant = pk + ' G'
    elif not variant and re.fullmatch(r'\d+(?:[.,]\d+)?(?:KG|GR|G|ML)', pk): variant = pk
    k = (slug, base, cat)
    if k not in index:
        index[k] = len(products)
        products.append({'b': slug, 'n': base or display, 'c': cat, 'pet': pet, 'shape': CAT_SHAPE[cat], 'v': []})
    p = products[index[k]]
    if p['pet'] != pet: p['pet'] = 'both'
    UNIT = {'KG': 'kg', 'ΚΙΛΑ': 'kg', 'GR': 'g', 'G': 'g', 'ML': 'ml', 'MM': 'mm', 'CM': 'cm', 'L': 'L', 'Λ': 'L', 'M': 'm'}
    variant = re.sub(r'(\d)\s*(KG|ΚΙΛΑ|GR|ML|MM|CM|G|L|Λ|M)\b', lambda m: m.group(1) + ' ' + UNIT[m.group(2)], variant)
    variant = variant.replace('ΕΩΣ', 'έως').replace('EXTRA LARGE', 'XL').replace('EXTRA LONG', 'Extra long')
    variant = re.sub(r'\b(SMALL|MEDIUM|LARGE)\b', lambda m: m.group(1).title(), variant)
    s = variant or 'Ενιαίο'
    if any(re.sub(r'\s|CM', '', x['s']) == re.sub(r'\s|CM', '', s) for x in p['v']):
        if s == 'Ενιαίο' or not code: continue
        s = f'{s} · κωδ. {code}'
        for x in p['v']:
            if 'κωδ.' not in x['s'] and x['code']: x['s'] += f" · κωδ. {x['code']}"
    p['v'].append({'s': s, 'code': code})

brands = {}
for _, slug, label in BRANDS + CODE_BRANDS: brands.setdefault(slug, label)
used = {p['b'] for p in products}
out = ('/* Φτιάχνεται αυτόματα από το source/catalog_from_csv.py. Μην το αλλάζετε με το χέρι. */\n'
       'const BRAND_NAMES=' + json.dumps({k: v for k, v in brands.items() if k in used}, ensure_ascii=False) + ';\n'
       'const CATS=' + json.dumps({k: v for k, v in CAT_NAMES.items() if any(p['c'] == k for p in products)}, ensure_ascii=False) + ';\n'
       'const PRODUCTS=' + json.dumps(products, ensure_ascii=False, indent=0) + ';\n')
open(OUT, 'w', encoding='utf-8').write(out)
print(len(rows), 'γραμμές →', len(products), 'προϊόντα,', len(used), 'μάρκες')
