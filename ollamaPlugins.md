**// This list is intended for use with a publicly available Discord bot scripted by Izocel, which communicates with the Ollama API via private DM. However, setting up the bot requires a fair amount of work, and you would need to host it yourself.**

export type AIModel = {
    id: number,
    alias: string,
    name: string,
    description: string
}

export type ChatMessage = {
    role: string,
    content?: string,
    [rest: string]: any;
};

export type UserState = {
    model: AIModel
    messages: ChatMessage[]
};

export class OllamaPlugin {
    static Models: AIModel[] = [
        {
            id: 1,
            name: "aya-expanse:latest",
            alias: "aya-expanse",
            description:
                "Size: 5.1 GB. Aya Expanse is a multilingual model supporting 23 languages.",
        },
        {
            id: 2,
            name: "dolphin-llama3:latest",
            alias: "dolphin-llama3",
            description:
                "Size: 4.7 GB. Combines features of Dolphin and Llama3 for enhanced capabilities.",
        },
        {
            id: 3,
            name: "dolphin-phi:latest",
            alias: "dolphin-phi",
            description:
                "Size: 1.6 GB. Combines Dolphin and Phi models for superior performance.",
        },
        {
            id: 4,
            name: "gemma2:2b",
            alias: "gemma2",
            description:
                "Size: 1.6 GB. Gemma2 with 2B parameters for efficient tasks.",
        },
        {
            id: 5,
            name: "gemma2:9b",
            alias: "gemma2-9b",
            description:
                "Size: 5.4 GB. Gemma2 with 9B parameters for complex applications.",
        },
        {
            id: 6,
            name: "gemma2:latest",
            alias: "gemma2-latest",
            description:
                "Size: 5.4 GB. Latest version of Gemma2 with enhanced features.",
        },
        {
            id: 7,
            name: "granite3-dense:2b",
            alias: "granite3-dense",
            description:
                "Size: 1.6 GB. Granite3 Dense with 2B parameters for efficiency.",
        },
        {
            id: 8,
            name: "granite3-dense:8b",
            alias: "granite3-dense-8b",
            description:
                "Size: 4.9 GB. Granite3 Dense with 8B parameters for complex tasks.",
        },
        {
            id: 9,
            name: "granite3-dense:latest",
            alias: "granite3-dense-latest",
            description:
                "Size: 1.6 GB. Latest Granite3 Dense optimized for dense computations.",
        },
        {
            id: 10,
            name: "granite3-moe:1b",
            alias: "granite3-moe",
            description:
                "Size: 821 MB. Granite3 MoE with 1B parameters for lightweight applications.",
        },
        {
            id: 11,
            name: "granite3-moe:3b",
            alias: "granite3-moe-3b",
            description:
                "Size: 2.1 GB. Granite3 MoE with 3B parameters for specialized tasks.",
        },
        {
            id: 12,
            name: "granite3-moe:latest",
            alias: "granite3-moe-latest",
            description: "Size: 2.1 GB. Latest version of Granite3 MoE model.",
        },
        {
            id: 13,
            name: "llama-guard3:1b",
            alias: "llamaguard3",
            description:
                "Size: 1.6 GB. Llama-Guard3 with 1B parameters for efficient security.",
        },
        {
            id: 14,
            name: "llama-guard3:latest",
            alias: "llamaguard3-latest",
            description:
                "Size: 4.9 GB. Latest Llama-Guard3 providing robust protections.",
        },
        {
            id: 15,
            name: "llama2-chinese:latest",
            alias: "llama2-chinese",
            description:
                "Size: 3.8 GB. Llama2 fine-tuned for enhanced Chinese language capabilities.",
        },
        {
            id: 16,
            name: "llama2-uncensored:latest",
            alias: "llama2-uncensored",
            description:
                "Size: 3.8 GB. Uncensored version of Llama2 without content restrictions.",
        },
        {
            id: 17,
            name: "llama2:latest",
            alias: "llama2",
            description:
                "Size: 3.8 GB. Llama2 is a versatile model for various language tasks.",
        },
        {
            id: 18,
            name: "llama3-gradient:latest",
            alias: "llama3-gradient",
            description:
                "Size: 4.7 GB. Optimized for gradient-based learning in Llama3.",
        },
        {
            id: 19,
            name: "llama3.1:latest",
            alias: "llama3.1",
            description:
                "Size: 4.7 GB. Updated version of Llama3 with performance improvements.",
        },
        {
            id: 20,
            name: "llama3.2:1b",
            alias: "llama3.2",
            description:
                "Size: 1.3 GB. Compact Llama3.2 with 1B parameters for quick tasks.",
        },
        {
            id: 21,
            name: "llama3.2:3b",
            alias: "llama3.2-3b",
            description:
                "Size: 2.0 GB. Llama3.2 with 3B parameters for balanced performance.",
        },
        {
            id: 22,
            name: "llama3.2:latest",
            alias: "llama3.2-latest",
            description: "Size: 2.0 GB. Latest Llama3.2 optimized for performance.",
        },
        {
            id: 23,
            name: "llama3:8b",
            alias: "llama3-8b",
            description:
                "Size: 4.7 GB. Llama3 with 8B parameters for enhanced capabilities.",
        },
        {
            id: 24,
            name: "llama3:latest",
            alias: "llama3",
            description:
                "Size: 4.7 GB. Llama3 advanced language model for general-purpose tasks.",
        },
        {
            id: 25,
            name: "llava-llama3:latest",
            alias: "llava-llama3",
            description:
                "Size: 5.5 GB. LLaVA-Llama3 optimized for visual and language tasks.",
        },
        {
            id: 26,
            name: "llava-phi3:latest",
            alias: "llava-phi3",
            description:
                "Size: 2.9 GB. Combines LLaVA and Phi3 for advanced visual-language processing.",
        },
        {
            id: 27,
            name: "llava:latest",
            alias: "llava",
            description:
                "Size: 4.7 GB. LLaVA specializes in language and vision applications.",
        },
        {
            id: 28,
            name: "mannix/gemma2-9b-simpo:latest",
            alias: "gemma2-simpo",
            description:
                "Size: 5.5 GB. Gemma2 9B Simpo specialized for specific applications.",
        },
        {
            id: 29,
            name: "mistral:latest",
            alias: "mistral",
            description:
                "Size: 4.1 GB. Mistral is designed for high-performance language processing.",
        },
        {
            id: 30,
            name: "nemotron-mini:latest",
            alias: "nemotron-mini",
            description:
                "Size: 2.7 GB. NemoTron Mini is a smaller model for efficient computations.",
        },
        {
            id: 31,
            name: "nomic-embed-text:latest",
            alias: "nomic-embed",
            description:
                "Size: 274 MB. Nomic Embed Text generates high-quality text embeddings.",
        },
        {
            id: 32,
            name: "phi3:latest",
            alias: "phi3",
            description:
                "Size: 2.2 GB. Phi3 is a compact model with significant potential.",
        },
        {
            id: 33,
            name: "phi:latest",
            alias: "phi",
            description:
                "Size: 1.6 GB. Phi is a foundational model for language understanding.",
        },
        {
            id: 34,
            name: "qwen2:0.5b",
            alias: "qwen2",
            description:
                "Size: 352 MB. Lightweight Qwen2 model with 0.5B parameters.",
        },
        {
            id: 35,
            name: "qwen2:1.5b",
            alias: "qwen2-1.5b",
            description:
                "Size: 934 MB. Qwen2 with 1.5B parameters balancing speed and power.",
        },
        {
            id: 36,
            name: "qwen2:7b",
            alias: "qwen2-7b",
            description:
                "Size: 4.4 GB. Qwen2 with 7B parameters for high-performance tasks.",
        },
        {
            id: 37,
            name: "qwen2:latest",
            alias: "qwen2-latest",
            description: "Size: 4.4 GB. Latest Qwen2 model with enhanced features.",
        },
        {
            id: 38,
            name: "reader-lm:latest",
            alias: "reader-lm",
            description:
                "Size: 934 MB. Reader-LM excels at reading comprehension tasks.",
        },
        {
            id: 39,
            name: "shieldgemma:2b",
            alias: "shieldgemma",
            description:
                "Size: 1.7 GB. ShieldGemma with 2B parameters for efficient protection.",
        },
        {
            id: 40,
            name: "shieldgemma:9b",
            alias: "shieldgemma-9b",
            description:
                "Size: 5.8 GB. ShieldGemma with 9B parameters for advanced security.",
        },
        {
            id: 41,
            name: "llama3.2-vision:latest",
            alias: "llama3-2-vision",
            description: 
                "Size: 3.2 GB. Llama3.2 optimized for vision and language tasks."
        },
        {
            id: 42,
            name: "tinydolphin:latest",
            alias: "tinydolphin",
            description:
                "Size: 636 MB. TinyDolphin is a compact model suitable for lightweight tasks.",
        },
        {
            id: 43,
            name: "marco-o1:latest",
            alias: "marco-o1",
            description: 
                "Size: 1.2 GB. Marco-O1 designed for specialized operations."
        }
    ];

    static DefaultModel = OllamaPlugin.Models.find((m) => m.alias === "llama3.1");

    /**
     * Will check if the prefix contains a model name or id.
     * Try to get the model with a name or id.
     *
     * @param {string} prefixOrId
     * @return {string} The parsed model name
     */
    static getModelByPrefixOrId(prefixOrId: string): AIModel {
        const modelAlias = prefixOrId.includes(":") ? prefixOrId.split(":")[1] : null;
        if (!modelAlias.length) {
            return null;
        }

        // Lookup using an id instead of an alias
        const lookUpId = modelAlias?.length ? Number(modelAlias) : null;
        if (!isNaN(lookUpId)) {
            return OllamaPlugin.Models.find(m => m.id === lookUpId);
        }

        return OllamaPlugin.Models.find(m => m.alias === modelAlias);
    }

    static getUserConfigMessage(state: UserState): string {
        let sb = "```md";
        sb += `\n- Id: ${state.model.id}`;
        sb += `\n- Alias: ${state.model.alias}`;
        sb += `\n- Name: ${state.model.name}`;
        sb += `\n- Description: ${state.model.description}`;
        sb += `\n- Messages: ${state.messages.length}`;
        sb += "\n```";

        return sb;
    }

    static getModelsListJson(): string {
        return JSON.stringify(OllamaPlugin.Models, null, 2);
    }
}
