#!/usr/bin/env bash

echo $PWD

args=("$@")
if [[ "${args[0]}" == "install" && -e "/run/secrets/npm_credentials" ]]; then
  source /run/secrets/npm_credentials
  export FONT_AWESOME_NPM_TOKEN GSAP_NPM_TOKEN
  yarn install
fi

pkill -f node
yarn start:dev &
disown
