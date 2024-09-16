FROM node:20-alpine as BUILD

WORKDIR /finder/front

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5173

RUN yarn build

CMD ["yarn", "preview"]
