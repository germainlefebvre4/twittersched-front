FROM node:10-stretch-slim AS builder

RUN apt-get update && \
    apt-get install -y git gettext && \
    apt-get clean

COPY . /home/node
WORKDIR /home/node

RUN npm install yarn && \
    yarn install && \
    yarn build

FROM nginx:stable AS runner
COPY --from=builder /home/node/dist /usr/share/nginx/html
COPY .docker/entrypoint.sh /entrypoint.sh
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["/bin/sh", "entrypoint.sh"]
