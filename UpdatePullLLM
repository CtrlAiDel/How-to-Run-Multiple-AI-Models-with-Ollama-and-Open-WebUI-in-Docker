@echo off

color 36


docker exec -it ollama /bin/sh -c "ollama list | awk -F: 'NR>1 && !/reviewer/ {system(\"ollama pull \"$1)}'"


pause
