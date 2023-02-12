FROM node:18.14.0 as build

WORKDIR /app
COPY . .
RUN apt update
RUN npm cache clean --force
RUN npm ci
RUN npm run build

FROM nginx:1.23.1 as ngi

COPY --from=build /app/dist/city-site-angular /usr/share/nginx/html

COPY /nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /user/share/nginx/html && \
chown -R nginx:nginx /var/cache/nginx && \
chown -R nginx:nginx /var/log/nginx && \
chown -R nginx:nginx /etc/nginx/conf.d

RUN touch /var/run/nginx.pid && \
chown -R nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 8080
