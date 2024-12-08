export const uhlikoveSystemy = [
  "Systém RLD 08", "Systém RLD 08 Biely", "Systém RLD 09", "Systém RLD 10", "Systém RLD 11", "Systém RLD 12", "Systém RLD 13", "Systém RLD 14", "Systém RLD 16", "Systém RLD 17", "Systém RLD 18", "Systém RLD 19", "Systém RLD 20", "Systém RLD 21", "Systém RLD 22", "Systém RLD 23", "Systém RLD 24", "Systém RLD 25", "Systém RLD 26", "Systém RLD 27", "Systém RLD 28", "Systém RLD 29", "Rebrik R1"]

export const nerezSystemy = ["Systém S8", "Systém S9", "Systém S11", "Systém S12", "Systém S13", "Systém S15", "Systém S17", "Systém S18"]

export const patinaSystemy = ["Patina HRDZA", "Patina ZELENÁ", "Patina BRONZ", "Patina BRONZ P5"]

export const skloSystemy = ["Systém G1", "Systém G2", "Systém G3"]

export const miniSystemy = ["Mini 1", "Mini 2", "Mini 3", "Mini 4", "Mini 5", "Mini 6"]

export const bypassSystemy = ["Systém BYPASS"]

export const doplnky = ["Madlo BARNDOOR", "Madlo 6 okrúhle čierne", "Madlo 7 okrúhle nerezové", "Madlo 8 čierne", "Madlo 9 nerezové", "Madlo 10 čierne", "Madlo 11 čierne", "Madlo 12 čierne", "Madlo 13 čierne", "Madlo 14 drevo", "Madlo 15 čierne", "Madlo 16 nerez", "Madlo 17 čierne", "Madlo 18 čierne", "Madlo 20 čierne", "Madlo 21 čierne", "Spodné vedenie dverí 30", "Spodné vedenie dverí 31", "Spodné vedenie dverí 32", "Zámok posuvných dverí 36", "Zámok posuvných dverí 35", "Spomaľ. a zaisťovací mechanizmus", "Pánt čierny P1"]

export default function getMergedArray() {
  return [
    "Systém, o ktorý máte záujem",
    ...uhlikoveSystemy,
    ...nerezSystemy,
    ...patinaSystemy,
    ...skloSystemy,
    ...miniSystemy,
    ...bypassSystemy,
    ...doplnky
  ]
}