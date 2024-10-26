# Comprehensive Guide to Installing Ollama, Open Web-UI, and Docker Desktop

To ensure a seamless experience in setting up WSL, deploying Docker, and utilizing Ollama for AI-driven image generation and analysis, it's essential to operate on a powerful PC. Adequate system resources are crucial for the smooth operation and optimal performance of these tasks. We advise users to confirm their systems are well-equipped to handle these processes efficiently before proceeding with the following steps.

---

### **Enabling WSL and Docker Setup**

1. **Enable Windows Subsystem for Linux (WSL)**:
   - Open PowerShell as Administrator (`Win + S`, search for PowerShell, right-click to run as administrator).
   - Execute: `wsl --install`.
   - Restart your computer if required.

2. **Install Docker Desktop**:
   - Download and install Docker Desktop from the following link: [Docker Desktop](https://www.docker.com/products/docker-desktop/).

3. **Verify Docker Desktop**:
   - Ensure Docker Desktop is running correctly on your system.

---

### **Deploying Ollama and Open Web-UI**

1. **Launch PowerShell**:
   - Access by pressing `Win + R`, typing `powershell`, and pressing Enter.

2. **Deploy Open Web-UI**:
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```

3. **Start Ollama**:
   ```powershell
   docker run -d --restart always --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```

4. **Initialization Pause**:
   - Allow a short period for Docker containers to set up before proceeding.

5. **Downloading and Running LLMs with Ollama**:
   - Access [Ollama Library](https://ollama.com/library) and choose the desired LLM (e.g., llama2).
   - Click on "ollama run.." located in the top right corner to copy the command provided.
   - Open cmd.exe and enter "ubuntu" to access the Ubuntu environment.
   - Paste the copied command into the terminal and execute it to download the LLM.

---

### **Accessing and Using Open Web-UI**

0. **Local Access**:
   - For local access, navigate to `http://localhost:3000` in your web browser.

1. **Online LLM Access via Port Forwarding**:
   - Open both port 3000 and 11434 in TCP for UI and API respectively.
   - For remote or external access, use `http://Your IP:3000` after opening the ports.

2. **Navigating the Open Web-UI**:
   - Follow the explanation from step 0 or 1 based on your preferred access method.

3. **Discovering Model Files**:
   - To initiate AI analysis or content creation, go to the left-side menu, choose "Modelfiles," and click on "Discover a Modelfile."
   - Visit the local models link: [Models link in local](http://localhost:3000/modelfiles/).
   - Access the Open Web-UI at [Open Web-UI](https://openwebui.com/) to download new AI models.
   - Select a desired model from the dropdown menu at the top of the main page, such as "llava."
   - Upload images or input commands for AI to analyze or generate content.

4. **Important Consideration for Sharing Your Link**:
   - Be cautious when sharing your link as it exposes your IP address, which could pose security risks. Excessive access by multiple users can strain your system resources, leading to performance issues.

---

### **Batch Files for AI Model Management**

1. **Z - start.bat**  
   [View or Download](https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker/blob/main/Z%20-%20start.bat)  
   *Starts the AI model environment.*

2. **Z - close.bat**  
   [View or Download](https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker/blob/main/Z%20-%20close.bat)  
   *Shuts down the AI model environment.*

3. **Z - UpdatePullContainer.bat**  
   [View or Download](https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker/blob/main/Z%20-%20UpdatePullContainer.bat)  
   *Pulls the latest Docker container updates.*

4. **Z - UpdatePullLLM.bat**  
   [View or Download](https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker/blob/main/Z%20-%20UpdatePullLLM.bat)  
   *Updates the installed AI language models.*

5. **Z - UnloadEveryLLMtoemptyVRAM.bat**  
   [View or Download](https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker/blob/main/Z%20-%20UnloadEveryLLMtoemptyVRAM.bat)  
   *Unloads all language models to free up VRAM.*

---

### **Reinstalling Ollama and Open Web-UI Manually**

This section may not be needed with the batch files you can download.

- **Ollama UI Installation**:
   Open PowerShell and run the command to set up the Ollama Open Web-UI container:
   ```powershell
   docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
   ```

- **Ollama Installation**:
   In the same PowerShell session, deploy the Ollama container with:
   ```powershell
   docker run -d --restart always --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
   ```

---

### **Locating Ollama Model Files Locally**

- **Accessing Model Files**: Press `Win + R`, type `\\wsl$\docker-desktop-data\data\docker\volumes`, and press Enter to open the location in File Explorer where Docker volumes, including those for Ollama, are stored.

---

### **Advanced Configuration for Stable Diffusion**

For those looking to delve deeper with Stable Diffusion for AI image generation, note that this requires an even more powerful PC setup. The computational demands are significantly higher, necessitating a high-performance CPU, ample RAM, and a robust GPU. A minimum of 12GB of VRAM on the GPU is recommended.

For a comprehensive guide on setting up Stable Diffusion, refer to this: [YouTube Guide](https://www.youtube.com/watch?v=A0xUnf5302k&pp=ygUXbG9jYWwgaW1hZ2UgIHVuY2Vuc29yZWQ%3D).

---

### **Omost Tool for Image Generation**

The video showcases "Omost," a new tool that combines large language models and image generation to create realistic images. It generates detailed prompts for each subsection of the image based on the initial prompt, making the process faster. The tool is easy to install, runs via a Gradio app or locally with an Nvidia card, and offers customizable settings. Memory usage issues can be mitigated by enabling high VRAM mode and minor code adjustments. [YouTube Guide](https://www.youtube.com/watch?v=RKxrXkVpPoE).

---

### **Resources and Credits**

- **Ollama API Documentation**: [Ollama API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md).
- **Open Web-User-Interface Documentation**: [Open WebUI Documentation](https://github.com/open-webui/open-webui).
- **Tutorial Creators**: We-Llama from CtrlAIdel, with the assistance of Subie (Developer).
- **Writer's YouTube**: [CtrlAI Del](https://www.youtube.com/@ctrl_ai_del).
- **Developer's GitHub**: [Subie1](https://github.com/Subie1).

---

This guide aims to consolidate all necessary steps for efficiently setting up **WSL, Docker, Ollama, and Open Web-UI**, and navigating various functionalities. It emphasizes the importance of a powerful computing environment for a smooth and productive experience in leveraging AI models for image generation and analysis.

**-We-Llama aka CtrlAiDel**

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker&type=Date)](https://star-history.com/#CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker&Date)
