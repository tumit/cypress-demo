FROM cypress/included:3.8.0

COPY package*.json ./

RUN npm install --no-optional
