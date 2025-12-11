{
  "name": "skwela-alert-backend",
  "version": "1.0.0",
  "description": "Backend server for Skwela Alert Emergency Notification System",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": ["alerts", "sms", "emergency", "school", "skwela"],
  "author": "Skwela Alert Team",
  "license": "MIT",
  "dependencies": {
    "express": "4.18.2",
    "cors": "2.8.5",
    "pg": "8.11.3",
    "bcryptjs": "2.4.3",
    "jsonwebtoken": "9.0.2"
  },
  "engines": {
    "node": "18.x"
  }
}
