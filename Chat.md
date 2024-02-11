Mixtral is the AI
Mistral is a fork of the AI
nothing from ollama is internet compatible

ollama run mistral


install docker desktop

win + r
or type it in powershell anyway
and type pwsh

now just run 

docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v ollama-webui:/app/backend/data --name ollama-webui --restart always ghcr.io/ollama-webui/ollama-webui:main

also completely delete the folder of the old ui we dont need that anymore

u have to wait for the docker desktop to fully open before running the command

yeah just that
once its done open http://localhost:3000/


now it needs ollama to be running
just press win + r
and powershell
and then run wsl -d Ubuntu
now go back to the UI
Check again
press that button ^
select a model frmo the top
and start using it
pick llava
now attach an image
and tell it to describe it


ollama/ollama is actually ollama
its the same thing when u do wsl -d Ubuntu

now that u have that in docker
ollama/ollama in docker
u dont need to ever do wsl -d Ubuntu again


UI
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v ollama-webui:/app/backend/data --name ollama-webui --restart always ghcr.io/ollama-webui/ollama-webui:main

Ollama
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama



Maybe need some explanation about the update process sorry 




https://ollamahub.com/
OllamaHub
OllamaHub - Explore and Download Custom Ollama Modelfiles
Discover and download custom Ollama Modelfiles, the tool to run open-source large language models locally. Explore a community-driven repository of characters and helpful assistants. Talk to customized characters directly on your local machine. Visit OllamaHub and unleash the power of personalized language models with Ollama.
this is a nice website incase you want custom models
and it intigrates automatically with the new UI im using
u can just press Get and it auto adds it to the webui im using




btw
found out where the models are stored
press win + r then paste this \\wsl$\docker-desktop-data\data\docker\volumes
should find ollama folder 
that's where everything is stored




this for image: 
https://www.youtube.com/watch?v=A0xUnf5302k&pp=ygUXbG9jYWwgaW1hZ2UgIHVuY2Vuc29yZWQ%3D