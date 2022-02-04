#!/usr/bin/env bash

set -euxo pipefail

args="$*"

restart_server() {
  echo "Starting development server"

  pkill -f "start:dev" || true

  /usr/local/bin/yarn start:dev &
  disown
}

configure_watches() {
  echo "Configuring watches..."

  for j in config/watchman/*.json; do
    echo "Watching $j"
    /usr/local/bin/watchman -j <"$j"
  done
}

yarn_install() {
  echo "Running yarn install..."

  [[ -e "/run/secrets/npm_credentials" ]] || { echo "No NPM credentials" && exit 1; }
  source /run/secrets/npm_credentials && export FONT_AWESOME_NPM_TOKEN GSAP_NPM_TOKEN
  /usr/local/bin/yarn install
}

case $args in
serve)
  restart_server
  ;;

watchman)
  configure_watches
  ;;

yarn)
  yarn_install
  restart_server
  ;;

*)
  echo "Unknown command: $args"
  ;;
esac
