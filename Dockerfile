FROM --platform=arm64 node:17-alpine

ARG FONT_AWESOME_NPM_TOKEN
ARG GSAP_NPM_TOKEN

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

RUN FONT_AWESOME_NPM_TOKEN=${FONT_AWESOME_NPM_TOKEN} GSAP_NPM_TOKEN=${GSAP_NPM_TOKEN} yarn install && yarn cache clean --all

COPY ./ ./

CMD ["yarn"]
