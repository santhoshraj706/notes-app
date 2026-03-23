# 📝 Notes App (MERN) — In Progress

## Status
🚧 Backend complete | Frontend (React) pending

## ✅ Completed
- `server/server.js` — Express server with middleware and routes
- `server/models/User.js` — User schema (name, email, hashed password)
- `server/models/Notes.js` — Note schema (title, content, user)
- `server/routes/auth.js` — Signup and Login with JWT
- `server/routes/notes.js` — Full CRUD for notes
- `server/middleware/auth.js` — JWT token bouncer (protects notes routes)

## 🚧 Pending
- React frontend (client/)

## Stack
MongoDB · Express · React · Node.js · JWT

## Run Locally
```bash
cd server
node server.js
```

## API Endpoints (Test with Thunder Client / Postman)

| Method | URL | Auth Required | Body |
|--------|-----|---------------|------|
| POST | /auth/signup | ❌ | name, email, password |
| POST | /auth/login | ❌ | email, password |
| GET | /notes | ✅ | — |
| POST | /notes | ✅ | title, content |
| PUT | /notes/:id | ✅ | title, content |
| DELETE | /notes/:id | ✅ | — |

> For protected routes add header: `Authorization: Bearer yourtoken`
> Get token from /auth/login response
