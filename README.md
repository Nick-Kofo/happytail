# Happy Tail – Natural Pet Shop Σέρρες

Website: https://nick-kofo.github.io/happytail/
Repo: https://github.com/Nick-Kofo/happytail

## Τι υπάρχει εδώ

| Αρχείο / φάκελος | Τι είναι |
|---|---|
| `index.html` | **Το έτοιμο site.** Αυτό ανεβαίνει στο GitHub. Όλες οι εικόνες και τα βίντεο είναι μέσα του, δεν χρειάζεται τίποτε άλλο. |
| `source/template.html` | Ο κώδικας της σελίδας (χωρίς τις εικόνες). Εδώ γίνονται οι αλλαγές σε κείμενα, άρθρα, προϊόντα. |
| `source/build.py` | Φτιάχνει το `index.html` από το `template.html` + τα assets. |
| `source/assets/` | Λογότυπο, πατούσες, φωτογραφίες καταστήματος. |
| `source/video/` | Βίντεο golden retriever (intro, idle) και φωτογραφίες-καρέ για κινητά. |
| `source/backups/` | Παλαιότερες εκδόσεις της σελίδας. |
| `originals/` | Τα αρχικά αρχεία (λογότυπο, φωτογραφίες, αρχικό βίντεο). |

## Πώς κάνω αλλαγή

1. Αλλάζεις το `source/template.html` (π.χ. κείμενα, ωράριο, προϊόντα στο `PRODUCTS`, άρθρα στο «Βιβλίο φροντίδας»).
2. Από τον φάκελο `source` τρέχεις:
   ```
   python3 build.py
   ```
3. Ανοίγεις το `index.html` στον browser για έλεγχο.
4. Ανεβάζεις το `index.html` στο GitHub (Add file → Upload files → Commit). Σε 1–2 λεπτά είναι online.

## Εκκρεμότητες

- Λογότυπα μαρκών (Harper and Bone, Baffs Naturals, Happy Dog, Happy Cat, The Dog Epicurean, Flexi, Earth Rated)
- Ωράριο καταστήματος
- Έλεγχος προϊόντων & άρθρων από τη Μαγδαληνή
- Domain: προτεινόμενο `happytailpetshop.gr` (ήταν ελεύθερο στις 30/9/2026)
- Βίντεο σε μεγαλύτερη ανάλυση / με κλείσιμο ματιού (προαιρετικά)
