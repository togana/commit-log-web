FROM node:8.3.0 AS build

WORKDIR /usr/src/app
COPY . /usr/src/app
ONBUILD RUN yarn && \
    yarn build

FROM nginx:1.13.3-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
