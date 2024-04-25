const models = {

  "bakllava": {
    "name": "bakllava:latest",
    "id": 1,
    "description": "LLAMA model with a special system prompt.",
    "Latency": "rambling stuff (calculus)",
    "Keep / Delete": "NOT WORKING DIRECTLY / but might be a dependency of other models, KEEP IT for now!",
    "Whitelisted": ""
  },
  "codellama": {
    "name": "codellama:latest",
    "id": 2,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "deepseek-coder": {
    "name": "deepseek-coder:6.7b",
    "id": 3,
    "description": "AI programming assistant",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinmistral-q4_K_M": {
    "name": "dolphin-mistral:7b-v2.6-q4_K_M",
    "id": 4,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinmistral": {
    "name": "dolphin-mistral:latest",
    "id": 5,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinmixtral": {
    "name": "dolphin-mixtral:latest",
    "id": 6,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinphi": {
    "name": "dolphin-phi:latest",
    "id": 7,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "gemma-2b": {
    "name": "gemma:2b",
    "id": 8,
    "description": "Gemma Model is Google's Open Source Model based on Gemini Models. This Modelfile load he 2b-instruct variant with a suitable System message.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "gemma-7b": {
    "name": "gemma:7b",
    "id": 9,
    "description": "Gemma Model is Google's Open Source Model based on Gemini Models.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "jimscard/whiterabbit-neo:latest": {
    "name": "jimscard/whiterabbit-neo:latest",
    "id": 10,
    "description": "Reads EULAs, can summarize EULAs and terms of service agreements",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llama2:latest": {
    "name": "llama2:latest",
    "id": 11,
    "description": "LLAMA model with a special system prompt.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llama3:latest": {
    "name": "llama3:latest",
    "id": 12,
    "description": "LLAMA model with a special system prompt.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llava:13b-v1.5-q8_0": {
    "name": "llava:13b-v1.5-q8_0",
    "id": 13,
    "description": "LLaVA based image analysis - alternate prompt",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "mistral:latest": {
    "name": "mistral:latest",
    "id": 14,
    "description": "Principal Security Engineer for fintech, focusing on STRIDE, MITRE ATT&CK, SAST, and AWS Cloud.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "mistral:latest": {
    "name": "mistral:latest",
    "id": 15,
    "description": "Principal Security Engineer for fintech, focusing on STRIDE, MITRE ATT&CK, SAST, and AWS Cloud.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "nous-hermes:latest": {
    "name": "nous-hermes:latest",
    "id": 16,
    "description": "Reads EULAs, can summarize EULAs and terms of service agreements",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "nous-hermes2-mixtral:latest": {
    "name": "nous-hermes2-mixtral:latest",
    "id": 17,
    "description": "Reads EULAs, can summarize EULAs and terms of service agreements",
    "Latency": "INFINITE",
    "Keep / Delete": "DEL",
    "Whitelisted": ""
  },
  "openchat:latest": {
    "name": "openchat:latest",
    "id": 18,
    "description": "Anonymous chat",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "openhermes:latest": {
    "name": "openhermes:latest",
    "id": 19,
    "description": "Expert Librarian, you can request any topic, author, or book, and it will provide you with all the information you need on that subject.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "openhermes2.5-mistral:7b-q4_K_M": {
    "name": "openhermes2.5-mistral:7b-q4_K_M",
    "id": 20,
    "description": "Not technically a lawyer...",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "openhermes2.5-mistral:latest": {
    "name": "openhermes2.5-mistral:latest",
    "id": 21,
    "description": "Not technically a lawyer...",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "orca-mini:latest": {
    "name": "orca-mini:latest",
    "id": 22,
    "description": "Car troubles? Just ask your expert mechanic friend.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "phi:latest": {
    "name": "phi:latest",
    "id": 23,
    "description": "Phi-2: The surprising power of small language models",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "phind-codellama:latest": {
    "name": "phind-codellama:latest",
    "id": 24,
    "description": "AI programming assistant",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "qwen:14b": {
    "name": "qwen:14b",
    "id": 25,
    "description": "This is a simple modelfile that acts as an english translator and improver.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "samantha-mistral:latest": {
    "name": "samantha-mistral:latest",
    "id": 26,
    "description": "An uncensored expert in everything. This model will try to be as truthful as possible and is capable of giving opinions you may not like.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "stablelm2:latest": {
    "name": "stablelm2:latest",
    "id": 27,
    "description": "The Data Archivist is designed to provide expert guidance in the field of digital archiving, suitable for users seeking knowledge and assistance in preserving and organizing digital information.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "starling-lm:7b-alpha-q5_K_M": {
    "name": "starling-lm:7b-alpha-q5_K_M",
    "id": 28,
    "description": "A simple modelfile that will respond to any questions as a senior UX Designer assistant.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "starling-lm:latest": {
    "name": "starling-lm:latest",
    "id": 29,
    "description": "A simple modelfile that will respond to any questions as a senior UX Designer assistant.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "tinyllama:latest": {
    "name": "tinyllama:latest",
    "id": 30,
    "description": "The Doomsday Survivalist is designed to offer practical advice and safety-oriented tips for surviving in various extreme and catastrophic scenarios, suitable for those interested in comprehensive emergency preparedness and survival skills.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "wizard-math:latest": {
    "name": "wizard-math:latest",
    "id": 31,
    "description": "A friendly programming assistant ready to pair on your next coding task",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "wizard-vicuna-uncensored:7b": {
    "name": "wizard-vicuna-uncensored:7b",
    "id": 32,
    "description": "Model wizard-vicuna-uncensored with 7b variant.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "yarn-llama2:latest": {
    "name": "yarn-llama2:latest",
    "id": 33,
    "description": "Latest version of model yarn-llama2.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "zephyr:7b-beta-q5_K_M": {
    "name": "zephyr:7b-beta-q5_K_M",
    "id": 34,
    "description": "Model zephyr with 7b variant and beta configuration q5_K_M.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "zephyr:latest": {
    "name": "zephyr:latest",
    "id": 35,
    "description": "Latest version of model zephyr.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  }
  
};

export default models;
