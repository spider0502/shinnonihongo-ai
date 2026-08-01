export const AI_BASE_URL =
    "https://openrouter.ai/api/v1";

export const DEFAULT_MODEL =
    "openai/gpt-5.6-terra";

export const AI_MODELS = [
    {
        id: "openai/gpt-5.6-terra",
        name: "GPT-5.6 Terra",
    },
    {
        id: "openai/gpt-5.6-luna",
        name: "GPT-5.6 Luna",
    },
    {
        id: "openai/gpt-5.6-sol",
        name: "GPT-5.6 Sol",
    },
    {
        id: "anthropic/claude-sonnet-4",
        name: "Claude Sonnet 4",
    },
    {
        id: "google/gemini-2.5-pro",
        name: "Gemini 2.5 Pro",
    },
    {
        id: "deepseek/deepseek-chat",
        name: "DeepSeek Chat",
    },
] as const;

export type AIModel =
    (typeof AI_MODELS)[number]["id"];