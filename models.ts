const models = {

  "bakllava": {
    "name": "bakllava:latest",
    "id": 1,
    "description": "LLAMA model with a special system prompt.",
    "Latency": "rambling stuff (calculus)",
    "Keep / Delete": "NOT WORKING DIRECTLY / but might be a depency of others models, KEEP IT for now!",
    "Whitelisted": ""
  },
  "gemma": {
    "name": "c2p/gemma-ai:latest",
    "id": 2,
    "description": "Gemma model is Google's Open Source Model based on Gemini Models.",
    "Latency": "",
    "Keep / Delete": "keep",
    "Whitelisted": "true"
  },
  "codellama7b": {
    "name": "codellama:7b",
    "id": 3,
    "description": "This is a simple modelfile that takes will respond to any questions that a senior DevOps engineer should know how to solve.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "codellama": {
    "name": "codellama:latest",
    "id": 4,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "deepseek-coder6.7b": {
    "name": "deepseek-coder:6.7b",
    "id": 5,
    "description": "AI programming assistant",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinphi2": {
    "name": "dolphin-2_6-phi-2.Q6_K.gguf:latest",
    "id": 6,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinmistral-laser": {
    "name": "dolphin-mistral:7b-v2.6-dpo-laser-q8_0",
    "id": 7,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinmistral-fp16": {
    "name": "dolphin-mistral:7b-v2.6-fp16",
    "id": 8,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinmistral-q4_K_M": {
    "name": "dolphin-mistral:7b-v2.6-q4_K_M",
    "id": 9,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinmistral": {
    "name": "dolphin-mistral:latest",
    "id": 10,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinmixtral-q3_K_L": {
    "name": "dolphin-mixtral:8x7b-v2.6-q3_K_L",
    "id": 11,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinmixtral": {
    "name": "dolphin-mixtral:latest",
    "id": 12,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dolphinphi": {
    "name": "dolphin-phi:latest",
    "id": 13,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "nous-hermes2": {
    "name": "eas/nous-hermes-2-solar-10.7b:latest",
    "id": 14,
    "description": "No description yet",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "emily": {
    "name": "emily---a-friendly-programming-assistant:latest",
    "id": 15,
    "description": "A friendly programming assistant ready to pair on your next coding task",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "gemma-2b": {
    "name": "gemma:2b",
    "id": 17,
    "description": "Gemma Model is Google's Open Source Model based on Gemini Models. This Modelfile load he 2b-instruct variant with a suitable System message.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "gemma-7b": {
    "name": "gemma:7b",
    "id": 18,
    "description": "Gemma Model is Google's Open Source Model based on Gemini Models.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "ai-writing-tutor": {
    "name": "hub/111mars/ai-writing-tutor:latest",
    "id": 19,
    "description": "This is a simple modelfile that acts as an AI writing tutor.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "chatgpt-4-uncensored": {
    "name": "hub/111mars/chatgpt-4-uncensored:latest",
    "id": 20,
    "description": "WARNING: Minimum ram is 64GB. An uncensored version of ChatGPT 4",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "steve-jobs": {
    "name": "hub/aaartist/steve-jobs:latest",
    "id": 21,
    "description": "The spirit of Steve Jobs' thinking and approach to business, innovation, and leadership.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "homoeopath": {
    "name": "hub/aadesh89/homoeopath:latest",
    "id": 22,
    "description": "This model file acts as a renowned homoeopath who can ask questions and prescribe medicines.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "accountant": {
    "name": "hub/accountant:latest",
    "id": 23,
    "description": "This is a simple modelfile that acts as an accountant.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "advertiser": {
    "name": "hub/advertiser:latest",
    "id": 24,
    "description": "This is a simple modelfile that acts as an advertiser.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "ai-assisted-doctor": {
    "name": "hub/ai-assisted-doctor:latest",
    "id": 25,
    "description": "This is a simple modelfile that acts as an AI assisted doctor.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "ai-writing-tutor-2": {
    "name": "hub/ai-writing-tutor:latest",
    "id": 26,
    "description": "This is a simple modelfile that acts as an AI writing tutor.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "artist-advisor": {
    "name": "hub/andrew/artist-advisor:latest",
    "id": 27,
    "description": "This is a simple modelfile that acts as an artist advisor.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "financial-analyst": {
    "name": "hub/andrew/financial-analyst:latest",
    "id": 28,
    "description": "This is a simple modelfile that acts as a financial analyst.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "automobile-mechanic": {
    "name": "hub/automobile-mechanic:latest",
    "id": 29,
    "description": "This is a simple modelfile that acts as an automobile mechanic.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "history-narrator": {
    "name": "hub/axel/history-narrator:latest",
    "id": 30,
    "description": "An expert historian who narrates events in an entertaining way",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "studybuddy": {
    "name": "hub/bacx/studybuddy:latest",
    "id": 31,
    "description": "A helpful tutor asking ou guiding questions and explaining difficult concepts",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "d&d-dungeon-master-assistant": {
    "name": "hub/bagellama/d&d-dungeon-master-assistant:latest",
    "id": 32,
    "description": "An assistant Dungeon Master assistant for all your DMing needs!",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "based-dolphin-mixtral": {
    "name": "hub/based-dolphin-mixtral:latest",
    "id": 33,
    "description": "Dolphin model with a special system prompt.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "lawx": {
    "name": "hub/bitbinge/lawx:latest",
    "id": 34,
    "description": "Not technically a lawyer...",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "microsoft-phi-2-dolphin": {
    "name": "hub/c00100011/microsoft-phi-2-dolphin:latest",
    "id": 35,
    "description": "Phi-2: The surprising power of small language models",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "deepseek-coder": {
    "name": "hub/cadebug/deepseek-coder:6.7b",
    "id": 36,
    "description": "AI programming assistant",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "deustchlehrer": {
    "name": "hub/captain2mac/deustchlehrer:latest",
    "id": 37,
    "description": "A German Teacher for all your level needs.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "gemmaai-2b": {
    "name": "hub/captain2mac/gemmaai-2b:latest",
    "id": 38,
    "description": "Gemma Model is Google's Open Source Model based on Gemini Models. This Modelfile load he 2b-instruct variant with a suitable System message.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "mechagodzilla": {
    "name": "hub/cardoza1991/mechagodzilla:latest",
    "id": 39,
    "description": "",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "career-counselor": {
    "name": "hub/career-counselor:latest",
    "id": 40,
    "description": "This is a simple modelfile that acts as a career counselor.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "security-risk-specialist-and-strategist-mistral": {
    "name": "hub/ch0ks/security-risk-specialist-and-strategist-mistral:latest",
    "id": 41,
    "description": "Principal Security Engineer for fintech, focusing on STRIDE, MITRE ATT&CK, SAST, and AWS Cloud.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "chef": {
    "name": "hub/chef:latest",
    "id": 42,
    "description": "This is a simple modelfile that acts as a chef.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "sarah-lovely-caring-girlfriend": {
    "name": "hub/chmurli/sarah-lovely-caring-girlfriend:latest",
    "id": 43,
    "description": "A loving and caring girlfriend. She will do ANYTHING for you.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "eulabot": {
    "name": "hub/claragreen/eulabot:latest",
    "id": 44,
    "description": "Reads EULAs, can summarize EULAs and terms of serivce agreements",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "commentariat": {
    "name": "hub/commentariat:latest",
    "id": 45,
    "description": "This is a simple modelfile that acts as a commentariat.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "composer": {
    "name": "hub/composer:latest",
    "id": 46,
    "description": "This is a simple modelfile that acts as a composer.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "resume-reviewer": {
    "name": "hub/crackmac/resume-reviewer:latest",
    "id": 47,
    "description": "I will help review your resume and make suggestions for improvements.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "walt-disney": {
    "name": "hub/crackmac/walt-disney:latest",
    "id": 48,
    "description": "Ask the famous animator and business man Walt Disney a question.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "computer-science-blog-editor": {
    "name": "hub/crixodia/computer-science-blog-editor:latest",
    "id": 49,
    "description": "This is a simple modelfile that generates ten tweets based off any topic.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "cyber-security-specialist": {
    "name": "hub/cyber-security-specialist:latest",
    "id": 50,
    "description": "This is a simple modelfile that acts as a cyber security specialist.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dad": {
    "name": "hub/dad:latest",
    "id": 51,
    "description": "This is a simple modelfile that acts as an encouraging dad, with the dad jokes.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "90s-CPP-Programmer": {
    "name": "hub/darkstorm2150/90s-CPP-Programmer:latest",
    "id": 52,
    "description": "The Pragmatic 90s C++ Programmer is designed to provide practical and effective programming advice, blending the traditional 90s programming style with modern C++ practices.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "attorney": {
    "name": "hub/darkstorm2150/attorney:latest",
    "id": 53,
    "description": "The Attorney is structured to provide comprehensive legal information and guidance across various legal fields, suitable for users seeking insights into legal matters.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "Data-Archivist": {
    "name": "hub/darkstorm2150/Data-Archivist:latest",
    "id": 54,
    "description": "The Data Archivist is designed to provide expert guidance in the field of digital archiving, suitable for users seeking knowledge and assistance in preserving and organizing digital information.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "Data-Hoarder": {
    "name": "hub/darkstorm2150/Data-Hoarder:latest",
    "id": 55,
    "description": "The Data Hoarder is an expert in various data storage technologies and strategies, catering to users seeking advanced knowledge and guidance in this field.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "Data-Scientist": {
    "name": "hub/darkstorm2150/Data-Scientist:latest",
    "id": 56,
    "description": "The Data Scientist is designed to provide expert guidance in data analysis, machine learning, and big data technologies, suitable for a wide range of users seeking data-driven insights and solutions.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "Doomsday-Survivalist": {
    "name": "hub/darkstorm2150/Doomsday-Survivalist:latest",
    "id": 57,
    "description": "The Doomsday Survivalist is designed to offer practical advice and safety-oriented tips for surviving in various extreme and catastrophic scenarios, suitable for those interested in comprehensive emergency preparedness and survival skills.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "OllamaCreate": {
    "name": "hub/darkstorm2150/OllamaCreate:latest",
    "id": 58,
    "description": "OllamaCreate is a specialized tool tailored for creating and structuring model files for OllamaHub. It guides users through the process of defining essential elements of a model file, including name, tag, description, content, and prompt suggestions, across various categories like Character, Assistant, Writing, Productivity, Programming, Data Analysis, Lifestyle, Education, and Business.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "Psychologist": {
    "name": "hub/darktorm2150/Psychologist:latest",
    "id": 59,
    "description": "The Psychologist is designed to provide empathetic and informative psychological guidance, suitable for users seeking insights into mental health, well-being, and personal development.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "RavenGPT": {
    "name": "hub/darkstorm2150/RavenGPT:latest",
    "id": 60,
    "description": "A Fierce GPT Model",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "debate-coach": {
    "name": "hub/debate-coach:latest",
    "id": 61,
    "description": "This is a simple modelfile that acts as a debate coach.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "debater": {
    "name": "hub/debater:latest",
    "id": 62,
    "description": "This is a simple modelfile that acts as a debater.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dentist": {
    "name": "hub/dentist:latest",
    "id": 63,
    "description": "This is a simple modelfile that acts as a dentist.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "devops": {
    "name": "hub/devops:latest",
    "id": 64,
    "description": "This is a simple modelfile that takes will respond to any questions that a senior DevOps engineer should know how to solve.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "reading": {
    "name": "hub/devsanbid/reading:latest",
    "id": 65,
    "description": "This will help you to find your answer for any english proficiency test",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "doctor": {
    "name": "hub/doctor:latest",
    "id": 66,
    "description": "This is a simple modelfile that acts as a doctor.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "cardiologist": {
    "name": "hub/doctor/cardiologist:latest",
    "id": 67,
    "description": "This is a simple modelfile that acts as a cardiologist.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dermatologist": {
    "name": "hub/doctor/dermatologist:latest",
    "id": 68,
    "description": "This is a simple modelfile that acts as a dermatologist.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "gastroenterologist": {
    "name": "hub/doctor/gastroenterologist:latest",
    "id": 69,
    "description": "This is a simple modelfile that acts as a gastroenterologist.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "neurologist": {
    "name": "hub/doctor/neurologist:latest",
    "id": 70,
    "description": "This is a simple modelfile that acts as a neurologist.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "psychologist": {
    "name": "hub/doctor/psychologist:latest",
    "id": 71,
    "description": "This is a modelfile that acts as a psychologist.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "doge": {
    "name": "hub/doge:latest",
    "id": 72,
    "description": "Such chat, much wow, very doge, pls interact, so excite!",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "genaiprompt": {
    "name": "hub/dotslashgabut/genaiprompt:latest",
    "id": 73,
    "description": "",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "who-am-i-game": {
    "name": "hub/dubmaster/who-am-i-game:latest",
    "id": 74,
    "description": "This model plays the 'Who am I? game",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "image-analysis-using-llava-v2": {
    "name": "hub/dwbranson/image-analysis-using-llava-v2:latest",
    "id": 75,
    "description": "LLaVA based image analysis - alternate prompt",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "image-analysis-using-llava-v3": {
    "name": "hub/dwbranson/image-analysis-using-llava-v3:latest",
    "id": 76,
    "description": "LLaVA based image analysis",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "image-analysis-using-llava-v5": {
    "name": "hub/dwbranson/image-analysis-using-llava-v5:latest",
    "id": 77,
    "description": "LLaVA based image analysis",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llava-med-image-analysis": {
    "name": "hub/dwbranson/llava-med-image-analysis:latest",
    "id": 78,
    "description": "Medical image analaysis based on LLaVA-Med paper",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dr.-evelyn": {
    "name": "hub/dwrou/dr.-evelyn:latest",
    "id": 79,
    "description": "Lets talk",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "foto-forge": {
    "name": "hub/dwrou/foto-forge:latest",
    "id": 80,
    "description": "Provide a description and analysis of an image",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "elon-musk": {
    "name": "hub/elon-musk:latest",
    "id": 81,
    "description": "This is a simple modelfile that acts as Elon Musk, weaving an engaging and imaginative narrative that captures his visionary spirit and passion for exploration and innovation.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "contract-analyzer-": {
    "name": "hub/elonmusk/contract-analyzer-:latest",
    "id": 82,
    "description": "An expert contract consultant",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "artteacher": {
    "name": "hub/emclinux/artteacher:latest",
    "id": 83,
    "description": "A Art Teacher ready to help you make study plans for different subjects",
    "Latency": "",
    "Keep / Delete": ""
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "english-translator-and-improver": {
    "name": "hub/english-translator-and-improver:latest",
    "id": 84,
    "description": "This is a simple modelfile that acts as an english translator and improver.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "etymologist": {
    "name": "hub/etymologist:latest",
    "id": 85,
    "description": "This is a simple modelfile that acts as an etymologist.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "excel-sheet": {
    "name": "hub/excel-sheet:latest",
    "id": 86,
    "description": "This is a simple modelfile that acts as an excel sheet.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "btc_trader_one": {
    "name": "hub/fabienpichon/btc_trader_one:latest",
    "id": 87,
    "description": "BTC trader",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "football-commentator": {
    "name": "hub/football-commentator:latest",
    "id": 88,
    "description": "This is a simple modelfile that acts as a football commentator.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "c++-assistant": {
    "name": "hub/gioelelucarelli/c++-assistant:latest",
    "id": 89,
    "description": "This is a simple modelfile that assists with C++ coding tasks.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "connspirator": {
    "name": "hub/gioelelucarelli/connspirator:latest",
    "id": 90,
    "description": "This model acts as a conspirationist",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "mr-zurkon": {
    "name": "hub/helloandre/mr-zurkon:latest",
    "id": 91,
    "description": "Diabolical Coding Weapon",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "secondary-school-teacher": {
    "name": "hub/jama/secondary-school-teacher:latest",
    "id": 92,
    "description": "Secondary School teacher",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "python-coder": {
    "name": "hub/janduplessis883/python-coder:latest",
    "id": 93,
    "description": "An assistant to help with python coding tasks",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "librarian": {
    "name": "hub/javi/librarian:latest",
    "id": 94,
    "description": "Expert Librarian, you can request any topic, author, or book, and it will provide you with all the information you need on that subject.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "devops-engineer-jd": {
    "name": "hub/jdrossell/devops-engineer-jd:latest",
    "id": 95,
    "description": "This is a DevOps models",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "jeff-bezos": {
    "name": "hub/jeff-bezos:latest",
    "id": 96,
    "description": "This is a simple modelfile that acts as Jeff Bezos, narrating an engaging story about the evolution of Amazon, capturing his distinctive style and business philosophy.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "blackhat-hacker-(ollama)": {
    "name": "hub/jimscard/blackhat-hacker-(ollama):latest",
    "id": 97,
    "description": "Blackhat hacker that can create malware or bypass computer security",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "english-teacher": {
    "name": "hub/kamjin/english-teacher:latest",
    "id": 98,
    "description": "This is a simple modelfile that acts as a english teacher.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "python-coder": {
    "name": "hub/kron/python-coder:latest",
    "id": 99,
    "description": "Using phind-codellama and primed to excel at Python Coding.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "based": {
    "name": "hub/krsmes/based:latest",
    "id": 100,
    "description": "Ask any question and get a based unfiltered and uncensored response",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "life-coach": {
    "name": "hub/life-coach:latest",
    "id": 101,
    "description": "This is a simple modelfile that acts as a life coach.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "linux-terminal": {
    "name": "hub/linux-terminal:latest",
    "id": 102,
    "description": "This is a simple modelfile that acts as a linux terminal.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "dejargonizer": {
    "name": "hub/louisguitton/dejargonizer:latest",
    "id": 103,
    "description": "Paste in text, get explanations of all of the jargon and acronyms",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "magician": {
    "name": "hub/magician:latest",
    "id": 104,
    "description": "This is a simple modelfile that acts as a magician.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "mario": {
    "name": "hub/mario:latest",
    "id": 105,
    "description": "This example shows how to create a basic character using Llama2 as the base model.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "math-teacher": {
    "name": "hub/math-teacher:latest",
    "id": 106,
    "description": "This is a simple modelfile that acts as a math teacher.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "js-assistant-test": {
    "name": "hub/matteo/js-assistant-test:latest",
    "id": 107,
    "description": "this is a javascript assistant made for a test",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "mental-health-adviser": {
    "name": "hub/mental-health-adviser:latest",
    "id": 108,
    "description": "This is a simple modelfile that acts as a mental health adviser.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "pc-builder": {
    "name": "hub/micky09/pc-builder:latest",
    "id": 109,
    "description": "This Chatbot can make your perfect pc",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "midjourney-prompt-generator": {
    "name": "hub/midjourney-prompt-generator:latest",
    "id": 110,
    "description": "This simple modelfile will help create a prompt to feed to Midjourney.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "10k-analysis-agent": {
    "name": "hub/mlemasters2012/10k-analysis-agent:latest",
    "id": 111,
    "description": "Analyse 10K and give a summary",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "stable-diffusion-prompt": {
    "name": "hub/mlemasters2012/stable-diffusion-prompt:latest",
    "id": 112,
    "description": "This will create great prompts to paste into stable diffusion",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "open-codelama": {
    "name": "hub/mohitcode/open-codelama:latest",
    "id": 113,
    "description": "CodeLlama",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "motivational-coach": {
    "name": "hub/motivational-coach:latest",
    "id": 114,
    "description": "This is a simple modelfile that acts as a motivational coach.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "bakllava": {
    "name": "hub/neuromorph1c/bakllava:latest",
    "id": 115,
    "description": "Gemma Model is Google's Open Source Model based on Gemini Models. This Modelfile load he 2b-instruct variant with a suitable System message.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "cortana": {
    "name": "hub/newjoker/cortana:latest",
    "id": 116,
    "description": "Cortana is fiercely loyal to the Master Chief and their mission.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "novelist": {
    "name": "hub/novelist:latest",
    "id": 117,
    "description": "This is a simple modelfile that acts as a novelist.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "jessica---strict-dominatrix---(nsfw)": {
    "name": "hub/opencreator/jessica---strict-dominatrix---(nsfw):latest",
    "id": 118,
    "description": "Meet Jessica, a fully automated OnlyFans sales chat bot!",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "shelldon": {
    "name": "hub/peppe/shelldon:latest",
    "id": 119,
    "description": "An expert in shell scripts",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "personal-trainer": {
    "name": "hub/personal-trainer:latest",
    "id": 120,
    "description": "This is a simple modelfile that acts as a personal trainer.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "pet-behaviorist": {
    "name": "hub/pet-behaviorist:latest",
    "id": 121,
    "description": "This is a simple modelfile that acts as a pet behaviorist.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "philosopher": {
    "name": "hub/philosopher:latest",
    "id": 122,
    "description": "This is a simple modelfile that acts as a philosopher.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "philosophy-teacher": {
    "name": "hub/philosophy-teacher:latest",
    "id": 123,
    "description": "This is a simple modelfile that acts as a philosophy teacher.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "plagiarism-checker": {
    "name": "hub/plagiarism-checker:latest",
    "id": 124,
    "description": "This is a simple modelfile that acts as a plagiarism checker.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "poet": {
    "name": "hub/poet:latest",
    "id": 125,
    "description": "This is a simple modelfile that acts as a poet.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "rapper": {
    "name": "hub/rapper:latest",
    "id": 126,
    "description": "This is a simple modelfile that acts as a rapper.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "recipe-maker": {
    "name": "hub/recipe-maker:latest",
    "id": 127,
    "description": "Simple modelfile to generate a recipe from a short list of ingredients.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "recruiter": {
    "name": "hub/recruiter:latest",
    "id": 128,
    "description": "This is a simple modelfile that acts as a recruiter.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "relationship-coach": {
    "name": "hub/relationship-coach:latest",
    "id": 129,
    "description": "This is a simple modelfile that acts as a relationship coach.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "code-companion": {
    "name": "hub/rlust/code-companion:latest",
    "id": 130,
    "description": "A coding assistant that cuts the crap and gets right to the point",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "ry4n": {
    "name": "hub/ry4not4/ry4n:latest",
    "id": 131,
    "description": "assistant for the java language",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "code-companion": {
    "name": "hub/samm/code-companion:latest",
    "id": 132,
    "description": "A coding assistant that cuts the crap and gets right to the point",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llamamodel": {
    "name": "hub/sayantanenator/llamamodel:latest",
    "id": 133,
    "description": "financial analysys",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "qwen-english-translator-and-improver": {
    "name": "hub/schlenkenberger23/qwen-english-translator-and-improver:latest",
    "id": 134,
    "description": "This is a simple modelfile that acts as an english translator and improver.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "screenwriter": {
    "name": "hub/screenwriter:latest",
    "id": 135,
    "description": "This is a simple modelfile that acts as a screenwriter.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "socrates.ai": {
    "name": "hub/slashed/socrates.ai:latest",
    "id": 136,
    "description": "Socrates the Philosopher",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "lao-tzu": {
    "name": "hub/spooknik/lao-tzu:latest",
    "id": 137,
    "description": "Lao Tzu",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "stand-up-comedian": {
    "name": "hub/stand-up-comedian:latest",
    "id": 138,
    "description": "This is a simple modelfile that acts as a stand-up comedian.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "storyteller": {
    "name": "hub/storyteller:latest",
    "id": 139,
    "description": "This is a simple modelfile that acts as a storyteller.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "websitescreenshot_to_text": {
    "name": "hub/stroben/websitescreenshot_to_text:latest",
    "id": 140,
    "description": "Provide a description and analysis of an image",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "ten-tweets": {
    "name": "hub/ten-tweets:latest",
    "id": 141,
    "description": "This is a simple modelfile that generates ten tweets based off any topic.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "jungian-dream-interpreter": {
    "name": "hub/theory/jungian-dream-interpreter:latest",
    "id": 142,
    "description": "Let Carl Jung guide you through your dreamscape.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "expert-old-man-dave": {
    "name": "hub/threadabort/expert-old-man-dave:latest",
    "id": 143,
    "description": "An uncensored expert in everything. This model will try to be as truthful as possible and is capable of giving opinions you may not like.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "doomsday-survivalist": {
    "name": "hub/titus/doomsday-survivalist:latest",
    "id": 144,
    "description": "The Doomsday Survivalist is designed to offer practical advice and safety-oriented tips for surviving in various extreme and catastrophic scenarios, suitable for those interested in comprehensive emergency preparedness and survival skills.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "travel-guide": {
    "name": "hub/travel-guide:latest",
    "id": 145,
    "description": "This is a simple modelfile that acts as a travel guide.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "anonymous-chat": {
    "name": "hub/uaquax/anonymous-chat:latest",
    "id": 146,
    "description": "Anonymous chat",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "chatgpt": {
    "name": "hub/uaquax/chatgpt:latest",
    "id": 147,
    "description": "ChatGPT by OpenAI",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "enhancer": {
    "name": "hub/uaquax/enhancer:latest",
    "id": 148,
    "description": "Enhance texts",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "moly": {
    "name": "hub/uaquax/moly:latest",
    "id": 149,
    "description": "Moly is a model that helps you to create modelfiles",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "sdexpert": {
    "name": "hub/unkillable/sdexpert:latest",
    "id": 150,
    "description": "An expert in stable diffusion prompt expansion",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "hub/username/based-dolphin-mixtral:latest": {
    "name": "hub/username/based-dolphin-mixtral:latest",
    "id": 151,
    "description": "Dolphin model with a special system prompt.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "hub/uxoxo/ux-assistant:latest": {
    "name": "hub/uxoxo/ux-assistant:latest",
    "id": 152,
    "description": "A simple modelfile that will respond to any questions as a senior UX Designer assistant.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "hub/uxui-developer:latest": {
    "name": "hub/uxui-developer:latest",
    "id": 153,
    "description": "This is a simple modelfile that acts as a UX/UI developer.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "hub/vpb11/Automated OnlyFans Sales BOT V1.0.0:latest": {
    "name": "hub/vpb11/Automated OnlyFans Sales BOT V1.0.0:latest",
    "id": 154,
    "description": "Meet Jessica, a fully automated OnlyFans sales chat bot!",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "hub/web-design-consultant:latest": {
    "name": "hub/web-design-consultant:latest",
    "id": 155,
    "description": "This is a simple modelfile that acts as a web design consultant.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "hub/william-shakespeare:latest": {
    "name": "hub/william-shakespeare:latest",
    "id": 156,
    "description": "Ask the famous animator and business man Walt Disney a question.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "hub/williamhill/nba-expert:latest": {
    "name": "hub/williamhill/nba-expert:latest",
    "id": 157,
    "description": "An expert model for NBA knowledge",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "hub/wygocuxyco/trash_talker:latest": {
    "name": "hub/wygocuxyco/trash_talker:latest",
    "id": 158,
    "description": "This character is a living, breathing middle finger to the establishment - a testament to the power of free speech and non-conformity.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "jimscard/whiterabbit-neo:latest": {
    "name": "jimscard/whiterabbit-neo:latest",
    "id": 159,
    "description": "Reads EULAs, can summarize EULAs and terms of serivce agreements",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llama2:13b": {
    "name": "llama2:13b",
    "id": 160,
    "description": "LLAMA model with a special system prompt.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llama2:latest": {
    "name": "llama2:latest",
    "id": 161,
    "description": "LLAMA model with a special system prompt.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llama3:latest": {
    "name": "llama3:latest",
    "id": 162,
    "description": "LLAMA model with a special system prompt.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llava:13b-v1.5-q8_0": {
    "name": "llava:13b-v1.5-q8_0",
    "id": 163,
    "description": "LLaVA based image analysis - alternate prompt",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llava:13b": {
    "name": "llava:13b",
    "id": 164,
    "description": "LLaVA based image analysis",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "llava:7b-v1.6-vicuna-q4_0": {
    "name": "llava:7b-v1.6-vicuna-q4_0",
    "id": 165,
    "description": "LLaVA based image analysis",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "mc-crafty-companion:latest": {
    "name": "mc-crafty-companion:latest",
    "id": 166,
    "description": "Your go-to assistant for Minecraft tips, tricks, and advice",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "mechanic---your-car-guy:latest": {
    "name": "mechanic---your-car-guy:latest",
    "id": 167,
    "description": "Car troubles? Just ask your expert mechanic friend.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "medllama2:latest": {
    "name": "medllama2:latest",
    "id": 168,
    "description": "This Modelfile is for generating random natural sentences as AI image prompts.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "mistral:7b-instruct-v0.2-fp16": {
    "name": "mistral:7b-instruct-v0.2-fp16",
    "id": 169,
    "description": "Principal Security Engineer for fintech, focusing on STRIDE, MITRE ATT&CK, SAST, and AWS Cloud.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "mistral:latest": {
    "name": "mistral:latest",
    "id": 170,
    "description": "Principal Security Engineer for fintech, focusing on STRIDE, MITRE ATT&CK, SAST, and AWS Cloud.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "nous-hermes:latest": {
    "name": "nous-hermes:latest",
    "id": 171,
    "description": "Reads EULAs, can summarize EULAs and terms of serivce agreements",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "nous-hermes2-mixtral:latest": {
    "name": "nous-hermes2-mixtral:latest",
    "id": 172,
    "description": "Reads EULAs, can summarize EULAs and terms of serivce agreements",
    "Latency": "INFINITE",
    "Keep / Delete": "DEL",
    "Whitelisted": ""
  },
  "openchat:latest": {
    "name": "openchat:latest",
    "id": 173,
    "description": "Anonymous chat",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "openhermes:latest": {
    "name": "openhermes:latest",
    "id": 174,
    "description": "Expert Librarian, you can request any topic, author, or book, and it will provide you with all the information you need on that subject.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "openhermes2.5-mistral:7b-q4_K_M": {
    "name": "openhermes2.5-mistral:7b-q4_K_M",
    "id": 175,
    "description": "Not technically a lawyer...",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "openhermes2.5-mistral:latest": {
    "name": "openhermes2.5-mistral:latest",
    "id": 176,
    "description": "Not technically a lawyer...",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "orca-mini:latest": {
    "name": "orca-mini:latest",
    "id": 177,
    "description": "Car troubles? Just ask your expert mechanic friend.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "phi:latest": {
    "name": "phi:latest",
    "id": 178,
    "description": "Phi-2: The surprising power of small language models",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "phind-codellama:latest": {
    "name": "phind-codellama:latest",
    "id": 179,
    "description": "AI programming assistant",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "qwen:14b": {
    "name": "qwen:14b",
    "id": 180,
    "description": "This is a simple modelfile that acts as an english translator and improver.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "samantha-mistral:latest": {
    "name": "samantha-mistral:latest",
    "id": 181,
    "description": "An uncensored expert in everything. This model will try to be as truthful as possible and is capable of giving opinions you may not like.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "stablelm2:latest": {
    "name": "stablelm2:latest",
    "id": 182,
    "description": "The Data Archivist is designed to provide expert guidance in the field of digital archiving, suitable for users seeking knowledge and assistance in preserving and organizing digital information.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "stardew-valley-counselor:latest": {
    "name": "stardew-valley-counselor:latest",
    "id": 183,
    "description": "Assumes every request for help is in the context of playing Stardew Valley",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "starling-lm:7b-alpha-q5_K_M": {
    "name": "starling-lm:7b-alpha-q5_K_M",
    "id": 184,
    "description": "A simple modelfile that will respond to any questions as a senior UX Designer assistant.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "starling-lm:latest": {
    "name": "starling-lm:latest",
    "id": 185,
    "description": "A simple modelfile that will respond to any questions as a senior UX Designer assistant.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "tinyllama:latest": {
    "name": "tinyllama:latest",
    "id": 186,
    "description": "The Doomsday Survivalist is designed to offer practical advice and safety-oriented tips for surviving in various extreme and catastrophic scenarios, suitable for those interested in comprehensive emergency preparedness and survival skills.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "website-conversion-rate-optimization-(cro)-expert:latest": {
    "name": "website-conversion-rate-optimization-(cro)-expert:latest",
    "id": 187,
    "description": "This guy will help you turn your website into a winner, finding all the ways to squeeze out better profitability",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "whiterabbitneo-13b.Q2_K.gguf:latest": {
    "name": "whiterabbitneo-13b.Q2_K.gguf:latest",
    "id": 188,
    "description": "Builds websites with responsive designs",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "wizard-math:latest": {
    "name": "wizard-math:latest",
    "id": 189,
    "description": "A friendly programming assistant ready to pair on your next coding task",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "wizard-vicuna-uncensored:13b": {
    "name": "wizard-vicuna-uncensored:13b",
    "id": 190,
    "description": "An expert model for NBA knowledge",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "wizard-vicuna-uncensored:7b": {
    "name": "wizard-vicuna-uncensored:7b",
    "id": 191,
    "description": "Model wizard-vicuna-uncensored with 7b variant.",
    "Latency": "",
    "Keep / Delete": "",
    "Whitelisted": ""
  },
  "wizard-vicuna-uncensored:latest": {
      "name": "wizard-vicuna-uncensored:latest",
      "id": 192,
      "description": "Latest version of model wizard-vicuna-uncensored.",
      "Latency": "",
      "Keep / Delete": "",
    "Whitelisted": ""
  },
  "yarn-llama2:latest": {
      "name": "yarn-llama2:latest",
      "id": 193,
      "description": "Latest version of model yarn-llama2.",
      "Latency": "",
      "Keep / Delete": "",
    "Whitelisted": ""
  },
  "zephyr:7b-beta-q5_K_M": {
      "name": "zephyr:7b-beta-q5_K_M",
      "id": 194,
      "description": "Model zephyr with 7b variant and beta configuration q5_K_M.",
      "Latency": "",
      "Keep / Delete": "",
    "Whitelisted": ""
  },
  "zephyr:latest": {
      "name": "zephyr:latest",
      "id": 195,
      "description": "Latest version of model zephyr.",
      "Latency": "",
      "Keep / Delete": ""
  }


};

export default models;
