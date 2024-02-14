These steps might be deleted: 
ollama run mistral
ollama run llava 
(Note for self:I'm not sure about those two line, this installs them manually via CLI - Powershell, but can I skip this step and go directly for the docker destop and the cmds..) 



### Tutorial: Setting Up Ollama and Ollama UI with Docker

Follow this streamlined tutorial to install Ollama and its UI using Docker, ensuring a smooth setup process and access to the Ollama UI through a web browser.

#### **Step 1: Install Docker Desktop**
Make sure Docker Desktop is installed on your system. If it's not already installed, download and install Docker Desktop from the official website to be able to run the Ollama containers.

#### **Step 2: Open PowerShell**
Access PowerShell by either:
- Pressing `Win + R`, typing `powershell`, and hitting Enter.
- Or, if you're in the command prompt, typing `pwsh` to switch to PowerShell.

#### **Step 3: Run Docker Commands**
Ensure Docker Desktop is fully operational in the background before proceeding.

1. **Install Ollama UI:** Execute the following command in PowerShell to initiate the Ollama UI container:
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v ollama-webui:/app/backend/data --name ollama-webui --restart always ghcr.io/ollama-webui/ollama-webui:main
   ```

2. **Install Ollama:** Use this command to start the Ollama container, which will utilize all available GPUs:
   ```powershell
   docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```

#### **Step 3.5: Wait for Containers to Fully Install**
It's crucial to wait a few minutes for the containers to fully install and initialize after running the Docker commands. Rushing to the next step too soon may lead to issues with the Ollama UI's functionality.

#### **Step 4: Accessing Ollama UI**
Once the Docker containers are up and running, navigate to `http://localhost:3000/` in your web browser. This will open the Ollama UI, now connected and ready for use.

#### **Step 5: Ensure Ollama Backend is Running**
The functionality of the Ollama UI depends on the operational status of the Ollama backend. With Ollama now running in Docker, manual steps like `wsl -d Ubuntu` are no longer necessary.

#### **Step 6: Using Ollama UI**
- In the Ollama UI, choose a model from the dropdown menu, for instance, "llava".
- Upload an image and prompt the model to either describe it or generate new content based on your specifications.

#### **Additional Information:**
- **Downloading Models:** For AI user interface models, visit [OllamaHub](https://ollamahub.com/).
- **Stable Diffusion Installation:** For a guide on installing Stable Diffusion, which requires a more capable PC, refer to the provided YouTube link.

This tutorial aims to simplify the installation and setup process for Ollama and its UI, allowing you to dive into AI model exploration and image generation without complex setup hurdles.





### Streamlined Docker Management Guide for Ollama

This guide outlines efficient steps for managing Docker containers and images, including setup instructions for the Ollama application and accessing PowerShell for command execution.

#### Deleting Containers
1. **Access Docker Desktop:** Open the Docker Desktop application and navigate to the **Containers** tab.
2. **Delete Specific Containers:** To clean your setup, remove the following containers:
   - `ollama-web-ui`
   - `ollama`
   Inside the Docker Desktop application, under the **Containers** tab, you can delete these containers using the interface provided. Alternatively, for a manual approach, open PowerShell by pressing `Win + R`, typing `powershell`, and hitting Enter. Then, execute:
   ```powershell
   docker rm -f <container_name_or_id>
   ```
   Replace `<container_name_or_id>` with the actual name or ID of the container you wish to delete.

#### Managing Docker Images
1. **Switch to Images Tab:** Inside the Docker Desktop application, select the **Images** tab.
2. **Keep Certain Images:** Make sure the following images are not deleted:
   - `ghcr.io/ollama-webui/ollama-webui:main`
   - `ollama/ollama:latest`
3. **Remove Untagged Images:** Locate any `ollama-webui` or `ollama` images tagged with `<none>` in the **Images** tab of Docker Desktop. These can be removed for housekeeping. To delete them manually, open PowerShell (via `Win + R`, then `powershell`) and run:
   ```powershell
   docker rmi <image_id>
   ```
   Substitute `<image_id>` with the ID of the image you aim to remove.

#### Reinstalling Ollama UI and Ollama
1. **Ollama UI Installation:** Open PowerShell (shortcut `Win + R` followed by typing `powershell`) and enter the following command to set up the Ollama UI container:
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v ollama-webui:/app/backend/data --name ollama-webui --restart always ghcr.io/ollama-webui/ollama-webui:main
   ```
2. **Ollama Installation:** In the same PowerShell session, install and start the Ollama container with:
   ```powershell
   docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```

#### Locating Ollama Model Files





Mixtral is the AI
Mistral is a fork of the AI
nothing from ollama is internet compatible
- **Accessing Model Files:** Press `Win + R`, type `\\wsl$\docker-desktop-data\data\docker\volumes`, and press Enter to open the location in File Explorer where Docker volumes, including those for Ollama, are stored.

This guide simplifies the management of Docker resources for the Ollama application, detailing the process for clearing, setting up, and accessing essential components, with clear instructions for using the Docker Desktop interface and PowerShell for manual commands.
