@echo off

color 3f
REM Log in to Docker
docker login

color f3
REM Stop the Ollama container
docker stop ollama

color 3f
REM Remove the Ollama container
docker rm ollama

color f3
REM Stop the open-webui container
docker stop open-webui

color 3f
REM Remove the open-webui container
docker rm open-webui

color f3
REM Pull the latest Ollama image
docker pull ollama/ollama

color 3f
REM Pull the latest open-webui image
docker pull ghcr.io/open-webui/open-webui:main

color f3
REM Remove old Ollama image if exists
for /f "tokens=3" %%i in ('docker images -f "dangling=true" -q') do docker rmi %%i

color 3f
REM Remove old open-webui image if exists
for /f "tokens=3" %%i in ('docker images -f "dangling=true" -q') do docker rmi %%i

color f3
REM Run the open-webui container
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main

color 3f
REM Run the Ollama container
docker run -d --restart always --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
