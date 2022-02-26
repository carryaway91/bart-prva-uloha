# bart-prva-druha-uloha

## Popis projektu
Projekt testuje to, či sú dve telefónne čísla rovnaké. Porovnáva sa číslo, ktoré zadá user s číslom v databáze.

## Inštalácia
Do terminálu napíš príkaz:
```bash
npm install
```
čo nainštaluje potrebné dependencies.
Na sputenie testu zadaj príkaz:
```bash
npm test
```

## Zmeny v projekte
  1. Pridané testy na kontrolovanie false prípadov
  2. Odstránená premenná STATE_CODES
  3. Refaktorovanie kódu a pridané komentáre na vysvetlenie
  4. Odstránena funkcia "include" -> ušiel mi fakt, že číslo predvoľby sa môže nechádzať aj v strede či na konci čisla. 
  5. Odstránený node_modules
  6. Pridal som pole dvojíc čisel ako si navrhol a posielam ich do expectu.
  
## Poznámka
Pridal som do porovnávania aj tebou stanovené čisla. Teraz fungujú.
Čo sa týka toho poľa rôznych čiselných dvojíc, neviem či si to myslel takto, preto som ponechal aj staré riešenie. Test s dvojicami čísel z poľa
je hneď prvý s názvom "Phone number doubles are equal".

## Použité technológie
typescript, jest
