# Consultation Backend API

Express.js + MongoDB backend for handling consultation form submissions from True Prime Digital app.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Update `.env` with your MongoDB Atlas connection string
   - Set `MONGO_URI=your-mongodb-atlas-url-here`

3. Run development server:
```bash
npm run dev
```

4. Run production server:
```bash
npm start
```

## API Endpoints

### POST `/api/consultations`
Submit a new consultation request.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "emailAddress": "john@example.com",
  "phoneNumber": "+1234567890",
  "message": "I need help with my website"
}
```

**Response:**
```json
{
  "success": true,
  "message": "✅ Consultation saved successfully"
}
```

## Project Structure

```
consultation-backend/
├── server.js                 # Main Express server
├── package.json              # Dependencies and scripts
├── .env                      # Environment variables (not committed)
├── routes/
│   └── consultationRoutes.js # API routes
├── controllers/
│   └── consultationController.js # Business logic
└── models/
    └── Consultation.js       # MongoDB schema
```

