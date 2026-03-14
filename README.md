photo-gallery-assignment
# 📸 Photo Gallery App

A responsive photo gallery built with **React + Vite + Tailwind CSS**.
This project fetches photos from the Picsum API and allows users to search photographers and save favourite photos.

---

## 🚀 Features

* Fetches **30 photos** from the Picsum API
* **Responsive gallery layout**
* **Search photos by author**
* **Favourite photos** using `useReducer`
* **Persist favourites** using `localStorage`
* Custom React hook for API fetching
* Performance optimization with `useMemo` and `useCallback`
* Modern UI built with **Tailwind CSS**

---

## 🛠 Tech Stack

* **React**
* **Vite**
* **Tailwind CSS**
* **JavaScript**
* **Picsum API**

---

## 📂 Project Structure

```
src
 ├ components
 │   ├ Gallery.jsx
 │   └ PhotoCard.jsx
 │
 ├ hooks
 │   └ useFetchPhotos.js
 │
 ├ reducers
 │   └ favouritesReducer.js
 │
 ├ App.jsx
 ├ main.jsx
 └ index.css
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/photo-gallery-assignment.git
```

Go to the project folder:

```
cd photo-gallery-assignment
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 📡 API Used

Photos are fetched from:

```
https://picsum.photos/v2/list?limit=30
```

---

## 🎯 Assignment Requirements Implemented

* Fetch photos using a **custom hook (`useFetchPhotos`)**
* Manage favourites using **`useReducer`**
* Store favourites in **localStorage**
* Use **`useMemo` for optimized filtering**
* Use **`useCallback` for stable function references**
* Responsive UI with **Tailwind CSS**

---

## 👨‍💻 Author

**Shivam Kumar**

GitHub: https://github.com/shivam-kuamr013/photo-gallery-assignment.git
https://github.com/YOUR_USERNAME
