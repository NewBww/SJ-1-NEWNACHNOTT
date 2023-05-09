#!/bin/bash
docker compose up --build --force-recreate --no-deps -d web database
docker compose up --build --force-recreate --no-deps -d announcement-api
