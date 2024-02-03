# WSL Installation and Setting Up Ollama
## Install Windows Subsystem for Linux (WSL)

1. **Check if WSL is Installed:**
   - Open PowerShell as an administrator (Win + S > PowerShell > Run as administrator).
   - Run the command:
     ```powershell
     wsl --install
     ```

## Install Ollama

2. **Install Ollama:**
   - In the same PowerShell window, execute:
     ```shell
     curl https://ollama.ai/install.sh | sh
     ```

3. **Update Ollama Command (Fix Version):**
   - Replace the example command with the correct version as needed.

## Setup WSL for Ollama

4. **Access WSL:**
   - Open PowerShell (administrator privileges not required).
   - Enter:
     ```shell
     wsl
     ```
   - Check installed WSL distributions:
     ```shell
     wsl -l -v
     ```
   - Start Ubuntu:
     ```shell
     wsl -d Ubuntu
     ```

## Initialize Ollama UI

5. **Create UI Folder:**
   - Create a folder, e.g., "Ollama UI".
   - Right-click inside the folder > Open in terminal.

6. **Clone Ollama UI Repository:**
   - Clone the GitHub repository:
     ```shell
     git clone https://github.com/ivanfioravanti/chatbot-ollama.git .
     ```
   - Install dependencies:
     ```shell
     npm ci
     ```

7. **Setup and Serve Ollama:**
   - Open a new terminal tab (+ icon), switch to Ubuntu:
     ```shell
     wsl -d Ubuntu
     ```
   - Serve Ollama:
     ```shell
     ollama serve
     ```

## Launch Ollama UI

8. **Start Development Server:**
   - In the first terminal tab, run:
     ```shell
     npm run dev
     ```
   - Allow network access if prompted.

9. **Access UI:**
   - Ctrl + click the link displayed in the terminal to open the Ollama UI.

The numbering is now consistent and accurate for each set of instructions.
________________________________________

**How to Open:**

1. Navigate to the "UI folder" where you have your Ollama UI files.
2. Right-click inside the folder to open a terminal within the folder.
3. Open a new terminal tab by clicking the "+" icon in the tab bar.
4. In the new tab, run the following command to start an Ubuntu shell:
   ```
   ubuntu
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

**How to Close a Node:**

If you encounter issues with the LLM (Language Model) not connecting on port 3000 and switching to ports like 3001 or 3002:

1. Open your task manager.
2. Locate and terminate any processes that start with "node."

**Port Forwarding:**

You need to open your port 3000 if you want to access your LLM via the internet. (Your ip:3000 will connect you to your LLM)

1. Open both port 3000 and 11434 in TCP.
- Port 11434 in TCP is used for the Ollama API.
- Port 3000 in TCP is used for the UI.)

If you need to provide API documentation, you can use the following link:

[Ollama API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md)


-This tutorial was written by WeConnected from CtrlAIdel with the help with Subie(Developper)

Writer: https://www.youtube.com/@ctrl_ai_del , with the help of Llama & ChatGPT
Developer: https://github.com/Subie1
