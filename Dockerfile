FROM node:22-alpine AS build
RUN npm install -g pnpm
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm i
COPY . .
RUN pnpm run build
RUN pnpm prune --prod

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["pnpm", "run", "start"] 
