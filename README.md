# 📜 Random Quote Generator

A simple and interactive **Random Quote Generator** built using **HTML, CSS, and Vanilla JavaScript**.  
This project allows users to generate random quotes, save their favorites, like quotes, share them, and download them locally.

---

## 🚀 Features

- 🔄 Generate random quotes from a local JSON file
- ❤️ Like / unlike quotes with a heart icon
- 💾 Save and unsave favorite quotes using `localStorage`
- 👀 Show / hide saved quotes dynamically
- 📤 Share quotes using the system share menu (with clipboard fallback)
- ⬇️ Download the current quote as a `.txt` file
- 🎯 Clean UI state handling when switching quotes

---

## 🛠️ Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling & UI states
- **JavaScript (ES6+)** – Logic & interactivity
- **Font Awesome** – Icons
- **Browser Web APIs**
  - `fetch`
  - `localStorage`
  - `Blob`
  - `navigator.share`
  - `clipboard`

---

## 📂 Project Structure

```text
.
├── index.html
├── style.css
├── script.js
├── quotes.json
└── README.md
