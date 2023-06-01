#!/bin/bash
docker compose up --build --force-recreate -d web database
docker compose up --build --force-recreate -d announcement-api
