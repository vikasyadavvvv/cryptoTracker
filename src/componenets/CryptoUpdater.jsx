import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAsset } from '../features/crypto/cryptoSlice';
import { getRandomChange, getRandomPriceChange } from '../utils/random';

const CryptoUpdater = () => {
  const dispatch = useDispatch();
  const assets = useSelector(state => state.crypto);

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = assets.map(asset => {
        return {
          id: asset.id,
          changes: {
            price: getRandomPriceChange(asset.price),
            change1h: getRandomChange(),
            change24h: getRandomChange(),
            change7d: getRandomChange(),
            volume24h: asset.volume24h + Math.floor(Math.random() * 1000000),
          },
        };
      });

      updated.forEach(update => {
        dispatch(updateAsset(update));
      });
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return null; // this component just runs the effect
};

export default CryptoUpdater;
