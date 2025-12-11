services:
  - type: web
    name: skwela-alert-backend
    env: node
    buildCommand: npm install
    startCommand: node server.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        fromDatabase:
          name: skwela-alert-db
          property: connectionString

databases:
  - name: skwela-alert-db
    databaseName: skwela_alert
    user: skwela_user
