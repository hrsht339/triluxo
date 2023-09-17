# Simple Bookstore API

This is a basic Bookstore API built with Node.js, Express.js, and MongoDB using Mongoose. It allows you to manage a collection of books.

## Getting Started

1. Clone the repository:
git clone https://github.com/hrsht339/triluxo.git

2. Navigate to the project folder:
cd triluxo

3. Install required packages:
npm install

4. Set up MongoDB connection in `db.js`.

## Deployed App
https://triluxo.onrender.com/

## Video Walkthrough of the project
https://vimeo.com/865245892/b29e24f812

## Postman Collection link
https://restless-shadow-616131.postman.co/workspace/my-workspace~92abef05-2c5d-484c-b7cb-12aa4c6b2c4f/collection/24260844-158c0f67-7f6e-4b06-9398-416f1732b85d?action=share&creator=24260844

## Endpoints

- **GET /api/books**: Get a list of all books.
- **GET /api/books/:id**: Get a specific book by ID.
- **POST /api/books**: Add a new book.
- **PUT /api/books/:id**: Update an existing book.
- **DELETE /api/books/:id**: Delete a book.

## Error Handling

The API handles errors with appropriate status codes:

- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

## Environment Variables

- `PORT` (default: 3000): Server port.
- `MONGODB_URI`: MongoDB connection string.

## Running the Application

Start the server:
npm start

Access the API at `http://localhost:<PORT>/api/books`.

Enjoy using the Bookstore API in your applications!




