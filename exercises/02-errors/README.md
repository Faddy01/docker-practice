# Exercise 2: Error Handling - Missing Dependencies

## Objective
Learn to identify and fix missing npm dependencies

## The Error Scenario
- `app.js` requires `express`
- `package.json` does NOT include express
- Build succeeds, but runtime fails

## Build the Image

```bash
docker build -t my-app:v2-error .
```

## Run the Container

```bash
docker run my-app:v2-error
```

## Expected Error
