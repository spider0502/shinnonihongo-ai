import { NextResponse } from "next/server";
import { aiClient } from "@/lib/ai-client";
import { DEFAULT_MODEL } from "@/lib/ai";
import { createAnalyzePrompt } from "@/prompts/analyze";
import type { AnalyzeRequest } from "@/types/analyze";

export async function POST(req: Request) {
    try {
        const body: AnalyzeRequest = await req.json();

        if (!body.text.trim()) {
            return NextResponse.json(
                {
                    error: "Text is required",
                },
                {
                    status: 400,
                }
            );
        }

        const completion = await aiClient.chat.completions.create({
            model: DEFAULT_MODEL,
            messages: [
                {
                    role: "user",
                    content: createAnalyzePrompt(body.text, body.mode),
                },
            ],
            temperature: 0.3,
        });

        return NextResponse.json({
            result: completion.choices[0].message.content ?? "",
        });
    } catch (error) {
        console.error("Analyze API Error:", error);

        return NextResponse.json(
            {
                error: "Failed to analyze text",
            },
            {
                status: 500,
            }
        );
    }
}