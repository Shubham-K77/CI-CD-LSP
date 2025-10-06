# Stage 1: I build the app code
FROM node:18-alpine AS builder

# I set the working folder inside the image
WORKDIR /app

# I copy dependency files first
COPY package*.json ./

# I install the libraries
RUN npm install

# I copy the rest of the project
COPY . .

# I build the project (creates production files)
RUN npm run build

# Stage 2: I create a light image to run the app
FROM node:18-alpine

# I set the working folder
WORKDIR /app

# I bring only what I need from the first stage
COPY --from=builder /app/package*.json ./
# App metadata
COPY --from=builder /app/node_modules ./node_modules
# Installed libraries
COPY --from=builder /app/dist ./dist
# Built code

# I open port 3000 for the app
EXPOSE 3000

# I run the app
CMD ["npm", "start"]
