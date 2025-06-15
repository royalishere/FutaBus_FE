# FutaBus - Bus Ticket Booking System

A modern, responsive web application for booking bus tickets online, built with React and Vite. This project provides a comprehensive solution for bus ticket reservation with features including route search, schedule viewing, seat selection, and payment processing.

## 🚌 Demo

Check out the live demo of the application: [FutaBus Demo](https://drive.google.com/file/d/1n3QrLpCp6n2Z0Rb2qPkwNskXy5fm7cVh/view?usp=sharing)

## ✨ Features

- **Home Page**: Overview of the bus service with company statistics
- **Route Search**: Search for available bus routes between cities
- **Ticket Booking**: Book bus tickets with seat selection
- **User Authentication**: Login system for users
- **Payment Processing**: Secure payment information handling
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Modern UI**: Clean and intuitive user interface with Bootstrap components

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.3.1
- **Styling**: 
  - Tailwind CSS 3.4.4
  - Bootstrap 5.3.3
  - React Bootstrap 2.10.4
  - Sass 1.77.6
- **Routing**: React Router DOM 6.24.0
- **HTTP Client**: Axios 1.7.2

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FutaBus_FE/FutaBus
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
FutaBus/
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── components/      # Reusable React components
│   ├── contexts/        # React context providers
│   ├── pages/           # Page components
│   │   ├── HomePage/    # Home page
│   │   ├── Login/       # Authentication
│   │   ├── Booking/     # Ticket booking
│   │   ├── OrderTicket/ # Order management
│   │   ├── Payment/     # Payment processing
│   │   ├── Schedule/    # Bus schedules
│   │   └── SearchTicket/ # Ticket search
│   ├── services/        # API service functions
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.scss       # Global styles
├── public/              # Public assets
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## 🎯 Key Features Breakdown

### 🏠 Home Page
- Company overview and statistics
- Route selection interface
- Responsive design showcasing service quality

### 🔍 Search & Booking
- Search for bus routes between cities
- View available schedules and departure times
- Select seats and book tickets

### 💳 Payment System
- Secure payment information processing
- Multiple payment options support

### 👤 User Management
- User authentication and login system
- Booking history and management

## 🙏 Acknowledgments

- Inspired by FUTA Bus Lines (Phương Trang) - one of Vietnam's leading bus transportation companies
- Built with modern React ecosystem and best practices
- UI/UX designed for optimal user experience in bus ticket booking

---

**Note**: This is a frontend application. Make sure to configure the appropriate backend API endpoints in the services layer for full functionality.
