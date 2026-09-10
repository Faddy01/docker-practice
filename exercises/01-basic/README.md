# Exercise 1: Basic Docker Setup

## Objectives
- Create a Node.js HTTP server
- Build a Docker image
- Run container with port mapping
- Access application from browser

## Files
- `app.js` - Node.js HTTP server
- `package.json` - Dependencies
- `Dockerfile` - Container configuration

## Build & Run

```bash
docker build -t my-app:v1 .
docker run -p 3000:3000 my-app:v1
```

## Test

```bash
curl http://localhost:3000
```

        ## Expected Output
