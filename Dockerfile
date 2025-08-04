# 1단계: build
FROM node:22-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# 2단계: nginx로 서빙
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
