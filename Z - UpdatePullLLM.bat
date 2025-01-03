@echo off

:: Set the console text color to cyan on dark yellow
color 36

:: Find the container name running from the image 'ollama/ollama'
for /f "delims=" %%i in ('docker ps --filter "ancestor=ollama/ollama" --format "{{.Names}}"') do set CONTAINER_NAME=%%i

:: Check if a container was found
if not defined CONTAINER_NAME (
    echo No running container found for the image 'ollama/ollama'. Please start it and try again.
    pause
    exit /b
)

:: Execute the command to pull models in the container
docker exec -it %CONTAINER_NAME% /bin/sh -c "ollama list | awk -F: 'NR>1 && !/reviewer/ {system(\"ollama pull \"$1)}'"

:: Pause the script to show the result
pause
