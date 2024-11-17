@echo off

color 36

REM Step 1: Retrieve the list of LLMs and stop them
echo Fetching LLM list...
docker exec ollama /bin/sh -c "ollama list | awk -F: 'NR>1 && !/reviewer/ {print $1}'" > llm_list.txt

for /f "delims=" %%i in (llm_list.txt) do (
    echo Stopping LLM: %%i
    docker exec ollama /bin/sh -c "ollama stop %%i"
)

REM Stop the Ollama container
echo Stopping the Ollama container...
docker stop ollama

REM Restart the Ollama container
echo Restarting the Ollama container...
docker start ollama

pause
