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
    baggagePolicyUrl:
      "https://www.airtransat.com/en-CA/travel-information/baggage/weight-dimensions",
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
    baggagePolicyUrl: "https://www.flycma.com/terms-conditions/#baggage",
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
    baggagePolicyUrl: "https://www.flyflair.com/travel-info/baggage",
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
    baggagePolicyUrl: "https://www.pacificcoastal.com/carry-on/",
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
    baggagePolicyUrl:
      "https://www.flyporter.com/en-ca/customer-service/faq/seats-and-baggage",
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
    baggagePolicyUrl: "https://www.westjet.com/en-ca/baggage/carry-on",
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
    baggagePolicyUrl: "https://www.sunwing.ca/en/sunwing-airlines/baggage-info",
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
    baggagePolicyUrl: "https://www.westjet.com/en-ca/baggage/carry-on",
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
    country: "China(Taiwan)",
    name: "Air China",
    baggagePolicyUrl: "https://www.airchina.us/US/GB/info/carry-on-baggage/",
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
  },
  {
    id: "beijing-capital-airlines",
    country: "China",
    name: "Beijing Capital Airlines",
    baggagePolicyUrl:
      "https://www.hainanairlines.com/HUPortal/dyn/portal/DisplayPage?LANGUAGE=GB&COUNTRY_SITE=CA&SITE=CBHZCBHZ&PAGE=CABA",
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
  },
  {
    id: "china-eastern",
    country: "China",
    name: "China Eastern",
    baggagePolicyUrl:
      "https://www.ceair.com/global/en_static/Announcement/BaggageService/CarryonBaggage/",
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
  },
  {
    id: "china-southern",
    country: "China",
    name: "China Southern",
    baggagePolicyUrl:
      "https://www.csair.com/en/tourguide/luggage_service/carryon_luggage/carry-on/",
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
  },
  {
    id: "china-southern---xiamen-airlines",
    country: "China",
    name: "China Southern - Xiamen Airlines",
    baggagePolicyUrl:
      "https://www.xiamenair.com/brandnew_EN/passenger-service/baggage-claim.html",
    carryOn: {
      imperial: {
        isLinear: true,
        linearValue: 45.0,
        unit: "in",
      },
      metric: {
        isLinear: true,
        linearValue: 115.0,
        unit: "cm",
      },
    },
  },
  {
    id: "hainan-airlines---domestic",
    country: "China",
    name: "Hainan Airlines - Domestic",
    baggagePolicyUrl:
      "https://www.hainanairlines.com/HUPortal/dyn/portal/DisplayPage?COUNTRY_SITE=MX&SITE=CBHZCBHZ&LANGUAGE=GB&PAGE=CABA",
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
    baggagePolicyUrl:
      "https://www.hainanairlines.com/HUPortal/dyn/portal/DisplayPage?COUNTRY_SITE=MX&SITE=CBHZCBHZ&LANGUAGE=GB&PAGE=CABA",
    carryOn: {
      imperial: {
        isLinear: true,
        linearValue: 45.0,
        unit: "in",
      },
      metric: {
        isLinear: true,
        linearValue: 115.0,
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
    id: "sichuan-airlines",
    country: "China",
    name: "Sichuan Airlines",
    baggagePolicyUrl: "https://www.sichuanair.com/carry-on-baggage/",
    carryOn: {
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
  },
  {
    id: "cathay-pacific",
    country: "China (HK)",
    name: "Cathay Pacific",
    baggagePolicyUrl:
      "https://flights.cathaypacific.com/en_CA/baggage/baggage-calculator.html",
    carryOn: {
      imperial: {
        isLinear: true,
        linearValue: 62.0,
        unit: "in",
      },
      metric: {
        isLinear: true,
        linearValue: 158.0,
        unit: "cm",
      },
    },
    personalItem: {},
  },
  {
    id: "hong-kong-airlines",
    country: "China (HK)",
    name: "Hong Kong Airlines",
    baggagePolicyUrl:
      "https://www.hongkongairlines.com/en_HK/fly-with-us/baggage/handcarry",
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
    id: "fiji-airways",
    country: "Fiji",
    name: "Fiji Airways",
    baggagePolicyUrl:
      "https://www.fijiairways.com/en-ca/manage/baggage-allowances",
    carryOn: {
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
  },
  {
    id: "finnair",
    country: "Finland",
    name: "Finnair",
    baggagePolicyUrl:
      "https://www.finnair.com/ca-en/baggage-on-finnair-flights/carry-on-baggage",
    carryOn: {
      imperial: {
        length: 21.7,
        width: 15.7,
        height: 9.1,
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
    id: "air-france",
    country: "France",
    name: "Air France",
    baggagePolicyUrl:
      "https://wwws.airfrance.ca/en/information/bagages/bagage-cabine-soute",
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
    baggagePolicyUrl:
      "https://www.condor.com/eu/flight-preparation/baggage-and-animals/carry-on.jsp",
    carryOn: {
      metric: {
        length: 55.0,
        width: 40.0,
        height: 20.0,
        unit: "cm",
      },
    },
    personalItem: {
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
    baggagePolicyUrl: "https://www.lufthansa.com/gr/en/carry-on-baggage",
    carryOn: {
      metric: {
        length: 55.0,
        width: 40.0,
        height: 23.0,
        unit: "cm",
      },
    },
    personalItem: {
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
  },
  {
    id: "japan-airlines",
    country: "Japan",
    name: "Japan Airlines",
    baggagePolicyUrl: "",
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
  },
  {
    id: "singapore-airlines",
    country: "Singapore",
    name: "Singapore Airlines",
    baggagePolicyUrl: "",
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
