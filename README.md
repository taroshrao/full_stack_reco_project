Recommendation Web App
Overview
This is a web application designed to provide recommendations based on user queries. Users can type their requests into an input field or select from a list of pre-defined prompt buttons to get suggestions for books, movies, podcasts, courses, and more. The application interacts with a backend API to fetch these recommendations.
<img width="1899" height="985" alt="image" src="https://github.com/user-attachments/assets/3a763112-307c-41c5-a5f7-db32c6da1737" />
<img width="1910" height="984" alt="image" src="https://github.com/user-attachments/assets/0248cc10-5ba8-4233-9a49-4261b674e3bc" />

Features
Dynamic Search Input: Users can type any query to get recommendations.

Prompt Buttons: Quick access buttons for common recommendation types (e.g., "Suggest books about habits", "Recommend movies like Inception").

Loading Indicator: Shows "Searching..." when a request is in progress.

Error Display: Informs the user if there's an error during the recommendation process.

Responsive Design: Built with Tailwind CSS for a mobile-first and responsive user experience.

Technologies Used
Frontend:

React (with Next.js)

Tailwind CSS

Backend: (Assumed, as per the fetch call in the code)

Any backend technology capable of serving a REST API (e.g., Node.js, Python Flask/Django, Ruby on Rails, Go, etc.)

Setup Instructions
To get this project up and running on your local machine, follow these steps:

1. Clone the Repository
git clone <your-repository-url>
cd <your-project-folder>

2. Frontend Setup (Next.js)
Navigate to the frontend directory (assuming your React/Next.js code is in the root or a frontend folder).

cd <frontend-directory> # e.g., cd . if your Next.js app is in the root
npm install # or yarn install

3. Backend Setup
Note: The backend code is not provided here. You will need to have your backend API running for the frontend to function correctly.

Navigate to your backend project directory.

cd <backend-directory>

Install backend dependencies. (Example for Node.js/Python)

For Node.js: npm install

For Python: pip install -r requirements.txt

Start your backend server. Ensure it's running on the port expected by the frontend (currently http://localhost:8000).

Example command: npm start or python app.py

Important: If your backend runs on a different port, you will need to update the fetch URL in src/components/MainContentSection.js (line 21) to match your backend's actual port.

// src/components/MainContentSection.js
// ...
const response = await fetch("http://localhost:8000/api/recommend", { // Change 8000 if your backend uses a different port
// ...

Configure CORS (Cross-Origin Resource Sharing) on your backend.
If your frontend and backend are running on different ports (e.g., frontend on 3000, backend on 8000), you must enable CORS on your backend to allow requests from the frontend. Refer to your backend framework's documentation for how to do this (e.g., cors package for Node.js Express, Flask-CORS for Python Flask).

4. Run the Frontend
Once your backend server is running, start the Next.js development server:

npm run dev # or yarn dev

The application should now be accessible in your browser at http://localhost:3000 (or the port Next.js specifies).

Usage
Open your browser and navigate to the application URL (e.g., http://localhost:3000).

Type your recommendation query into the search bar.

Click the "Search" button or select one of the prompt buttons.

The application will display recommendations fetched from the backend.

Contributing
Contributions are welcome! Please feel free to fork the repository, create a new branch, and submit a pull request for any improvements or bug fixes.

License
This project is open-source and available under the MIT License.
