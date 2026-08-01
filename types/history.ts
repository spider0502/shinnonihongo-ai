import { AnalyzeMode } from "./analyze";

export interface HistoryItem {
    id: string;
    text: string;
    mode: AnalyzeMode;
    result: string;
    createdAt: number;
}