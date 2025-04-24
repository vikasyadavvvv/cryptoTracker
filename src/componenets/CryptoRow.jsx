import React from "react";
const CryptoRow = ({ asset, index }) => {
  const getColor = (value) => (value > 0 ? 'text-green-500' : value < 0 ? 'text-red-500' : '');

  return (
    <tr className="border-b hover:bg-gray-50 text-sm">
      <td className="px-2 py-2 text-center">{index}</td>

      {/* Logo Image */}
      <td className="px-2 py-2 text-center">
        <img
          src={asset.logo}
          alt={asset.symbol}
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain mx-auto"
        />
      </td>

      <td className="px-2 py-2">{asset.name}</td>
      <td className="px-2 py-2">{asset.symbol}</td>
      <td className="px-2 py-2">${asset.price.toLocaleString()}</td>
      <td className={`px-2 py-2 ${getColor(asset.change1h)}`}>{asset.change1h.toFixed(2)}%</td>
      <td className={`px-2 py-2 ${getColor(asset.change24h)}`}>{asset.change24h.toFixed(2)}%</td>
      <td className={`px-2 py-2 ${getColor(asset.change7d)}`}>{asset.change7d.toFixed(2)}%</td>
      <td className="px-2 py-2">${asset.marketCap.toLocaleString()}</td>
      <td className="px-2 py-2">${asset.volume24h.toLocaleString()}</td>
      <td className="px-2 py-2">{asset.circulatingSupply.toLocaleString()}</td>
      <td className="px-2 py-2">{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</td>

      {/* 7D Chart */}
      <td className="px-2 py-2 text-center">
        <img
          src={asset.chart7d}
          alt="7D Chart"
          className="w-[100px] h-auto sm:w-[150px] md:w-[200px] object-contain mx-auto"
        />
      </td>
    </tr>
  );
};

export default CryptoRow;

