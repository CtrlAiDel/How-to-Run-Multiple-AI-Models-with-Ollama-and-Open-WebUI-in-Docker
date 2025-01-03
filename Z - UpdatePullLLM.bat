@echo off

color 36


docker exec -it b569c998bf01 /bin/sh -c "ollama list | awk -F: 'NR>1 && !/reviewer/ {system(\"ollama pull \"$1)}'"


pause
