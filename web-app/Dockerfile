FROM node
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /web-app

COPY package-lock.json ./
COPY package.json ./
RUN npm install

COPY . /web-app

# RUN npm install --silent -g serve
# RUN npm run build
# CMD ["serve" , "-s", "build"]
CMD ["npm", "start"]
