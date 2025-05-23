import type { Airline } from "../types";

export const airlines: Airline[] = [
  {
    id: "austrian-airlines",
    country: "Austria",
    name: "Austrian Airlines",
    baggagePolicyUrl: "https://www.austrian.com/ca/en/carry-on-baggage",
    carryOn: {
      imperial: { length: 21.7, width: 15.7, height: 9.0, unit: "in" },
      metric: { length: 55.0, width: 40.0, height: 23.0, unit: "cm" },
    },
    personalItem: {
      imperial: { length: 15.7, width: 11.8, height: 3.9, unit: "in" },
      metric: { length: 40.0, width: 30.0, height: 10.0, unit: "cm" },
    },
  },
  {
    id: "qantas",
    country: "Australia",
    name: "Qantas",
    baggagePolicyUrl:
      "https://www.qantas.com/ca/en/travel-info/baggage/carry-on-baggage.html",
    carryOn: {
      imperial: { length: 22.0, width: 14.0, height: 9.0, unit: "in" },
      metric: { length: 56.0, width: 36.0, height: 23.0, unit: "cm" },
    },
  },
  {
    id: "brussels-airlines",
    country: "Belgium",
    name: "Brussels Airlines",
    baggagePolicyUrl:
      "https://www.brusselsairlines.com/ca/en/extra-services/baggage/carry-on-baggage",
    carryOn: {
      imperial: { length: 21.7, width: 15.7, height: 9.0, unit: "in" },
      metric: { length: 55.0, width: 40.0, height: 23.0, unit: "cm" },
    },
    personalItem: {
      imperial: { length: 15.7, width: 11.8, height: 3.9, unit: "in" },
      metric: { length: 40.0, width: 30.0, height: 10.0, unit: "cm" },
    },
  },
  {
    id: "british-airways",
    country: "Britain",
    name: "British Airways",
    baggagePolicyUrl:
      "https://www.britishairways.com/content/information/baggage-essentials",
    carryOn: {
      imperial: { length: 22.0, width: 17.7, height: 9.8, unit: "in" },
      metric: { length: 56.0, width: 45.0, height: 25.0, unit: "cm" },
    },
    personalItem: {
      imperial: { length: 15.7, width: 11.8, height: 5.9, unit: "in" },
      metric: { length: 40.0, width: 30.0, height: 15.0, unit: "cm" },
    },
  },
  {
    id: "air-canada",
    country: "Canada",
    name: "Air Canada",
    baggagePolicyUrl:
      "https://www.aircanada.com/ca/en/aco/home/plan/baggage/carry-on.html",
    carryOn: {
      imperial: {
        length: 21.5,
        width: 15.5,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 17.0,
        width: 13.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 43.0,
        width: 33.0,
        height: 16.0,
        unit: "cm",
      },
    },
  },
  // {
  //   id: "air-canada-jazz-aviation",
  //   country: "Canada",
  //   name: "Air Canada Jazz Aviation",
  //   baggagePolicyUrl: "",
  //   carryOn: {
  //     imperial: {
  //       length: 21.5,
  //       width: 15.5,
  //       height: 9.0,
  //       unit: "in",
  //     },
  //     metric: {
  //       length: 55.0,
  //       width: 40.0,
  //       height: 23.0,
  //       unit: "cm",
  //     },
  //   },
  //   personalItem: {
  //     imperial: {
  //       length: 17.0,
  //       width: 13.0,
  //       height: 6.0,
  //       unit: "in",
  //     },
  //     metric: {
  //       length: 43.0,
  //       width: 33.0,
  //       height: 16.0,
  //       unit: "cm",
  //     },
  //   },
  // },
  // {
  //   id: "air-canada-rouge",
  //   country: "Canada",
  //   name: "Air Canada Rouge",
  //   baggagePolicyUrl: "",
  //   carryOn: {
  //     imperial: {
  //       length: 21.5,
  //       width: 15.5,
  //       height: 9.0,
  //       unit: "in",
  //     },
  //     metric: {
  //       length: 55.0,
  //       width: 40.0,
  //       height: 23.0,
  //       unit: "cm",
  //     },
  //   },
  //   personalItem: {
  //     imperial: {
  //       length: 17.0,
  //       width: 13.0,
  //       height: 6.0,
  //       unit: "in",
  //     },
  //     metric: {
  //       length: 43.0,
  //       width: 33.0,
  //       height: 16.0,
  //       unit: "cm",
  //     },
  //   },
  // },
  {
    id: "air-north---atr-42-routes",
    country: "Canada",
    name: "Air North - ATR 42 Routes",
    baggagePolicyUrl: "https://www.flyairnorth.com/flights/baggage-carry",
    carryOn: {
      imperial: {
        length: 15.0,
        width: 11.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 38.0,
        width: 28.0,
        height: 22.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.0,
        width: 11.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 38.0,
        width: 28.0,
        height: 22.0,
        unit: "cm",
      },
    },
  },
  {
    id: "air-north---boeing-737-routes",
    country: "Canada",
    name: "Air North - Boeing 737 Routes",
    baggagePolicyUrl: "https://www.flyairnorth.com/flights/baggage-carry",
    carryOn: {
      imperial: {
        length: 21.0,
        width: 15.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 54.0,
        width: 38.0,
        height: 22.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 16.0,
        width: 13.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 41.0,
        width: 33.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "air-transat",
    country: "Canada",
    name: "Air Transat",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.5,
        width: 15.5,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 16.1,
        width: 12.2,
        height: 5.1,
        unit: "in",
      },
      metric: {
        length: 41.0,
        width: 31.0,
        height: 13.0,
        unit: "cm",
      },
    },
  },
  {
    id: "central-mountain-air",
    country: "Canada",
    name: "Central Mountain Air",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.5,
        width: 15.5,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 17.0,
        width: 13.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 43.0,
        width: 33.0,
        height: 16.0,
        unit: "cm",
      },
    },
  },
  {
    id: "flair-airlines",
    country: "Canada",
    name: "Flair Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.5,
        width: 15.5,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 17.0,
        width: 13.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 43.0,
        width: 33.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "pacific-coastal-airlines",
    country: "Canada",
    name: "Pacific Coastal Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.5,
        width: 15.5,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 17.0,
        width: 13.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 43.0,
        width: 33.0,
        height: 16.0,
        unit: "cm",
      },
    },
  },
  {
    id: "porter-airlines",
    country: "Canada",
    name: "Porter Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.5,
        width: 15.5,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 17.0,
        width: 13.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 43.0,
        width: 33.0,
        height: 16.0,
        unit: "cm",
      },
    },
  },
  {
    id: "westjet---encore",
    country: "Canada",
    name: "WestJet - Encore",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.0,
        width: 15.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 53.0,
        width: 38.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 16.0,
        width: 13.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 41.0,
        width: 33.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "westjet---sunwing-airlines",
    country: "Canada",
    name: "WestJet - Sunwing Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 20.0,
        width: 16.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 51.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 16.0,
        width: 10.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 25.0,
        height: 16.0,
        unit: "cm",
      },
    },
  },
  {
    id: "westjet-airlines",
    country: "Canada",
    name: "WestJet Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.0,
        width: 15.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 53.0,
        width: 38.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 16.0,
        width: 13.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 41.0,
        width: 33.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "air-china",
    country: "China",
    name: "Air China",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 16.0,
        height: 8.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "beijing-capital-airlines",
    country: "China",
    name: "Beijing Capital Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.6,
        width: 15.7,
        height: 7.8,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "china-eastern",
    country: "China",
    name: "China Eastern",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 16.0,
        height: 8.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "china-southern",
    country: "China",
    name: "China Southern",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 16.0,
        height: 8.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "china-southern---xiamen-airlines",
    country: "China",
    name: "China Southern - Xiamen Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.6,
        width: 15.7,
        height: 7.8,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "hainan-airlines---domestic",
    country: "China",
    name: "Hainan Airlines - Domestic",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 16.0,
        height: 8.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 12.0,
        width: 12.0,
        height: 8.0,
        unit: "in",
      },
      metric: {
        length: 30.0,
        width: 30.0,
        height: 20.0,
        unit: "cm",
      },
    },
  },
  {
    id: "hainan-airlines---global",
    country: "China",
    name: "Hainan Airlines - Global",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: null,
      metric: null,
    },
    personalItem: {
      imperial: {
        length: 12.0,
        width: 12.0,
        height: 8.0,
        unit: "in",
      },
      metric: {
        length: 30.0,
        width: 30.0,
        height: 20.0,
        unit: "cm",
      },
    },
  },
  {
    id: "sichuan-airlines",
    country: "China",
    name: "Sichuan Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 15.7,
        height: 7.9,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "cathay-pacific",
    country: "China (HK)",
    name: "Cathay Pacific",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 56.0,
        width: 36.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 16.0,
        width: 12.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "hong-kong-airlines",
    country: "China (HK)",
    name: "Hong Kong Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 56.0,
        width: 36.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "fiji-airways",
    country: "Fiji",
    name: "Fiji Airways",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 15.7,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "finnair",
    country: "Finland",
    name: "Finnair",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 16.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 16.0,
        width: 12.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "air-france",
    country: "France",
    name: "Air France",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 10.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 35.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 5.8,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "condor",
    country: "Germany",
    name: "Condor",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 16.0,
        height: 8.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 3.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 10.0,
        unit: "cm",
      },
    },
  },
  {
    id: "lufthansa",
    country: "Germany",
    name: "Lufthansa",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 16.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 3.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 10.0,
        unit: "cm",
      },
    },
  },
  {
    id: "aegean-airlines",
    country: "Greece",
    name: "Aegean Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 17.7,
        height: 9.8,
        unit: "in",
      },
      metric: null,
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "icelandair",
    country: "Iceland",
    name: "Icelandair",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.6,
        width: 15.7,
        height: 7.8,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 5.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "air-india",
    country: "India",
    name: "Air India",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 10.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 35.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 16.0,
        width: 12.0,
        height: 6.0,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "el-al-airlines",
    country: "Israel",
    name: "EL-AL Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 17.7,
        height: 9.8,
        unit: "in",
      },
      metric: {
        length: 56.0,
        width: 45.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.0,
        width: 11.8,
        height: 7.0,
        unit: "in",
      },
      metric: {
        length: 38.0,
        width: 30.0,
        height: 18.0,
        unit: "cm",
      },
    },
  },
  {
    id: "ita-airways",
    country: "Italy",
    name: "ITA Airways",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 13.8,
        height: 9.9,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 35.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 17.7,
        width: 14.2,
        height: 7.9,
        unit: "in",
      },
      metric: {
        length: 45.0,
        width: 36.0,
        height: 20.0,
        unit: "cm",
      },
    },
  },
  {
    id: "all-nippon-(ana)---100+-seats",
    country: "Japan",
    name: "All Nippon (ANA) - 100+ seats",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 15.7,
        height: 9.8,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "all-nippon-(ana)---under-100-seats",
    country: "Japan",
    name: "All Nippon (ANA) - Under 100 seats",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 17.7,
        width: 13.8,
        height: 7.9,
        unit: "in",
      },
      metric: {
        length: 45.0,
        width: 35.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "japan-airlines",
    country: "Japan",
    name: "Japan Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: null,
      metric: null,
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "japan-airlines---zipair-tokyo",
    country: "Japan",
    name: "Japan Airlines - Zipair Tokyo",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 15.7,
        height: 9.8,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 17.7,
        width: 13.8,
        height: 9.8,
        unit: "in",
      },
      metric: {
        length: 45.0,
        width: 35.0,
        height: 25.0,
        unit: "cm",
      },
    },
  },
  {
    id: "korean-air",
    country: "Korea",
    name: "Korean Air",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 15.7,
        height: 7.9,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 5.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "aerom\u00e9xico",
    country: "Mexico",
    name: "Aerom\u00e9xico",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.5,
        width: 15.7,
        height: 10.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "klm",
    country: "Netherlands",
    name: "KLM",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 13.8,
        height: 9.8,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 35.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 5.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "air-new-zealand",
    country: "New Zealand",
    name: "Air New Zealand",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: null,
      metric: null,
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "philippine-airlines",
    country: "Philippines",
    name: "Philippine Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 56.0,
        width: 36.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 18.0,
        width: 14.0,
        height: 8.0,
        unit: "in",
      },
      metric: {
        length: 45.0,
        width: 35.0,
        height: 20.0,
        unit: "cm",
      },
    },
  },
  {
    id: "aeroflot",
    country: "Russia",
    name: "Aeroflot",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 15.7,
        height: 9.8,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "singapore-airlines",
    country: "Singapore",
    name: "Singapore Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: null,
      metric: null,
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 3.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 10.0,
        unit: "cm",
      },
    },
  },
  {
    id: "iberia-airlines",
    country: "Spain",
    name: "Iberia Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 15.7,
        height: 9.8,
        unit: "in",
      },
      metric: {
        length: 56.0,
        width: 40.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 5.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "vueling-airlines",
    country: "Spain",
    name: "Vueling Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 15.7,
        height: 7.9,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 7.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 20.0,
        unit: "cm",
      },
    },
  },
  {
    id: "scandinavian-airlines",
    country: "Sweden",
    name: "Scandinavian Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 15.7,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 5.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "swiss-air",
    country: "Switzerland",
    name: "Swiss Air",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.0,
        width: 15.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 3.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 10.0,
        unit: "cm",
      },
    },
  },
  {
    id: "china-airlines",
    country: "Taiwan",
    name: "China Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 56.0,
        width: 36.0,
        height: 23.0,
        unit: "cm",
      },
    },
  },
  {
    id: "eva-airways",
    country: "Taiwan",
    name: "Eva Airways",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 56.0,
        width: 36.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 12.0,
        width: 16.0,
        height: 4.0,
        unit: "in",
      },
      metric: {
        length: 30.0,
        width: 40.0,
        height: 10.0,
        unit: "cm",
      },
    },
  },
  {
    id: "turkish-airlines",
    country: "Turkey",
    name: "Turkish Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 15.7,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 15.7,
        width: 11.8,
        height: 5.9,
        unit: "in",
      },
      metric: {
        length: 40.0,
        width: 30.0,
        height: 15.0,
        unit: "cm",
      },
    },
  },
  {
    id: "easyjet",
    country: "UK",
    name: "EasyJet",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: null,
      metric: null,
    },
    personalItem: {
      imperial: {
        length: 17.7,
        width: 14.2,
        height: 7.9,
        unit: "in",
      },
      metric: {
        length: 45.0,
        width: 36.0,
        height: 20.0,
        unit: "cm",
      },
    },
  },
  {
    id: "alaska-airlines",
    country: "USA",
    name: "Alaska Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.9,
        width: 35.6,
        height: 22.9,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "alaska-airlines---horizon-air",
    country: "USA",
    name: "Alaska Airlines - Horizon Air",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 24.0,
        width: 17.0,
        height: 10.0,
        unit: "in",
      },
      metric: {
        length: 61.0,
        width: 43.0,
        height: 25.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 9.4,
        width: 6.7,
        height: 4.0,
        unit: "in",
      },
      metric: {
        length: 24.0,
        width: 17.0,
        height: 10.0,
        unit: "cm",
      },
    },
  },
  {
    id: "american",
    country: "USA",
    name: "American",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 56.0,
        width: 36.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 18.0,
        width: 14.0,
        height: 8.0,
        unit: "in",
      },
      metric: {
        length: 45.0,
        width: 35.0,
        height: 20.0,
        unit: "cm",
      },
    },
  },
  {
    id: "delta-air-lines",
    country: "USA",
    name: "Delta Air Lines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 56.0,
        width: 35.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: null,
      metric: null,
    },
  },
  {
    id: "jetblue-airways",
    country: "USA",
    name: "JetBlue Airways",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 55.88,
        width: 35.56,
        height: 22.86,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 17.0,
        width: 13.0,
        height: 8.0,
        unit: "in",
      },
      metric: {
        length: 43.2,
        width: 33.0,
        height: 20.32,
        unit: "cm",
      },
    },
  },
  {
    id: "united-airlines",
    country: "USA",
    name: "United Airlines",
    baggagePolicyUrl: "",
    carryOn: {
      imperial: {
        length: 22.0,
        width: 14.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 56.0,
        width: 35.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
      imperial: {
        length: 17.0,
        width: 10.0,
        height: 9.0,
        unit: "in",
      },
      metric: {
        length: 43.0,
        width: 25.0,
        height: 22.0,
        unit: "cm",
      },
    },
  },
];
