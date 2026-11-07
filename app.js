import express from 'express';

const app = express();

// JSON request body middleware
app.use(express.json());

// Root route (GET /) returning a 200 OK status and JSON response
app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to the CSE 341 Books API!',
    status: 'success'
  });
});

export default app;
