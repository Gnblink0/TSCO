//  airline allowance

export interface Dimension {
  length?: number;
  width?: number;
  height?: number;
  unit: "in" | "cm";
  isLinear?: boolean;
  linearValue?: number;
}

export interface BaggageSize {
  imperial?: Dimension;
  metric?: Dimension;
  sourceUrl?: string;
}

export interface Airline {
  id: string;
  country: string;
  name: string;
  carryOn?: BaggageSize;
  personalItem?: BaggageSize;
  specialNotes?: string[];
  officialWebsite?: string;
  baggagePolicyUrl?: string;
}

