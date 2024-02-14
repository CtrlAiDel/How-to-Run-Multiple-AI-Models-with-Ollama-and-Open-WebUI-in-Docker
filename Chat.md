These steps might be deleted: 
'ollama run mistral'
'ollama run llava'

Mixtral is the AI
Mistral is a fork of the AI
nothing from ollama is internet compatible
(Note for self:I'm not sure about those two line, this installs them manually via CLI - Powershell, but can I skip this step and go directly for the docker destop and the cmds..) 



### Quick Start Guide: Installing Ollama and Ollama UI Using Docker

Get Ollama and its UI up and running swiftly with this Docker-based tutorial, ensuring an easy and efficient setup.

#### **Step 1: Install Docker Desktop**
Ensure Docker Desktop is installed on your computer. If it's missing, download and install it from the official website to facilitate running Ollama containers.

#### **Step 2: Launch PowerShell**
Open PowerShell to input commands by:
- Pressing `Win + R`, typing `powershell`, and pressing Enter.
- Or, from a command prompt, typing `pwsh` to switch to PowerShell.

#### **Step 3: Execute Docker Commands**
Check that Docker Desktop is running before you proceed.

1. **Set Up Ollama UI:** Run this command in PowerShell to deploy the Ollama UI container:
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v ollama-webui:/app/backend/data --name ollama-webui --restart always ghcr.io/ollama-webui/ollama-webui:main
   ```

2. **Deploy Ollama:** Then, start the Ollama container with this command, enabling it to use all available GPUs:
   ```powershell
   docker run -d --restart always --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```

#### **Step 3.5: Allow Time for Installation**
Pause for a bit after initiating the Docker commands to let the containers fully set up. Jumping ahead too soon might interfere with the Ollama UI's functionality.

#### **Step 4: Access Ollama UI**
Once the containers are set, visit `http://localhost:3000/` in your web browser to access the now operational Ollama UI.

#### **Step 5: Confirm Ollama Backend is Active**
Ollama UI's performance is reliant on the backend being live. With Docker managing Ollama, manual start-ups like `wsl -d Ubuntu` become unnecessary.

#### **Step 6: Utilize Ollama UI**
- Pick a model from the Ollama UI dropdown, for instance, "llava."
- Upload an image and command the model to describe it or generate new content based on your specifications.

#### **Additional Resources:**
- **Model Downloads:** For AI user interface models, head over to [OllamaHub](https://ollamahub.com/).
- **Stable Diffusion Setup:** For setting up Stable Diffusion, which requires a more powerful PC, refer to this [YouTube guide](https://www.youtube.com/watch?v=A0xUnf5302k&pp=ygUXbG9jYWwgaW1hZ2UgIHVuY2Vuc29yZWQ%3D).

By following this guide, you can effortlessly install Ollama and its UI, paving the way for exploring AI models and generating images without delving into complex installation steps.
