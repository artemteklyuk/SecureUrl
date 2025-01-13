FROM node:21-alpine as build

WORKDIR /build/app
COPY . .

RUN npm install && \
    npm run build && \
    npm prune --omit=dev

FROM node:21-alpine as production

WORKDIR /app

COPY --from=build /build/dist ./dist
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/package.json ./package.json
COPY --from=build /build/package-lock.json ./package-lock.json

CMD npm run start:prod