Contact Management Backend

Backend for a Contact Management system built with Node.js, Express, MongoDB, and JWT for authentication. Supports CRUD operations with error handling and protected routes.

Technologies Used
Node.js & Express (Backend framework)
MongoDB (Database)
Mongoose (ODM)
JWT (Authentication)
Installation & Setup
Clone the repo:

bash
Copy
git clone https://github.com/yourusername/contact-management-backend.git
Install dependencies:

bash
Copy
npm install
Set up environment variables:

plaintext
Copy
PORT=5000
MONGO_URI=mongodb://your-mongo-uri
JWT_SECRET=your-jwt-secret
Start the server:

bash
Copy
npm start
Endpoints
GET /api/contacts: Fetch all contacts.
GET /api/contacts/:id: Fetch a single contact.
POST /api/contacts: Add a new contact.
PUT /api/contacts/:id: Update contact by ID.
DELETE /api/contacts/:id: Delete contact by ID.
Authentication: All routes require JWT authentication.

Error Handling
Proper error responses for validation, database, and authentication issues.

JWT Authentication
Routes are protected with JWT. Tokens are required for performing any CRUD operations.

License
MIT License. See LICENSE for more details.
