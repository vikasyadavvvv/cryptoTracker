import React from 'react';
import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-xs uppercase">
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, idx) => (
            <CryptoRow key={asset.id} asset={asset} index={idx + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
