# 📝 Notes App (MERN) — In Progress

## Status
🚧 Backend complete | Frontend (React) pending

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
