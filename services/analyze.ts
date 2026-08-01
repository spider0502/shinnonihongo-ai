import type {
    AnalyzeRequest,
    AnalyzeResponse,
} from "@/types/analyze";

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