## Comprehensive Guide to Installing WSL, Ollama, and Using Docker with Enhanced Hardware Advisory

To ensure a seamless experience in setting up WSL, deploying Docker, and utilizing Ollama for AI-driven image generation and analysis, it's essential to operate on a powerful PC. Adequate system resources are crucial for the smooth operation and optimal performance of these tasks. We advise users to confirm their systems are well-equipped to handle these processes efficiently before proceeding with the following steps.

### **Enabling WSL and Docker Setup**

1. **Enable Windows Subsystem for Linux (WSL)**:
   - Open PowerShell as Administrator (`Win + S`, search for PowerShell, right-click to run as administrator).
   - Execute: `wsl --install`.
   - Restart your computer if required.

2. **Install Docker Desktop**:
   - Download and install Docker Desktop from the following link: [Docker Desktop](https://www.docker.com/products/docker-desktop/).

3. **Verify Docker Desktop**:
   - Ensure Docker Desktop is running correctly on your system.


### **Deploying Ollama and Ollama UI**

1. **Launch PowerShell**:
   - Access by pressing `Win + R`, typing `powershell`, and pressing Enter.

2. **Deploy Ollama UI**:
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v ollama-webui:/app/backend/data --name ollama-webui --restart always ghcr.io/ollama-webui/ollama-webui:main
   ```

3. **Start Ollama**:
   ```powershell
   docker run -d --restart always --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```

4. **Initialization Pause**:
   - Allow a short period for Docker containers to set up before proceeding.


### **Accessing and Using Ollama UI**

0. **Local Access**:
   - For local access, navigate to `http://localhost:3000` in your web browser.

1. **Online LLM Access via Port Forwarding**:
   - Open both port 3000 and 11434 in TCP for UI and API respectively.
   - For remote or external access, such as on a mobile device or from another location, use `http://"Your IP":3000` after you have opened the ports as described.

2. **Navigating the OpenWebUI (also known as Ollama UI)**:
   - Select a desired model from the dropdown menu at the top of the page, such as "llava".
   - Upload images or input commands for AI to analyze or generate content.

3. **Important Consideration for Sharing Your Link**:
   - While you can share this link with others for access, be mindful that doing so exposes your direct IP address, which could pose security risks. Additionally, because the service runs on your machine, excessive access by multiple users can strain your system resources, potentially leading to performance issues or lag.

4. **Discovering Model Files**:
   - To initiate AI analysis or content creation, go to the left-side menu, choose "Modelfiles", and then click on "Discover a Modelfile" to proceed.


### Updating Ollama and Ollabe Web UI: Docker Desktop Guide

To update the Ollama and Ollabe web UI, follow these consolidated steps for managing Docker containers and images:

### Accessing and Managing Containers:
1. **Open Docker Desktop** and navigate to the **Containers** tab.
2. To prepare for updates, delete the `ollama-web-ui` and `ollama` containers. This can be done within the Docker Desktop interface under the **Containers** tab. For those preferring a manual approach:
   - Open PowerShell by pressing `Win + R`, typing `powershell`, and hitting Enter.
   - Execute the command: 
     ```powershell
     docker rm -f <container_name_or_id>
     ```
   Replace `<container_name_or_id>` with the actual name or ID of the container you wish to delete.

### Managing Docker Images:
1. Switch to the **Images** tab in Docker Desktop.
2. Ensure the following images remain untouched, as they're essential for the updated environment:
   - `ghcr.io/ollama-webui/ollama-webui:main`
   - `ollama/ollama:latest`
3. Remove any `ollama-webui` or `ollama` images tagged with `<none>` for a cleaner setup. To manually delete these images:
   - Use PowerShell (accessed via `Win + R` then typing `powershell`) and run:
     ```powershell
     docker rmi <image_id>
     ```
   Substitute `<image_id>` with the ID of the untagged image you wish to remove.

This streamlined guide ensures your Docker environment is optimally prepared for installing updates to the Ollama and Ollabe web UI components.


### Reinstalling Ollama UI and Ollama
1. **Ollama UI Installation:** Open PowerShell (shortcut `Win + R` followed by typing `powershell`) and enter the following command to set up the Ollama UI container:
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v ollama-webui:/app/backend/data --name ollama-webui --restart always ghcr.io/ollama-webui/ollama-webui:main
   ```
2. **Ollama Installation:** In the same PowerShell session, install and start the Ollama container with:
   ```powershell
   docker run -d --restart always --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```

### Locating Ollama Model Files

- **Accessing Model Files:** Press `Win + R`, type `\\wsl$\docker-desktop-data\data\docker\volumes`, and press Enter to open the location in File Explorer where Docker volumes, including those for Ollama, are stored.

This guide simplifies the management of Docker resources for the Ollama application, detailing the process for clearing, setting up, and accessing essential components, with clear instructions for using the Docker Desktop interface and PowerShell for manual commands.

### **Advanced Configuration for Stable Diffusion**

For those looking to delve deeper with Stable Diffusion for AI image generation, note that this requires an even more powerful PC setup. The computational demands are significantly higher, necessitating a high-performance CPU, ample RAM, and a robust GPU. A minimum of 12GB of VRAM on the GPU is recommended.

For a comprehensive guide on setting up Stable Diffusion, refer to this: [YouTube Guide](https://www.youtube.com/watch?v=A0xUnf5302k&pp=ygUXbG9jYWwgaW1hZ2UgIHVuY2Vuc29yZWQ%3D).

### **Resources and Credits**

- **API Documentation**: [Ollama API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md).
- **Web-User-Interface Documentation**: [Ollama WebUI Documentation](https://github.com/open-webui/open-webui).
- **Tutorial Creators**: WeConnected from CtrlAIdel, with assistance from Subie (Developer).
- **Writer's YouTube**: [CtrlAI Del](https://www.youtube.com/@ctrl_ai_del).
- **Developer's GitHub**: [Subie1](https://github.com/Subie1).

This guide aims to consolidate all necessary steps for efficiently setting up **WSL, Docker, Ollama**, and navigating various functionalities. It emphasizes the importance of a powerful computing environment for a smooth and productive experience in leveraging AI models for image generation and analysis.


**-WeConnected aka FreakingClowning**
