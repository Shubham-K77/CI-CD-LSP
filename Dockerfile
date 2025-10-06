# Stage 1: I install only the dependencies
FROM node:18-alpine AS deps

# I set the working folder
WORKDIR /app

# I copy only dependency files first (better layer caching)
COPY package*.json ./

# I install only production dependencies
RUN npm ci --omit=dev || npm install --omit=dev

# Stage 2: I create a small image to run the app
FROM node:18-alpine AS runner

# I set the working folder
WORKDIR /app

# I bring only the installed libraries from the deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package*.json ./

# I copy the rest of the project (source code)
COPY . .

# I open port 3000 for the app
EXPOSE 3000

# I run the app
CMD ["npm", "start"]
