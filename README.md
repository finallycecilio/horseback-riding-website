# Horseback Riding School Website

A full-featured website for a horseback riding school/stable featuring service showcase, booking system, photo gallery, and educational blog content.

## 📋 Features

- **Service Showcase**: Display riding lessons, trail rides, and special programs
- **Booking/Reservation System**: Online booking with availability calendar
- **Photo Gallery**: Showcase horses, facilities, and happy riders
- **Blog/Educational Content**: Articles about horseback riding, care tips, and news
- **Admin Dashboard**: Manage bookings, content, inventory, and instructors
- **Payment Processing**: Secure online payments for reservations
- **User Accounts**: Member profiles and booking history

## 🏗️ Architecture

### Frontend
- **Framework**: Next.js with React
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **UI Components**: shadcn/ui
- **Language**: TypeScript

### Backend
- **Framework**: Flask with SQLAlchemy
- **Language**: Python
- **Database**: PostgreSQL
- **API**: RESTful API
- **Authentication**: JWT tokens
- **Payment**: Stripe integration

## 📁 Project Structure

```
horseback-riding-website/
├── frontend/                    # Next.js React application
│   ├── app/
│   ├── components/
│   ├── pages/
│   ├── public/
│   ├── styles/
│   └── package.json
├── backend/                     # Python Flask API
│   ├── app/
│   ├── migrations/
│   ├── tests/
│   ├── requirements.txt
│   └── config.py
├── docker-compose.yml
├── .github/
│   └── workflows/
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.10+
- PostgreSQL 14+
- Docker & Docker Compose (optional)

### Development Setup

**Using Docker Compose (Recommended):**
```bash
docker-compose up
```

**Manual Setup:**

1. **Backend Setup**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
flask db upgrade
flask run
```

2. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

## 🔐 Environment Variables

Create `.env.local` in frontend and `.env` in backend directories with:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
DATABASE_URL=postgresql://user:password@localhost:5432/horseback_db
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-key
STRIPE_PUBLIC_KEY=your-public-key
```

## 📚 Database Schema

Key entities:
- **Users**: Members, instructors, admins
- **Horses**: Horse profiles with details
- **Instructors**: Staff profiles with specializations
- **Services**: Lesson types, trail rides, programs
- **Lessons**: Scheduled lessons
- **Bookings**: Reservation records
- **BlogPosts**: Articles and educational content
- **Gallery**: Photo management

## 🧪 Testing

```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

## 📦 Deployment

- **Frontend**: Vercel, Netlify, or self-hosted
- **Backend**: Heroku, Railway, AWS, or self-hosted
- **Database**: PostgreSQL on RDS, Render, or self-hosted

## 📝 License

MIT

## 👤 Author

finallycecilio

---

**Status**: 🚧 In Development
