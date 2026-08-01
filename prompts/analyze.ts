import { AnalyzeMode } from "@/types/analyze";

export function createAnalyzePrompt(
    text: string,
    mode: AnalyzeMode
) {
    return `
你是一名专业的日语教师。

请根据用户选择的分析模式回答。

模式：
${mode}

用户输入：
${text}

请使用 Markdown 输出。

回答包括：

## 解释

## 语法

## 单词

## 更自然的表达（如果有）

请使用简体中文。
`;
}