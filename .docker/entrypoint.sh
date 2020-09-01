#!/bin/sh
envsubst < .env.tpl > .env

echo "Starting Nginx"
nginx -g 'daemon off;'
