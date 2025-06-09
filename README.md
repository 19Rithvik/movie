# 🎬 Movie Explorer App

A responsive web application built with **React.js** that allows users to browse popular movies and search for specific titles using the [TMDB API](https://www.themoviedb.org/documentation/api). It displays movie posters, release dates, and provides a simple favorite action for each movie.

---

## 🚀 Features

- 🔍 Search for movies using TMDB API  
- 🎥 View popular movies on load  
- 🖼️ Movie poster and title display  
- ❤️ Favorite button (alert on click)  
- 📅 Release year and month shown  
- 💅 Styled with custom CSS  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, JSX, CSS  
- **API:** TMDB (The Movie Database)  
- **Tools:** Vite (for development server), Fetch API  

---

## 🌐 Live Preview

👉 [View Deployed App](https://movie-lake-chi.vercel.app/) — hosted on Vercel

---

## 📂 Folder Structure

<pre> ``` movie/ ├── public/ ├── src/ │ ├── components/ │ │ └── Moviecard.jsx │ ├── css/ │ │ ├── Home.css │ │ └── Moviecard.css │ ├── pages/ │ │ └── Home.jsx │ ├── services/ │ │ └── api.js │ └── main.jsx ├── .gitignore ├── index.html ├── package.json ├── README.md └── vite.config.js ``` </pre>


---

## 🧪 API Usage

This app uses the TMDB API for movie data. You need an API key from [TMDB](https://www.themoviedb.org/settings/api).

### Example API call:
GET https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY


> You can pass the API key as a query parameter or via Bearer token in headers.

---

## 🧾 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/19Rithvik/movie.git
   cd movie
2. npm install
3. npm run dev
