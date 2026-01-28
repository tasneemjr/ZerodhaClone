# ZerodhaClone

A full-stack clone of the Zerodha trading platform built with React, Node.js, and MongoDB.

## Project Structure

```
ZerodhaClone/
├── frontend/           # React landing page and main UI
├── dashboard/          # Trading dashboard with Vite
├── backend/            # Node.js backend API
└── README.md          # Project documentation
```

## Features

### Frontend
- Landing page with hero section, pricing, products, and support pages
- Responsive design with Font Awesome icons
- React Router for navigation
- Service-based architecture

### Dashboard
- Interactive trading dashboard
- Holdings, Orders, and Positions management
- Real-time data visualization with charts (Doughnut, Vertical Graph)
- Fund management
- Buy/Sell action windows

### Backend
- Node.js and Express.js API server
- MongoDB integration for data persistence
- Mongoose schemas for Holdings, Orders, and Positions
- RESTful API endpoints

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd backend
npm install
# Configure your MongoDB connection in the code
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will open at `http://localhost:3000`

### Dashboard Setup

```bash
cd dashboard
npm install
npm run dev
```

The dashboard will open at `http://localhost:5173`

## Technology Stack

- **Frontend**: React 19, React Router 7, React Scripts 5
- **Dashboard**: Vite, React
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **Testing**: Jest, React Testing Library
- **Build Tools**: Webpack, Vite

## API Endpoints

The backend provides RESTful API endpoints for:
- Holdings management
- Orders management
- Positions management

## Available Scripts

### Frontend
- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from create-react-app (irreversible)

### Dashboard
- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start the server

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is open source and available under the MIT License.

## Disclaimer

This is an educational project created to understand trading platform architecture and is not affiliated with Zerodha.
