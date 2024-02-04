# WSL Installation and Ollama Setup Guide

## 1. Install Windows Subsystem for Linux (WSL)

To set up the Windows Subsystem for Linux (WSL), follow these steps:

### 1.1. Installation Process for WSL:

1. Open PowerShell as an administrator (Win + S > PowerShell > Run as administrator).
2. Run the following command:
   
   ```powershell
   wsl --install
   ```

## 2. Install Ollama

Install Ollama on your system using these instructions:

### 2.1. Ollama Installation:

1. In the same PowerShell window, execute the following command:

   ```shell
   curl https://ollama.ai/install.sh | sh
   ```

### 2.2. Update Ollama Command (Fix Version):

Replace the example command with the correct version as needed.

## 3. Set Up WSL for Ollama

Configure WSL for Ollama by following these steps:

### 3.1. Access WSL:

1. Open PowerShell (administrator privileges not required).
2. Enter the command:

   ```shell
   wsl
   ```

3. Check installed WSL distributions:

   ```shell
   wsl -l -v
   ```

4. Start Ubuntu:

   ```shell
   wsl -d Ubuntu
   ```

## 4. Initialize ollama-webui




THIS STEP NEEDS TO BE UPDATED. SORRY






## How to Access Your LLM (Mistral)

To access your LLM (Mistral) locally, visit: http://localhost:3000/

For online access, follow these steps for port forwarding:

### Port Forwarding:

To access your LLM via the internet, open port 3000 and 11434 in TCP:

1. Open both port 3000 and 11434 in TCP. Port 11434 in TCP is used for the Ollama API, while port 3000 in TCP is used for the UI.
   
   Visit: http://"Your IP":3000 (Please note that this may not be secure; avoid sharing it extensively as it may allow others to use your PC's computing power for their requests to the LLM).

## Other Tips:

### Using Voice-to-Text on Windows:

To utilize voice-to-text functionality, press Win+H to access the menu, and press Win+H again to initiate voice recording, converting your spoken words into text for direct input into the AI system.

### How to Close a Node/Server on Port 3001 or 3002:

If you encounter an error during startup that switches to ports like 3001 or 3002, follow these steps:

1. Access the task manager and terminate all instances of Node.js JavaScript Runtime.
2. Restart the server by running the command "npm run dev."

For detailed API documentation, visit the [Ollama API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md).

This tutorial was created by WeConnected from CtrlAIdel, with assistance from Subie (Developer).

Writer's YouTube channel: [CtrlAI Del](https://www.youtube.com/@ctrl_ai_del)

Developer's GitHub(The friend who helped me installed al of this, and made this tutorial possible: [Subie1](https://github.com/Subie1)
