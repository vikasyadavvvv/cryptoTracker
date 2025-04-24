# Crypto

A simple cryptocurrency dashboard displaying real-time data for various assets including their price, changes, market cap, volume, and more.

## Tech Stack

- **Frontend**: React.js
- **State Management**: Redux
- **Styling**: TailwindCSS
- **Charts**: CoinGecko API / Chart Images from external sources
- **Responsive Design**: TailwindCSS (for a mobile-first layout)

## Features

- Real-time cryptocurrency data display
- Live updates for price, 24h, and 7d changes
- Dynamic asset tracking
- Interactive charts
- Fully responsive design for mobile and desktop

## Architecture

The project is built with a modular approach where:
- **React Components**: Handle UI rendering and user interaction.
- **Redux Store**: Manages global state such as cryptocurrency data, prices, and other related assets.
- **TailwindCSS**: Provides utility-first CSS classes for responsive and clean styling.

## Folder Structure

crypto/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/
│   │   └── (Images, icons, logos)
│   ├── components/
│   │   ├── CryptoRow.js          
│   │   ├── CryptoTable.js        # Displays the table of cryptocurrencies
│   │   └── CryptoUpdater.js      # Handles the updating of crypto data
│   ├── features/
│   │   └── crypto/
│   │       └── CryptoSlice.js    # Redux slice for crypto state
│   ├── app/
│   │   └── store.js              # Redux store configuration
│   ├── App.js                    # Main app component
│   ├── index.css                 # Global styles (including TailwindCSS)
│   └── index.js                  # React entry point
│
└── package.json


![Screenshot 2025-04-24 080029](https://github.com/user-attachments/assets/f525e087-cea3-4093-85f1-b089b2b3a136)
![Screenshot 2025-04-24 075942](https://github.com/user-attachments/assets/32521872-24a7-4861-8dbe-19b9cacd69e1)



