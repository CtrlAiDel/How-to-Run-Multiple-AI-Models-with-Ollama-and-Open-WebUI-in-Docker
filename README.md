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

## 4. Initialize Ollama UI

Prepare the Ollama User Interface (UI) for use with the following instructions:

### 4.1. Create UI Folder:

1. Create a folder, e.g., "Ollama UI."
2. Right-click inside the folder and select "Open in terminal."

### 4.2. Clone Ollama UI Repository:

1. Clone the GitHub repository with this command:

   ```shell
   git clone https://github.com/ivanfioravanti/chatbot-ollama.git .
   ```

2. Install dependencies:

   ```shell
   npm ci
   ```

### 4.3. Setup and Serve Ollama:

1. Open a new terminal tab by clicking the "+" icon and switch to Ubuntu:

   ```shell
   wsl -d Ubuntu
   ```

2. Serve Ollama:

   ```shell
   ollama serve
   ```

## 5. Launch Ollama UI

Run the Ollama UI with these instructions:

### 5.1. Start Development Server:

1. In the first terminal tab, run:

   ```shell
   npm run dev
   ```

2. Allow network access if prompted.

### 5.2. Access UI:

Ctrl + click the link displayed in the terminal to open the Ollama UI.

## Start Your Mixtral Server

Here's how to start the local Mistral server on your PC:

1. Navigate to the "UI folder" where you have your Ollama UI files.
2. Right-click inside the folder to open a terminal within the folder.
3. Open a new terminal tab by clicking the "+" icon in the tab bar.
4. In the new tab, run the following command to start an Ubuntu shell:

   ```
   wsl -d Ubuntu
   ```

5. Return to the first tab (where the terminal is within your UI folder).

To initialize the application:

6. In the first tab, if needed (usually not required), install the necessary Node.js dependencies by running:

   ```
   npm i
   ```

7. Start the development server with the following command:

   ```
   npm run dev
   ```

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
