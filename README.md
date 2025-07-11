# Project-Wanderlust

# WanderHotels – Full-Stack Travel Stay App

WanderHotels is a full-stack travel stay listing platform where users can explore and review properties, and hotel owners can add and manage their own listings.  
Built from scratch using Node.js, Express.js, MongoDB, and EJS.

---

## ✨ Features

- User registration and login
- Create, edit, and delete hotel/property listings
- Upload multiple images (via Cloudinary)
- Map-based location integration (Mapbox)
- Review system with star ratings and comments
- Search and responsive design for all devices

---

## 🛠 Tech Stack

- **Frontend:** EJS, HTML, CSS, Bootstrap  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** Passport.js, express-session  
- **Cloud Services:** Cloudinary, Mapbox  
- **Deployment:** Render

---

## 🚀 Getting Started

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/mohammadsufiyan1808/Project-Wanderlust.git
   cd Project-Wanderlust
   npm install
2.	Create a .env file and add:
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_url
SESSION_SECRET=your_session_secret

3.	Start the app:
npm start
Visit: http://localhost:3000/listings
