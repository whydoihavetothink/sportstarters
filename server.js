// Can be ignored, only for local dev. For local testing run `node server.js` and it will start a local Express server that mimics the Vercel API route. Make sure to have your .env.local file set up with the correct SHEETDB_API_URL for it to work properly.
import express from 'express';
import dotenv from 'dotenv';
import submitHandler from './api/submit.ts';

dotenv.config({ path: '.env.local' }); // Load your local environment variables

const app = express();
app.use(express.json()); // This parses the JSON body (which Vercel usually does for you)

// Route the request to your Vercel function
app.post('/api/submit', submitHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Local API backend running on http://localhost:${PORT}`);
});