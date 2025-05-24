import Search from "./components/Search";
import Table from "./components/Table";
import Footer from "./section/Footer";
import { useState } from "react";
import { airlines } from "./data";
import type { Airline } from "./types";

const App = () => {
  const [filteredAirlines, setFilteredAirlines] = useState<Airline[]>(airlines);

  const handleSearch = (searchTerm: string) => {
    const filtered = airlines.filter((airline) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        airline.name.toLowerCase().includes(searchLower) ||
        airline.country.toLowerCase().includes(searchLower)
      );
    });
    setFilteredAirlines(filtered);
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="py-10 mb-10 w-full flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <h1 className="text-3xl font-bold text-white mb-3">
          YVR Carry-On Baggage Allowances
        </h1>
        <p className="text-white">
          This is a list of the carry-on baggage allowances for the airlines
          that fly from Vancouver International Airport (YVR).
        </p>
      </div>
      <Search onSearch={handleSearch} />
      <Table data={filteredAirlines} />
      <Footer />
    </div>
  );
};

export default App;
