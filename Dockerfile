FROM node:12

COPY / /workspace
WORKDIR /workspace

RUN yarn
RUN yarn build

VOLUME ["/logs"]

CMD ["yarn", "start:production"]
