FROM node:18-alpine
WORKDIR /singh_gursharan_final_site
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 5575
CMD ["serve", "-s", "build", "-l", "5575"]