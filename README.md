# Full Stack Chat Application

This is a full stack chat application built with Next.js for the frontend, Express.js for the backend, Node.js for server-side logic, Shadcn UI for the user interface components, Tailwind CSS for styling, and Google Gemini API for authentication.

## Features

- **Real-time Chat**: Users can engage in real-time conversations with each other.
- **User Authentication**: Users can register and log in using Google Gemini API.
- **Unique Usernames**: Each user has a unique username.
- **Responsive Design**: The application is responsive and works well across different devices.
- **Secure Communication**: Messages are transmitted securely over HTTPS.
- **User-friendly Interface**: The interface is designed to be intuitive and easy to use.

## Technologies Used

### Frontend
- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://shadcn-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)

### Authentication
- [Google Gemini API](https://developers.google.com/)

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/parteekahlawat/iti-jmu-chat-app.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd iti-jmu-chat-app
    ```

3. **Install dependencies for both frontend and backend:**
    ```bash
    # Install frontend dependencies
    cd client
    npm install

    # Install backend dependencies
    cd ../server
    npm install
    ```

4. **Set up Google Gemini API:**
    - Obtain API credentials from Google Developer Console.
    - Set up OAuth 2.0 client IDs for the application.
    - Add the credentials to your environment variables.

5. **Start the backend server:**
    ```bash
    cd backend
    node server.js
    ```

6. **Start the frontend development server:**
    ```bash
    cd frontend
    npm run dev
    ```

7. **Access the application:**  
    Visit `http://localhost:3000` in your web browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to [Google](https://developers.google.com/) for providing the Gemini API.
- Built with [Next.js](https://nextjs.org/), [Express.js](https://expressjs.com/), [Shadcn UI](https://shadcn-ui.com/), and [Tailwind CSS](https://tailwindcss.com/).

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
