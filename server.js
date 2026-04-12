// Can be ignored by Vercel, only for local dev. 
// npx tsx server.js 
import express from 'express';
import dotenv from 'dotenv';
import submitHandler from './api/submit.ts';

// Only load .env.local if we are NOT in production
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env.local' }); 
}

const app = express();
app.use(express.json()); 

app.post('/api/submit', submitHandler);

// Use a dynamic port if provided, otherwise default to 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Local API backend running on http://localhost:${PORT}`);
});