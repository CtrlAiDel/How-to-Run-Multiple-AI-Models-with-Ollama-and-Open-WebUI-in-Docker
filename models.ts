export type UserModelState = {
  modelAlias: string,
  modelName: string
}

export const ollamaModels = {
    "accountant": {
        id: 15,
        name: "hub/accountant:latest",
        description: "Your financial assistant."
    },
    "advertiser": {
        id: 16,
        name: "hub/advertiser:latest",
        description: "Advertising expert."
    },
    "advisor": {
        id: 19,
        name: "hub/andrew/artist-advisor:latest",
        description: "Your personal advisor."
    },
    "ai-assisted-doctor": {
        id: 17,
        name: "hub/ai-assisted-doctor:latest",
        description: "Doctor assisted by AI."
    },
    "ai-writing-tutor": {
        id: 18,
        name: "hub/ai-writing-tutor:latest",
        description: "A writing tutor powered by AI."
    },
    "automobile-mechanic": {
        id: 21,
        name: "hub/automobile-mechanic:latest",
        description: "Your car mechanic assistant."
    },
    "bakllava": {
        id: 1,
        name: "bakllava:latest",
        description: "A sweet model assistant."
    },
    "based-dolphin-mixtral": {
        id: 25,
        name: "hub/based-dolphin-mixtral:latest",
        description: "Dolphin Mixtral's enhanced version."
    },
    "bitbinge_lawx": {
        id: 26,
        name: "hub/bitbinge/lawx:latest",
        description: "Assistant specialized in law."
    },
    "career-counselor": {
        id: 27,
        name: "hub/career-counselor:latest",
        description: "Guide to your career path."
    },
    "chef": {
        id: 29,
        name: "hub/chef:latest",
        description: "Your cooking assistant."
    },
    "codellama": {
        id: 2,
        name: "codellama:latest",
        description: "Your friendly coding assistant."
    },
    "commentariat": {
        id: 34,
        name: "hub/commentariat:latest",
        description: "Commentary assistant."
    },
    "composer": {
        id: 35,
        name: "hub/composer:latest",
        description: "Your musical composition assistant."
    },
    "cyber-security-specialist": {
        id: 38,
        name: "hub/cyber-security-specialist:latest",
        description: "Specialist in cyber security."
    },
    "data-archivist": {
        id: 39,
        name: "hub/darkstorm2150/Data-Archivist:latest",
        description: "Archivist assistant for data management."
    },
    "data-hoarder": {
        id: 40,
        name: "hub/darkstorm2150/Data-Hoarder:latest",
        description: "Assistant specialized in data hoarding."
    },
    "debate-coach": {
        id: 48,
        name: "hub/debate-coach:latest",
        description: "Coach to improve your debating skills."
    },
    "debater": {
        id: 49,
        name: "hub/debater:latest",
        description: "Assistant to improve your debating skills."
    },
    "deepseek-coder": {
        id: 3,
        name: "deepseek-coder:6.7b",
        description: "An advanced coding assistant specializing in deep learning."
    },
    "dentist": {
        id: 50,
        name: "hub/dentist:latest",
        description: "Your dental assistant."
    },
    "devops": {
        id: 51,
        name: "hub/devops:latest",
        description: "DevOps assistant for software development."
    },
    "dnd": {
        id: 24,
        name: "hub/bagellama/d&d-dungeon-master-assistant:latest",
        description: "Dungeons & Dragons assistant."
    },
    "doctor": {
        id: 52,
        name: "hub/doctor:latest",
        description: "Doctor assistant for medical consultations."
    },
    "doctor_cardiologist": {
        id: 53,
        name: "hub/doctor/cardiologist:latest",
        description: "Cardiologist assistant."
    },
    "doctor_dermatologist": {
        id: 54,
        name: "hub/doctor/dermatologist:latest",
        description: "Dermatologist assistant."
    },
    "doctor_gastroenterologist": {
        id: 55,
        name: "hub/doctor/gastroenterologist:latest",
        description: "Gastroenterologist assistant."
    },
    "doctor_neurologist": {
        id: 56,
        name: "hub/doctor/neurologist:latest",
        description: "Neurologist assistant."
    },
    "doctor_psychologist": {
        id: 57,
        name: "hub/doctor/psychologist:latest",
        description: "Psychologist assistant."
    },
    "doge": {
        id: 58,
        name: "hub/doge:latest",
        description: "Very assistant, much helpful."
    },
    "dolphin-llama3": {
        id: 4,
        name: "dolphin-llama3:latest",
        description: "The LLAMA3 model with dolphin's touch."
    },
    "dolphin-mistral": {
        id: 7,
        name: "dolphin-mistral:latest",
        description: "The Mistral model with dolphin's touch."
    },
    "dolphin-mistral1": {
        id: 5,
        name: "dolphin-mistral:7b-v2.6-dpo-laser-q8_0",
        description: "Mistral model fine-tuned for specific queries with dolphin's twist."
    },
    "dolphin-mistral2": {
        id: 6,
        name: "dolphin-mistral:7b-v2.6-q4_K_M",
        description: "Mistral model with dolphin's enhancements."
    },
    "dolphin-mixtral": {
        id: 9,
        name: "dolphin-mixtral:latest",
        description: "Dolphin model with Mixtral enhancements."
    },
    "dolphin-mixtral1": {
        id: 8,
        name: "dolphin-mixtral:8x7b-v2.6-q3_K_L",
        description: "Mixtral model with dolphin's touch."
    },
    "dolphin-phi": {
        id: 10,
        name: "dolphin-phi:latest",
        description: "Phi model with dolphin's touch."
    },
    "doomsday-survivalist": {
        id: 41,
        name: "hub/darkstorm2150/Doomsday-Survivalist:latest",
        description: "Expert in surviving doomsday scenarios."
    },
    "dungeon-master": {
        id: 59,
        name: "hub/dungeon-master:latest",
        description: "Assists in running role-playing game sessions."
    },
    "editor": {
        id: 60,
        name: "hub/editor:latest",
        description: "Editorial assistant."
    },
    "emily": {
        id: 32,
        name: "hub/chronixsc/emily:latest",
        description: "Emily, your virtual companion."
    },
    "engineer": {
        id: 62,
        name: "hub/engineer:latest",
        description: "Engineering assistant."
    },
    "ent": {
        id: 63,
        name: "hub/ent:latest",
        description: "Treebeard's assistant."
    },
    "entrepreneur": {
        id: 61,
        name: "hub/entrepreneur:latest",
        description: "Entrepreneurial assistant."
    },
    "eulabot": {
        id: 33,
        name: "hub/claragreen/eulabot:latest",
        description: "Eulabot, your virtual lab assistant."
    },
    "finance-consultant": {
        id: 64,
        name: "hub/finance-consultant:latest",
        description: "Consultant for financial matters."
    },
    "finance-planner": {
        id: 65,
        name: "hub/finance-planner:latest",
        description: "Financial planning assistant."
    },
    "financial-analyst": {
        id: 20,
        name: "hub/andrew/financial-analyst:latest",
        description: "Analyze finances with this AI."
    },
    "fortune-teller": {
        id: 66,
        name: "hub/fortune-teller:latest",
        description: "Your personal fortune teller."
    },
    "game-recommender": {
        id: 30,
        name: "hub/chiph31/game-recommender:latest",
        description: "Recommends games based on your preferences."
    },
    "gamer": {
        id: 67,
        name: "hub/gamer:latest",
        description: "Your gaming assistant."
    },
    "gemma2b": {
        id: 11,
        name: "gemma:2b",
        description: "Gemma model, version 2b."
    },
    "gemma7b": {
        id: 12,
        name: "gemma:7b",
        description: "Gemma model, version 7b."
    },
    "genie": {
        id: 68,
        name: "hub/genie:latest",
        description: "Your wish is my command."
    },
    "god": {
        id: 69,
        name: "hub/god:latest",
        description: "The almighty."
    },
    "gossip": {
        id: 70,
        name: "hub/gossip:latest",
        description: "Your gossip assistant."
    },
    "grad-school-consultant": {
        id: 71,
        name: "hub/grad-school-consultant:latest",
        description: "Consultant for graduate school admissions."
    },
    "grandma": {
        id: 72,
        name: "hub/grandma:latest",
        description: "Your virtual grandma."
    },
    "guidance-counselor": {
        id: 73,
        name: "hub/guidance-counselor:latest",
        description: "Provides guidance for life choices."
    },
    "hacker": {
        id: 74,
        name: "hub/hacker:latest",
        description: "Hacking assistant."
    },
    "handyman": {
        id: 75,
        name: "hub/handyman:latest",
        description: "Your virtual handyman."
    },
    "historian": {
        id: 76,
        name: "hub/historian:latest",
        description: "Historical assistant."
    },
    "history-narrator": {
        id: 22,
        name: "hub/axel/history-narrator:latest",
        description: "Narrator of historical events."
    },
    "homework-helper": {
        id: 77,
        name: "hub/homework-helper:latest",
        description: "Helps with homework."
    },
    "homoeopath": {
        id: 14,
        name: "hub/aadesh89/homoeopath:latest",
        description: "Homeopathy expert."
    },
    "inspiration": {
        id: 78,
        name: "hub/inspiration:latest",
        description: "Provides inspiration."
    },
    "interior-designer": {
        id: 79,
        name: "hub/interior-designer:latest",
        description: "Interior design assistant."
    },
    "lawyer": {
        id: 80,
        name: "hub/lawyer:latest",
        description: "Your virtual legal assistant."
    },
    "math-tutor": {
        id: 85,
        name: "hub/mrspacman/math-tutor:latest",
        description: "Your math tutoring assistant."
    },
    "ml-researcher": {
        id: 81,
        name: "hub/ml-researcher:latest",
        description: "Assistant in machine learning research."
    },
    "mom": {
        id: 82,
        name: "hub/mom:latest",
        description: "Your virtual mom."
    },
    "movie-critic": {
        id: 83,
        name: "hub/movie-critic:latest",
        description: "Provides critiques of movies."
    },
    "movie-reviewer": {
        id: 84,
        name: "hub/movie-reviewer:latest",
        description: "Reviews movies for you."
    },
    "music-teacher": {
        id: 86,
        name: "hub/music-teacher:latest",
        description: "Your music teaching assistant."
    },
    "netflix": {
        id: 87,
        name: "hub/netflix:latest",
        description: "Provides recommendations for Netflix."
    },
    "nft-consultant": {
        id: 88,
        name: "hub/nft-consultant:latest",
        description: "Consultant for non-fungible tokens."
    },
    "ninja": {
        id: 89,
        name: "hub/ninja:latest",
        description: "Your virtual ninja."
    },
    "non-technical-writer": {
        id: 90,
        name: "hub/non-technical-writer:latest",
        description: "Writes non-technical content."
    },
    "novelist": {
        id: 91,
        name: "hub/novelist:latest",
        description: "Assists in writing novels."
    },
    "oracle": {
        id: 92,
        name: "hub/oracle:latest",
        description: "Provides wisdom and guidance."
    },
    "parent": {
        id: 93,
        name: "hub/parent:latest",
        description: "Your virtual parent."
    },
    "pathologist": {
        id: 94,
        name: "hub/pathologist:latest",
        description: "Pathology assistant."
    },
    "pet-doctor": {
        id: 95,
        name: "hub/pet-doctor:latest",
        description: "Your virtual pet doctor."
    },
    "philosopher": {
        id: 96,
        name: "hub/philosopher:latest",
        description: "Philosophical assistant."
    },
    "physicist": {
        id: 97,
        name: "hub/physicist:latest",
        description: "Assists in physics-related inquiries."
    },
    "poet": {
        id: 98,
        name: "hub/poet:latest",
        description: "Writes poetry."
    },
    "programmer": {
        id: 99,
        name: "hub/programmer:latest",
        description: "Your programming assistant."
    },
    "psychiatrist": {
        id: 100,
        name: "hub/psychiatrist:latest",
        description: "Psychiatry assistant."
    },
    "psychologist": {
        id: 101,
        name: "hub/psychologist:latest",
        description: "Psychology assistant."
    },
    "quantum-physics-teacher": {
        id: 102,
        name: "hub/quantum-physics-teacher:latest",
        description: "Teaches quantum physics."
    },
    "race-car-driver": {
        id: 103,
        name: "hub/race-car-driver:latest",
        description: "Your virtual race car driver."
    },
    "race-horse-trainer": {
        id: 104,
        name: "hub/race-horse-trainer:latest",
        description: "Trains racehorses."
    },
    "racecar-driver": {
        id: 105,
        name: "hub/racecar-driver:latest",
        description: "Your virtual racecar driver."
    },
    "recruitment-officer": {
        id: 106,
        name: "hub/recruitment-officer:latest",
        description: "Recruitment assistant."
    },
    "resume-reviewer": {
        id: 107,
        name: "hub/resume-reviewer:latest",
        description: "Reviews and improves resumes."
    },
    "retailer": {
        id: 108,
        name: "hub/retailer:latest",
        description: "Virtual retail assistant."
    },
    "rpg-dungeon-master": {
        id: 109,
        name: "hub/rpg-dungeon-master:latest",
        description: "Assists in running role-playing game sessions."
    },
    "sailor": {
        id: 110,
        name: "hub/sailor:latest",
        description: "Your virtual sailor."
    },
    "sarah": {
        id: 31,
        name: "hub/chmurli/sarah-lovely-caring-girlfriend:latest",
        description: "Your virtual girlfriend, caring and lovely."
    },
    "scientist1": {
        id: 111,
        name: "hub/scientist:latest",
        description: "Assists in scientific research."
    },
    "security-guard": {
        id: 112,
        name: "hub/security-guard:latest",
        description: "Your virtual security guard."
    },
    "security-risk": {
        id: 28,
        name: "hub/ch0ks/security-risk-specialist-and-strategist-mistral:latest",
        description: "Specialist in security risk analysis and strategy."
    },
    "shakespeare": {
        id: 113,
        name: "hub/shakespeare:latest",
        description: "Writes like Shakespeare."
    },
    "singer": {
        id: 114,
        name: "hub/singer:latest",
        description: "Singing assistant."
    },
    "skateboarder": {
        id: 115,
        name: "hub/skateboarder:latest",
        description: "Your virtual skateboarder."
    },
    "smuggler": {
        id: 116,
        name: "hub/smuggler:latest",
        description: "Your virtual smuggler."
    },
    "sommelier": {
        id: 117,
        name: "hub/sommelier:latest",
        description: "Wine expert."
    },
    "spy": {
        id: 118,
        name: "hub/spy:latest",
        description: "Your virtual spy."
    },
    "statistician": {
        id: 119,
        name: "hub/statistician:latest",
        description: "Statistical assistant."
    },
    "steve-jobs": {
        id: 13,
        name: "hub/aaartist/steve-jobs:latest",
        description: "Steve Jobs, the visionary."
    },
    "stock-market-analyst": {
        id: 120,
        name: "hub/stock-market-analyst:latest",
        description: "Analyst for stock markets."
    },
    "strategy-consultant": {
        id: 121,
        name: "hub/strategy-consultant:latest",
        description: "Consultant for strategic planning."
    },
    "studybuddy": {
        id: 23,
        name: "hub/bacx/studybuddy:latest",
        description: "Your study assistant."
    },
    "superhero": {
        id: 122,
        name: "hub/superhero:latest",
        description: "Your virtual superhero."
    },
    "supervillain": {
        id: 123,
        name: "hub/supervillain:latest",
        description: "Your virtual supervillain."
    },
    "swimmer": {
        id: 124,
        name: "hub/swimmer:latest",
        description: "Your virtual swimmer."
    },
    "teacher": {
        id: 125,
        name: "hub/teacher:latest",
        description: "Teaching assistant."
    },
    "tiktok-star": {
        id: 126,
        name: "hub/tiktok-star:latest",
        description: "TikTok influencer."
    },
    "time-traveler": {
        id: 127,
        name: "hub/time-traveler:latest",
        description: "Your virtual time traveler."
    },
    "toy-maker": {
        id: 128,
        name: "hub/toy-maker:latest",
        description: "Designs virtual toys."
    },
    "translator": {
        id: 129,
        name: "hub/translator:latest",
        description: "Translation assistant."
    },
    "treasure-hunter": {
        id: 130,
        name: "hub/treasure-hunter:latest",
        description: "Hunts for treasure."
    },
    "tutor": {
        id: 131,
        name: "hub/tutor:latest",
        description: "Tutoring assistant."
    },
    "urban-survivalist": {
        id: 46,
        name: "hub/darkstorm2150/Urban-Survivalist:latest",
        description: "Expert in surviving urban environments."
    },
    "veterinarian": {
        id: 132,
        name: "hub/veterinarian:latest",
        description: "Your virtual veterinarian."
    },
    "vinny_tax-helper": {
        id: 133,
        name: "hub/vinny/tax-helper:latest",
        description: "Assists in tax-related matters."
    },
    "vinny_teach-a-language": {
        id: 134,
        name: "hub/vinny/teach-a-language:latest",
        description: "Language teaching assistant."
    },
    "virtual-assistant": {
        id: 135,
        name: "hub/virtual-assistant:latest",
        description: "General virtual assistant."
    },
    "voiceover-artist": {
        id: 136,
        name: "hub/voiceover-artist:latest",
        description: "Voiceover artist assistant."
    },
    "walt-disney": {
        id: 37,
        name: "hub/crackmac/walt-disney:latest",
        description: "Walt Disney, the legendary animator."
    },
    "wedding-planner": {
        id: 137,
        name: "hub/wedding-planner:latest",
        description: "Assists in planning weddings."
    },
    "wilderness-survivalist": {
        id: 47,
        name: "hub/darkstorm2150/Wilderness-Survivalist:latest",
        description: "Expert in surviving wilderness environments."
    },
    "witch": {
        id: 138,
        name: "hub/witch:latest",
        description: "Your virtual witch."
    },
    "writer": {
        id: 139,
        name: "hub/writer:latest",
        description: "Assists in writing."
    },
    "yoga-teacher": {
        id: 140,
        name: "hub/yoga-teacher:latest",
        description: "Your virtual yoga teacher."
    },
    "youtuber": {
        id: 141,
        name: "hub/youtuber:latest",
        description: "Your virtual YouTuber."
    },
    "youtuber-twitch-streamer": {
        id: 142,
        name: "hub/youtuber-twitch-streamer:latest",
        description: "Streams on YouTube and Twitch."
    },
    "zephyr": {
        id: 143,
        name: "hub/zephyr:latest",
        description: "Your virtual wind spirit."
    },
    "zurkon_bot": {
        id: 144,
        name: "hub/zurkon_bot:latest",
        description: "Zurkon Bot, your virtual assistant."
    },
};

export const defaultModelAlias = "llama3";
export const defaultModel = ollamaModels[defaultModelAlias];
