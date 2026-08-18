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
        const data = await response.json().catch(() => null);

        throw new Error(
            data?.error || "Analyze failed"
        );
    }

    return response.json();
}