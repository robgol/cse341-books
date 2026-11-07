import app from './app.js';

const PORT = process.env.PORT;

// Throw an error if PORT is missing to verify .env loading
if (!PORT) {
  throw new Error('Environment variable PORT is missing. Check your .env file.');
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
