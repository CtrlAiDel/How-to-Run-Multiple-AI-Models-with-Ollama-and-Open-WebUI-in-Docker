
@echo off

color 4f
REM Log in to Docker
docker login

color f4
REM Stop the Ollama container
docker stop ollama

color 4f
REM Stop the open-webui container
docker stop open-webui
