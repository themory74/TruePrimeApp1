# 🧪 TruePrimeApp1 Backend Connection Test Guide

## ✅ Connection Setup Complete

Your React Native app is now configured to connect to your live Render backend:
- **Backend URL**: `https://consultation-backend-oz6l.onrender.com`
- **API Endpoint**: `/send-message`
- **API Helper**: `/app/api/api.ts` (with automatic wake-up handling)

---

## 🔍 How to Test the Connection

### Option 1: Test from React Native App (Recommended)

1. **Start your React Native app:**
   ```bash
   npm start
   # or
   npx react-native start
   ```

2. **Open the Consultation screen** in your simulator/device

3. **Fill out the form** with test data:
   - Name: `System Test`
   - Email: `systemtest@trueprimedigital.com`
   - Phone: `999-999-9999`
   - Message: `This is a live connection test from TruePrimeApp1.`

4. **Submit the form** and watch for:
   - ✅ Success alert in the app
   - ✅ Console logs showing backend connection
   - ✅ Check Render dashboard logs for:
     - `💾 Saved consultation: System Test`
     - `✅ Email successfully sent via Brevo API`
   - ✅ Check your email inbox for Brevo notification
   - ✅ Check MongoDB Atlas for new consultation document

### Option 2: Test from Terminal (Quick Debug)

Run the test script:
```bash
node test-backend-connection.js
```

Or use curl directly:
```bash
curl -X POST https://consultation-backend-oz6l.onrender.com/send-message \
  -H "Content-Type: application/json" \
  -d '{"name":"System Test","email":"systemtest@trueprimedigital.com","phone":"999-999-9999","message":"This is a live connection test from TruePrimeApp1."}'
```

---

## ⚠️ Important Notes

### Render Free Tier Behavior
- Render free tier services **sleep after 15 minutes of inactivity**
- First request after sleep may take **30-60 seconds** to wake up
- The API helper now includes **automatic wake-up logic** that:
  1. Detects 404 responses (service sleeping)
  2. Hits the root endpoint to wake up the service
  3. Waits 2 seconds for service to fully wake up
  4. Retries the request automatically

### Expected Behavior
- **First request** (if service is sleeping): May take 30-60 seconds
- **Subsequent requests**: Should be fast (1-2 seconds)
- **Error handling**: Improved error messages for network issues

---

## ✅ Success Indicators

When everything works correctly, you should see:

1. **Frontend (React Native app):**
   - Success alert: "✅ Your consultation request has been sent!"
   - Console log: "✅ Consultation sent successfully: {success: true, message: '...'}"

2. **Render Dashboard Logs:**
   ```
   ✅ Connected to MongoDB
   ✅ Brevo API Connected
   💾 Saved consultation: System Test systemtest@trueprimedigital.com
   ✅ Email successfully sent via Brevo API
   ```

3. **Email Inbox:**
   - Email from Brevo/Sendinblue with subject: "📩 New Consultation from System Test"
   - Contains all form data (name, email, phone, message)

4. **MongoDB Atlas:**
   - New document in `consultations` collection
   - Fields: `fullName`, `emailAddress`, `phoneNumber`, `message`, `createdAt`

---

## 🐛 Troubleshooting

### Problem: 404 Not Found
- **Cause**: Render service is sleeping
- **Solution**: Wait 30-60 seconds and try again (automatic retry should handle this)

### Problem: Network Request Failed
- **Cause**: No internet connection or backend URL incorrect
- **Solution**: Check internet connection and verify backend URL in `/app/api/api.ts`

### Problem: Backend error (500)
- **Cause**: MongoDB or Brevo API issue
- **Solution**: Check Render dashboard logs for specific error messages

### Problem: Email not received
- **Cause**: Brevo API issue or email in spam folder
- **Solution**: Check Render logs for Brevo errors, check spam folder

---

## 📝 Files Modified

- ✅ `/app/api/api.ts` - Centralized API helper with Render backend URL
- ✅ `/app/screens/ConsultationScreen.tsx` - Updated to use API helper
- ✅ `/test-backend-connection.js` - Standalone test script (optional)

---

## 🚀 Next Steps

1. Test the connection using the app or test script
2. Monitor Render dashboard logs during first request
3. Verify email delivery and MongoDB save
4. Consider upgrading Render plan if you need faster wake-up times

---

**Last Updated**: November 5, 2025
**Backend URL**: `https://consultation-backend-oz6l.onrender.com`


