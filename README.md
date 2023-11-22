# E-Commerce Web Application

This E-Commerce Web Application is a feature-rich platform built with React, Node.js, Express.js, and MongoDB. It offers users a seamless online shopping experience with a wide range of products. Users can search, filter products, and make purchases securely. The application incorporates Redux for efficient state management, ensuring smooth interaction and seamless browsing.

## Screenshots

![nykka (2)](https://github.com/ashwani312/NykaaFashion/assets/105036643/6e8761f7-f3eb-45ed-8c27-545e0e551221)

## Key Features

- **Product Search:** Users can easily search for products based on keywords, ensuring a quick and convenient shopping experience.
- **Product Filtering:** The application allows users to filter products by categories, prices, ratings, and other attributes, helping them find the products that meet their specific requirements.
- **Shopping Cart:** Users can add products to their shopping cart, review items, and adjust quantities before making a purchase.
- **User Authentication:** Secure user authentication and authorization mechanisms ensure a safe environment for users to manage their accounts and make purchases.
- **Product Slides:** Engaging slides showcasing featured products or promotions, enhancing the user experience.
- **Redux State Management:** Utilizes Redux for efficient state management, providing a centralized store for easy access and modification of application data.
- **Order Management:** Users can view their order history, track orders, and manage their purchases conveniently.

## Technologies Used

### Frontend

- **React:** JavaScript library for building user interfaces, providing a fast and interactive user experience.
- **Redux:** State management library for managing application state and actions efficiently.
- **React Router:** Declarative routing for React applications, enabling seamless navigation between pages.
- **React Slick:** Carousel component for creating engaging product slides.
- **Axios:** HTTP client for making API requests to the backend.

### Backend

- **Node.js:** JavaScript runtime environment for server-side applications.
- **Express.js:** Web application framework for Node.js, providing robust features for building APIs and web applications.
- **MongoDB:** NoSQL database for storing product information, user data, and order details.
- **Mongoose:** MongoDB object modeling tool for Node.js, simplifying interactions with MongoDB databases.
- **JWT:** JSON Web Tokens for secure authentication and authorization.
- **Bcrypt:** Library for hashing passwords, enhancing security.
- **Express Validator:** Middleware for data validation, ensuring data integrity.

## Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ashwani312/NykaaFashion
   ```

2. **Install Dependencies:**

   ```bash
   cd client
   npm install

   cd ../api
   npm install
   ```

3. **Configure Environment Variables:**

   - Create a `.env` file in the `backend` directory and set the necessary environment variables, including database connection details, JWT secret, and other configuration parameters.

4. **Start the Application:**

   - Start the backend server:

     ```bash
     cd api
     npm start
     ```

   - Start the frontend development server:

     ```bash
     cd client
     npm start
     ```

   Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Happy Shopping! 🛍️**
