#!/usr/bin/env bash

watchman -j < config/watchman/watch.json
watchman -j < config/watchman/server-restart.json
watchman -j < config/watchman/yarn-install.json
