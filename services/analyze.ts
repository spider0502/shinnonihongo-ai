export type AnalyzeMode =
    | "auto"
    | "word"
    | "grammar"
    | "sentence";

export interface AnalyzeRequest {
    text: string;
    mode: AnalyzeMode;
}

export interface AnalyzeResponse {
    result: string;
}

export async function analyze(
    request: AnalyzeRequest
): Promise<AnalyzeResponse> {
    const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        throw new Error("Analyze failed");
    }

    return response.json();
}