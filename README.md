
# 🌤️ AirspaceCast

AirspaceCast is a sleek and responsive weather app built with **React + Vite**. It allows users to search for real-time weather conditions and a 5-day forecast for any city in the world.

## 🚀 Features

- 🔍 City-based weather search
- 📍 Location-based weather fetching
- 🌡️ Current temperature, condition, and more
- 📅 5-day forecast with daily icons
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive for all screen sizes

## 🖼️ Preview

![AirspaceCast Screenshot](./screenshot.png)

## 🛠️ Tech Stack

- ⚛️ React
- ⚡ Vite
- 🌐 OpenWeatherMap API
- 🎨 Tailwind CSS

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/AirspaceCast.git
cd AirspaceCast
npm install
```

## 🧪 Run Locally

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

## 📁 Folder Structure

```
AirspaceCast/
├── public/
│   └── LOGO.png
├── src/
│   ├── api/
│   │   └── weather.js
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   └── ForecastCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🔐 API Key

You'll need an API key from [OpenWeatherMap](https://openweathermap.org/api). Add it to your `.env` file:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

## 📌 TODOs

- [ ] Add hourly forecast
- [ ] Add weather animations
- [ ] PWA support (Add to home screen)

## 📄 License

MIT License

---

Made with ❤️ by [Your Name]
