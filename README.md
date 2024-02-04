# WSL Installation and Setting Up Ollama
## Install Windows Subsystem for Linux (WSL)

1. **Installation process for WSL:**
   
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

## **Start your mixtral server**

How to start the local mistral server on your pc.

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

________________________________________

## **How to access your LLM (mistral) in local :**

Visit: http://localhost:3000/

________________________________________

## **How to access your LLM (mistral) online :**

**Port Forwarding:**

You need to open your port 3000 if you want to access your LLM via the internet. (Your ip:3000 will connect you to your LLM)

1. Open both port 3000 and 11434 in TCP.
- Port 11434 in TCP is used for the Ollama API.
- Port 3000 in TCP is used for the UI.

Visit: http://"Your ip":3000 (This is probably not secure at all, don't share this too much either cause people will use computing power of your PC for their request to the LLM.

________________________________________

## **Others :**

**Using Voice-to-Text on Windows:**

To utilize voice-to-text functionality, simply press Win+H to access the menu, and press Win+H again to initiate voice recording, converting your spoken words into text for direct input into the AI system.

**How to Close a Node / server openening on port 3001, 3002:**

During the startup process, if you encounter an error message stating that it cannot establish a connection on port 3000 and consequently switches to ports like 3001 or 3002, this behavior is undesirable. To resolve this issue, you will need to access the task manager and terminate all instances of Node.js JavaScript Runtime. Afterward, you can restart the server by running the command "npm run dev."

During the startup process, if you encounter an error message like the following, this is an undersirable situation(Continue to read above the error):

```
⚠ Port 3000 is in use, trying 3001 instead.
[Error: EPERM: operation not permitted, open 'C:\Users\Utilisateur\Desktop\WhitelistNothers\Ollama UI\.next\trace'] {
  errno: -4048,
  code: 'EPERM',
  syscall: 'open',
  path: 'C:\\Users\\Utilisateur\\Desktop\\WhitelistNothers\\Ollama UI\\.next\\trace'
}
▲ Next.js 13.5.4
- Local:        http://localhost:3001
```

To resolve this issue, you will need to access the task manager and terminate all instances of Node.js JavaScript Runtime. Afterward, you can restart the server by replicating the instruction of step 10.

[Ollama API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md)


-This tutorial was written by WeConnected from CtrlAIdel with the help with Subie(Developper)

Writer: https://www.youtube.com/@ctrl_ai_del  (With the help of Llama & ChatGPT)

Developer: https://github.com/Subie1  (He teached me how to install Mixtral, and made some corrections to my guide!)
