#!/usr/bin/env bash

args="$*"

case $args in
  serve)
    echo "Starting development server"
    pkill -f "start:dev"
    yarn start:dev 1> /dev/stdout 2> /dev/stderr &
    disown
    ;;

  watchman)
    echo "Configuring watches..."

    for j in config/watchman/*.json; do
      echo "Watching $j"
      watchman -j < "$j"
    done
    ;;

  yarn)
    echo "Running yarn install..."
    [[ -e "/run/secrets/npm_credentials" ]] || echo "No NPM credentials" && exit 1
    source /run/secrets/npm_credentials && export FONT_AWESOME_NPM_TOKEN GSAP_NPM_TOKEN
    yarn install
    ;;

  *)
    echo "Unknown command: $args"
    ;;
esac
