FROM node:8.12

ARG PM2_PUBLIC_KEY
ARG PM2_SECRET_KEY

COPY . /app

WORKDIR /app

RUN npm install --production
RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY ${PM2_PUBLIC_KEY}
ENV PM2_SECRET_KEY ${PM2_SECRET_KEY}

EXPOSE 3000

CMD ["pm2-runtime", "./dist/bin/www.js"]