import type { Airline } from "../types";

export const airlines: Airline[] = [
  {
    id: "austrian-airlines",
    country: "Australia",
    name: "Austrian Airlines",
    carryOn: {
      imperial: { length: 21.7, width: 15.7, height: 9.0, unit: "in" },
      metric: { length: 55.0, width: 40.0, height: 23.0, unit: "cm" },
      sourceUrl: "https://www.austrian.com/ca/en/carry-on-baggage",
    },
    personalItem: {
      imperial: { length: 15.7, width: 11.8, height: 3.9, unit: "in" },
      metric: { length: 40.0, width: 30.0, height: 10.0, unit: "cm" },
      sourceUrl: "https://www.austrian.com/ca/en/carry-on-baggage",
    },
  },
  {
    id: "air-canada",
    country: "Canada",
    name: "Air Canada",
    carryOn: {
      imperial: { length: 21.5, width: 15.5, height: 9.0, unit: "in" },
      metric: { length: 55.0, width: 40.0, height: 23.0, unit: "cm" },
      sourceUrl:
        "https://www.aircanada.com/ca/en/aco/home/plan/baggage/carry-on.html",
    },
    personalItem: {
      imperial: { length: 17.0, width: 13.0, height: 6.0, unit: "in" },
      metric: { length: 43.0, width: 33.0, height: 16.0, unit: "cm" },
      sourceUrl:
        "https://www.aircanada.com/ca/en/aco/home/plan/baggage/carry-on.html",
    },
  },
];
