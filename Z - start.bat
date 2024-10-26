@echo off

color 2f

REM Start the Ollama container
docker start ollama


color f2

REM Start the open-webui container
docker start open-webui

pause
