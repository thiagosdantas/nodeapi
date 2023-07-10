FROM node:16.20.1
WORKDIR /nodeapi
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]