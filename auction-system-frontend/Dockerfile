# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the desired port (replace 3000 with the port your React app listens on)
EXPOSE 3000

# Set the command to run when the container starts
CMD ["npm", "start"]