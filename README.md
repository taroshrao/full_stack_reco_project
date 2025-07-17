# 🎯 Recommendation Web App

A dynamic web application that provides smart recommendations based on user queries—whether you're hunting for books, movies, podcasts, courses, or more. Users can either type in custom queries or choose from predefined prompt buttons, and the app interacts with a backend API to fetch personalized suggestions.

![App Screenshot 1](https://github.com/user-attachments/assets/3a763112-307c-41c5-a5f7-db32c6da1737)
![App Screenshot 2](https://github.com/user-attachments/assets/0248cc10-5ba8-4233-9a49-4261b674e3bc)

---

## ✨ Features

- **Dynamic Search Input**: Enter any query and get tailored recommendations.
- **Prompt Buttons**: One-click access to curated recommendation templates (e.g., _Suggest books about habits_, _Recommend movies like Inception_).
- **Loading Indicator**: Displays _"Searching..."_ while results are being fetched.
- **Error Handling**: Notifies users if something goes wrong during the fetch process.
- **Responsive UI**: Designed with Tailwind CSS for seamless mobile and desktop experiences.

---

## 🛠️ Technologies

### Frontend
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend
_Any RESTful backend (not bundled in repo)—can be built with:_
- Node.js (Express)
- Python (Flask/Django)
- Ruby on Rails
- Go
- Or any other framework that supports REST APIs

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. Frontend Setup

Navigate to your frontend directory (replace `<frontend-directory>` if needed):

```bash
cd <frontend-directory> # Example: cd .
npm install             # or yarn install
```

### 3. Backend Setup

Ensure your backend is running at `http://localhost:8000`.

```bash
cd <backend-directory>
# For Node.js
npm install
npm start

# For Python (Flask/Django)
pip install -r requirements.txt
python app.py
```

### 🔧 CORS Configuration (Important!)

If your frontend is at port `3000` and backend is at `8000`, you must configure CORS on the backend:

#### Node.js (Express)

```js
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
```

#### Python (Flask)

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000"
]
CORS_ALLOW_CREDENTIALS = True
```

Ensure you update the fetch URL and credentials mode in your frontend code accordingly:

```js
const response = await fetch("http://localhost:8000/api/recommend", {
  credentials: "include"
});
```

> ⚠️ If your backend runs on a different port, modify the URL in `src/components/MainContentSection.js` (line 21).

---

### 4. Run the Frontend Server

```bash
npm run dev  # or yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🎓 Usage

1. Navigate to `http://localhost:3000`.
2. Type a query into the search bar or click a prompt button.
3. View instant recommendations based on your input.

---

## 🤝 Contributing

Feel free to fork, branch, and submit a pull request for improvements, bug fixes, or new features!

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---
