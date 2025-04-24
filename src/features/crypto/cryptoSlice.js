import { createSlice } from '@reduxjs/toolkit';
import btcLogo from '../../assets/btc.png';
import ethLogo from '../../assets/eth.png'
import usdtLogo from '../../assets/usdt.png'
import bnbLogo from '../../assets/bnb.png'
import xrpLogo from '../../assets/xrp.png'
import btcChart from'../../assets/btcChart.png'
import etmChart from '../../assets/ethchart.png'
import usdtChart from '../../assets/tietherChart.png'
import bnbChart from '../../assets/bnbchart.png'
import xrpChart from '../../assets/xrpchart.png'
 

const initialState = [
  {
    id: 'btc',
    logo: btcLogo,  // Direct URL to image
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 30000,
    change1h: 0.5,
    change24h: -2.1,
    change7d: 4.3,
    marketCap: 500000000000,
    volume24h: 20000000000,
    circulatingSupply: 19000000,
    maxSupply: 21000000,
    chart7d: btcChart,  // Direct URL to image
  },
  {
    id: 'eth',
    logo: ethLogo,  // Direct URL to image
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1900,
    change1h: -0.3,
    change24h: 1.8,
    change7d: 5.6,
    marketCap: 250000000000,
    volume24h: 10000000000,
    circulatingSupply: 120000000,
    maxSupply: null,
    chart7d: etmChart,  // Direct URL to image
  },
  {
    id: 'usdt',
    logo: usdtLogo,  // Direct URL to image
    name: 'Tether',
    symbol: 'USDT',
    price: 1.0,
    change1h: 0.0,
    change24h: 0.0,
    change7d: 0.0,
    marketCap: 85000000000,
    volume24h: 40000000000,
    circulatingSupply: 85000000000,
    maxSupply: null,
    chart7d: usdtChart,  // Direct URL to image
  },
  {
    id: 'bnb',
    logo: bnbLogo,  // Direct URL to image
    name: 'BNB',
    symbol: 'BNB',
    price: 320,
    change1h: 0.2,
    change24h: -1.5,
    change7d: 2.4,
    marketCap: 50000000000,
    volume24h: 2000000000,
    circulatingSupply: 155000000,
    maxSupply: 200000000,
    chart7d: bnbChart,  // Direct URL to image
  },
  {
    id: 'xrp',
    logo: xrpLogo,  // Direct URL to image
    name: 'XRP',
    symbol: 'XRP',
    price: 0.6,
    change1h: -0.1,
    change24h: 0.8,
    change7d: -1.2,
    marketCap: 30000000000,
    volume24h: 1500000000,
    circulatingSupply: 51000000000,
    maxSupply: 100000000000,
    chart7d: xrpChart,  // Direct URL to image
  },
];

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAsset(state, action) {
      const { id, changes } = action.payload;
      const index = state.findIndex(asset => asset.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...changes };
      }
    },
  },
});

// Action for updating an asset's data
export const { updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;

// Simulate updates
export const startUpdatingAssets = () => (dispatch) => {
  setInterval(() => {
    const assetsToUpdate = initialState.map(asset => {
      return {
        id: asset.id,
        changes: {
          price: asset.price + (Math.random() * 100 - 50),  // Random price change
          change1h: asset.change1h + (Math.random() * 2 - 1),  // Random 1 hour change
          change24h: asset.change24h + (Math.random() * 4 - 2),  // Random 24 hour change
          change7d: asset.change7d + (Math.random() * 5 - 2),  // Random 7 day change
          volume24h: asset.volume24h + (Math.random() * 1000000000 - 500000000),  // Random 24h volume change
        }
      };
    });

    assetsToUpdate.forEach(asset => {
      dispatch(updateAsset(asset));
    });
  }, 1000); // Update every second (adjust interval as needed)
};
