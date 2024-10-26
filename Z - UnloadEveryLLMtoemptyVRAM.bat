@echo off

color 36

REM Step 1: Stop all LLMs within the container
echo Stopping all LLMs...
docker exec -it ollama /bin/sh -c "ollama list | awk -F: 'NR>1 && !/reviewer/ {print $1}'" | for /f "delims=" %%i in ('more') do (
    echo Stopping LLM: %%i
    docker exec -it ollama /bin/sh -c "ollama stop %%i"
)


REM Stop the Ollama container first
echo Stopping the Ollama container...
docker stop ollama


REM Restart the Ollama container
echo Restarting the Ollama container...
docker start ollama

pause
