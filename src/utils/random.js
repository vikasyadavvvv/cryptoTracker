export const getRandomChange = (min = -2, max = 2) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  };
  
  export const getRandomPriceChange = (price) => {
    const changePercent = getRandomChange(-1, 1); // e.g., -0.5% to +0.5%
    return parseFloat((price * (1 + changePercent / 100)).toFixed(2));
  };
  