import React from "react";
import CryptoTable from "./componenets/CryptoTable";
import CryptoUpdater from "./componenets/CryptoUpdater";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <h1 className="text-center text-2xl font-bold p-4">🪙 Real-Time Crypto Tracker</h1>
      <CryptoUpdater />
      <CryptoTable />
    </div>
  );
}

export default App;
