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