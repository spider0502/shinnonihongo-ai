import { NextResponse } from "next/server";

type AnalyzeRequest = {
    text: string;
    mode: string;
};

export async function POST(req: Request) {
    const body: AnalyzeRequest = await req.json();

    console.log("收到请求:");
    console.log("[Analyze]", body);

    return NextResponse.json({
        result: `
【语法分析】

模式：
${body.mode}

内容：
${body.text}

这里以后会接 AI
    `,
    });
}