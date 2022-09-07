import MitsuImage from "../images/pumps/mitsubishi_zubadan/mitsubishi_zubadan.png";
import EcoInverterImage from "../images/pumps/mistubishi_ecoinverter/eco-inverter-cylinder.png";
import { PanasonicTCap } from "../images/constants";

export const Products = [
  {
    id: 0,
    // Cena z montażem
    insprice: "47 500",
    //Cena katalogowa
    catprice: "0000",
    //producent
    producent: "Mitsubishi",
    //model
    models: "Zubadan",
    //numer modelu, seria
    pn: "PUD-SHWM60VAA",
    //moc
    power: "6 ",
    //Roczne zużycie energii [kWh] dla temperatury 55°C
    yearpowusage: "3631.00",
    //rodzaj split, monoblok
    type: "Split",
    //Sprężarka
    compressor: "producent",
    //Sprężarka włączenia
    compressorlife: "compressorlife",
    //Gwarancja
    guar: "Producent | 5 lat",
    //Napięcie zasilające V | faza | Hz
    phases: "230 | 1 | 50",
    //czynnik
    factor: "R32",
    //maksymalna temepreatura zasilania (C)
    makstemp: "60",
    //klasy efektywności 35/55 stopni zasilania
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    //moc nominalna 35
    nominal35: "6",
    //moc nominalna 55
    nominal55: "6",
    // moc przy -10 i zasilaniu wody 35stopni
    maksmin10w35: "8",
    // moc przy -15 i zasilaniu wody 35stopni
    makmin15w35: "7,3",
    //zakres pracy grzania, temperatury zewnętrzne
    heatingrange: "-28 - 24",
    //zakres pracy grzania wody użytkowej temp. zewnętrzne
    heatcwurange: "-28 - 35",
    //zakres chłodzenia
    coolrange: "----",
    //moc chłodzenia
    coolpow: "----",
    //wymiary
    sizemm: "1020x1050x480",
    //waga
    weight: "102",
    //głośność
    db: "55",
    // Przewód zasiljący
    powercord: "3 x 2,5",
    //Bezpiecznik A (C)
    safety: "20",

    //Przyłącza chłodnicze (ciecz gaz) cale "
    coolconnect: "1/4-1/2",
    //Maksymalna długość instalacji (m)
    maxinstlength: "30",
    //Maksymalna różnica poziomów (m)
    maxheigtdist: "30",
    //ilość czynnika chłodzącego (kg)
    coolantamount: "1,4",
    //Ekwiwalent CO2 (kg)
    coeqwi: "0,945",
    //Maksymalna ilość czynnika chłodzącego (kg)
    maxcoeqw: "1,7",
    //Maksymalny ekwiwalent co2 (ton)
    maxeqwco2: "1,148",

    //zdjęcie pompy
    image: MitsuImage,
    //karta doboru
    matcard: "--matching card---",
    //katalog produktowy
    catalog:
      "<https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf>",
  },
  {
    id: 1,
    producent: "Mitsubishi",
    models: "Zubadan",
    pn: "PUD-SHWM80VAA",
    power: "8",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "49 300",
    catprice: "0000",
    yearpowusage: "4793.00",
    compressor: "producent",
    compressorlife: "compressorlife",

    phases: "230 | 1 | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "8",
    nominal55: "8",
    maksmin10w35: "9,7",
    makmin15w35: "8,8",
    heatingrange: "-28 - 24",
    heatcwurange: "-28 - 35",

    coolrange: "----",
    coolpow: "----",
    sizemm: "1020x1050x480",
    weight: "102",
    db: "56",

    powercord: "3 x 2,5",
    safety: "25",

    coolconnect: "1/4-1/2",
    maxinstlength: "30",
    maxheigtdist: "30",
    coolantamount: "1,4",
    coeqwi: "0,945",
    maxcoeqw: "1,7",
    maxeqwco2: "1,148",
    image: MitsuImage,
    matcard: "--matching card---",
    catalog:
      "https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf",
  },

  {
    id: 2,
    producent: "Mitsubishi",
    models: "Zubadan",
    pn: "PUD-SHWM80YAA",
    power: "8",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "49 500",
    catprice: "0000",
    yearpowusage: "4832.00",
    compressor: "producent",
    compressorlife: "compressorlife",

    phases: "400 | 3 + N | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "8",
    nominal55: "8",
    maksmin10w35: "9,7",
    makmin15w35: "8,8",
    heatingrange: "-28 - 24",
    heatcwurange: "-28 - 35",

    coolrange: "----",
    coolpow: "----",
    sizemm: "1020x1050x480",
    weight: "115",
    db: "56",

    powercord: "5 x 1,5",
    safety: "16",

    coolconnect: "1/4-1/2",
    maxinstlength: "30",
    maxheigtdist: "30",
    coolantamount: "1,4",
    coeqwi: "0,945",
    maxcoeqw: "1,7",
    maxeqwco2: "1,148",
    image: MitsuImage,
    matcard: "--matching card---",
    catalog:
      "https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf",
  },

  {
    id: 3,
    producent: "Mitsubishi",
    models: "Zubadan",
    pn: "PUD-SHWM100VAA",
    power: "10",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "51 000",
    catprice: "0000",
    yearpowusage: "5938.00",
    compressor: "producent",
    compressorlife: "compressorlife",

    phases: "230 | 1 | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "10",
    nominal55: "10",
    maksmin10w35: "12",
    makmin15w35: "10,7",
    heatingrange: "-28 - 24",
    heatcwurange: "-28 - 35",

    coolrange: "----",
    coolpow: "----",
    sizemm: "1020x1050x480",
    weight: "108",
    db: "59",

    powercord: "3 x 4",
    safety: "32",

    coolconnect: "1/4-1/2",
    maxinstlength: "30",
    maxheigtdist: "30",
    coolantamount: "1,7",
    coeqwi: "1,148",
    maxcoeqw: "1,83",
    maxeqwco2: "1,148",
    image: MitsuImage,
    matcard: "--matching card---",
    catalog:
      "https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf",
  },

  {
    id: 22,
    producent: "Mitsubishi",
    models: "Zubadan",
    pn: "PUD-SHWM100YAA",
    power: "10",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "51 500",
    catprice: "0000",
    yearpowusage: "5975.00",
    compressor: "producent",
    compressorlife: "compressorlife",

    phases: "400 | 3+N | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "10",
    nominal55: "10",
    maksmin10w35: "12",
    makmin15w35: "10,7",
    heatingrange: "-28 - 24",
    heatcwurange: "-28 - 35",

    coolrange: "----",
    coolpow: "----",
    sizemm: "1020x1050x480",
    weight: "121",
    db: "59",

    powercord: "5 x 1,5",
    safety: "16",

    coolconnect: "1/4-1/2",
    maxinstlength: "30",
    maxheigtdist: "30",
    coolantamount: "1,7",
    coeqwi: "1,148",
    maxcoeqw: "1,83",
    maxeqwco2: "1,235",
    image: MitsuImage,
    matcard: "--matching card---",
    catalog:
      "https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf",
  },
  {
    id: 5,
    producent: "Mitsubishi",
    models: "Zubadan",
    pn: "PUD-SHWM120YAA",
    power: "12",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "53 900",
    catprice: "0000",
    yearpowusage: "7213.00",
    compressor: "producent",
    compressorlife: "compressorlife",

    phases: "400 | 3+N | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "12",
    nominal55: "12",
    maksmin10w35: "13,6",
    makmin15w35: "12,3",
    heatingrange: "-28 - 24",
    heatcwurange: "-28 - 35",

    coolrange: "----",
    coolpow: "----",
    sizemm: "1020x1050x480",
    weight: "121",
    db: "60",

    powercord: "5 x 1,5",
    safety: "16",

    coolconnect: "1/4-1/2",
    maxinstlength: "30",
    maxheigtdist: "30",
    coolantamount: "1,7",
    coeqwi: "1,148",
    maxcoeqw: "1,83",
    maxeqwco2: "1,235",
    image: MitsuImage,
    matcard: "--matching card---",
    catalog:
      "https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf",
  },
  {
    id: 6,
    producent: "Mitsubishi",
    models: "Zubadan",
    pn: "PUD-SHWM140YAA",
    power: "14",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "55 000",
    catprice: "0000",
    yearpowusage: "8455.00",
    compressor: "producent",
    compressorlife: "compressorlife",

    phases: "400 | 3+N | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "14",
    nominal55: "14",
    maksmin10w35: "14,9",
    makmin15w35: "14,2",
    heatingrange: "-28 - 24",
    heatcwurange: "-28 - 35",

    coolrange: "----",
    coolpow: "----",
    sizemm: "1020x1050x480",
    weight: "122",
    db: "62",

    powercord: "5 x 1,5",
    safety: "16",

    coolconnect: "1/4-1/2",
    maxinstlength: "25",
    maxheigtdist: "25",
    coolantamount: "1,7",
    coeqwi: "1,148",
    maxcoeqw: "1,83",
    maxeqwco2: "1,235",
    image: MitsuImage,
    matcard: "--matching card---",
    catalog:
      "https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf",
  },
  {
    id: 7,
    producent: "Mitsubishi",
    models: "Zubadan",
    pn: "PUHZ-SHW230YKA",
    power: "23",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "78 500",
    catprice: "0000",
    yearpowusage: "14485.00",
    compressor: "producent",
    compressorlife: "compressorlife",

    phases: "400 | 3+N | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "25",
    nominal55: "23",
    maksmin10w35: "25,6",
    makmin15w35: "22,7",
    heatingrange: "-25 - 21",
    heatcwurange: "-25 - 35",

    coolrange: "----",
    coolpow: "----",
    sizemm: "1338x1050x370",
    weight: "143",
    db: "75",

    powercord: "5 x 4",
    safety: "25",

    coolconnect: "1/2-1",
    maxinstlength: "80",
    maxheigtdist: "30",
    coolantamount: "7,1",
    coeqwi: "14,825",
    maxcoeqw: "14,1",
    maxeqwco2: "28,441",
    image: MitsuImage,
    matcard: "--matching card---",
    catalog:
      "https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf",
  },
  {
    id: 8,
    producent: "Mitsubishi",
    models: "Eco Inverter",
    pn: "SUZ-SWM40VA",
    power: "4",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "38 200",
    catprice: "0000",
    yearpowusage: "2806.00",
    compressor: "producent",
    compressorlife: "compressorlife",

    phases: "230 | 1 | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "4",
    nominal55: "4",
    maksmin10w35: "5,4",
    makmin15w35: "4,3",
    heatingrange: "-20 - 24",
    heatcwurange: "-20 - 35",

    coolrange: "10 - 46",
    coolpow: "4,5",
    sizemm: "880x840x330",
    weight: "54",
    db: "58",

    powercord: "----",
    safety: "16",

    coolconnect: "1/4-1/2",
    maxinstlength: "30",
    maxheigtdist: "30",
    coolantamount: "1,2",
    coeqwi: "0,81",
    maxcoeqw: "1,6",
    maxeqwco2: "1,08",
    image: EcoInverterImage,
    matcard: "--matching card---",
    catalog:
      "https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf",
  },

  {
    id: 9,
    producent: "Mitsubishi",
    models: "Eco Inverter",
    pn: "SUZ-SWM60VA",
    power: "6",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "39 900",
    catprice: "0000",
    yearpowusage: "3631.00",
    compressor: "Mitsubishi",
    compressorlife: "compressorlife",

    phases: "230 | 1 | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "5",
    nominal55: "5",
    maksmin10w35: "6,7",
    makmin15w35: "5,7",
    heatingrange: "-20 - 24",
    heatcwurange: "-20 - 35",

    coolrange: "10 - 46",
    coolpow: "4,5",
    sizemm: "880x840x330",
    weight: "54",
    db: "60",

    powercord: "----",
    safety: "16",

    coolconnect: "1/4-1/2",
    maxinstlength: "30",
    maxheigtdist: "30",
    coolantamount: "1,2",
    coeqwi: "0,81",
    maxcoeqw: "1,6",
    maxeqwco2: "1,08",
    image: EcoInverterImage,
    matcard: "--matching card---",
    catalog:
      "https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf",
  },
  {
    id: 10,
    producent: "Mitsubishi",
    models: "Eco Inverter",
    pn: "SUZ-SWM80VA",
    power: "8",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "41 900",
    catprice: "0000",
    yearpowusage: "4301.00",
    compressor: "Mitsubishi",
    compressorlife: "compressorlife",

    phases: "230 | 1 | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "6,5",
    nominal55: "6,5",
    maksmin10w35: "7,1",
    makmin15w35: "6,0",
    heatingrange: "-20 - 24",
    heatcwurange: "-20 - 35",

    coolrange: "10 - 46",
    coolpow: "4,5",
    sizemm: "880x840x330",
    weight: "54",
    db: "62",

    powercord: "----",
    safety: "16",

    coolconnect: "1/4-1/2",
    maxinstlength: "30",
    maxheigtdist: "30",
    coolantamount: "1,2",
    coeqwi: "0,81",
    maxcoeqw: "1,6",
    maxeqwco2: "1,08",
    image: EcoInverterImage,
    matcard: "--matching card---",
    catalog:
      "https://www.ecodan.pl/fileadmin/user_upload/downloads/broschueren/me_katalog_atw_2021-2022.pdf",
  },
  {
    id: 11,
    producent: "Panasonic",
    models: "Aquarea EcoFleX",
    pn: "WH-ADF0309J3E5CM",
    power: "8",
    type: "Split",
    guar: "Producent | 5 lat",

    insprice: "---",
    catprice: "0000",
    yearpowusage: "4301.00",
    compressor: "---",
    compressorlife: "compressorlife",

    phases: "230 | 1 | 50",
    factor: "R32",
    makstemp: "60",
    pefficinecy35: "A+++",
    pefficiency55: "A++",
    nominal35: "6,5",
    nominal55: "6,5",
    maksmin10w35: "7,1",
    makmin15w35: "6,0",
    heatingrange: "-20 - 24",
    heatcwurange: "-20 - 35",

    coolrange: "10 - 46",
    coolpow: "4,5",
    sizemm: "880x840x330",
    weight: "54",
    db: "62",

    powercord: "----",
    safety: "16",

    coolconnect: "1/4-1/2",
    maxinstlength: "30",
    maxheigtdist: "30",
    coolantamount: "1,2",
    coeqwi: "0,81",
    maxcoeqw: "1,6",
    maxeqwco2: "1,08",
    image: PanasonicTCap,
    matcard: "--matching card---",
    catalog:
      "https://www.panasonicproclub.com/uploads/PL/catalogues/katalogi/2022/Katalog%20pomp%20ciep%C5%82a%20Aquarea%202022%20-%202023.pdf",
  },
];
