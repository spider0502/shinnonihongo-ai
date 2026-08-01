"use client";

import { useEffect, useState } from "react";
import { analyze } from "@/services/analyze";

import { zh } from "@/locales/zh";
import { en } from "@/locales/en";
import { vi } from "@/locales/vi";


type Language =
  | "zh"
  | "en"
  | "vi";

import type {
  AnalyzeMode,
  AnalyzeRequest,
} from "@/types/analyze";

import type {
  HistoryItem,
} from "@/types/history";

export default function AnalyzePage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] =
    useState<Language>("zh");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const [mode, setMode] = useState<AnalyzeMode>("auto");

  const t =
    language === "zh"
      ? zh
      : language === "en"
        ? en
        : vi;

  useEffect(() => {
    const saved =
      localStorage.getItem("history");

    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const handleAnalyze = async () => {
    if (!input.trim()) {
      setResult("请输入内容");
      return;
    }

    setLoading(true);

    try {

      const data = await analyze({
        text: input,
        mode,
      });

      setResult(data.result);

      const newItem: HistoryItem = {
        id: crypto.randomUUID(),
        text: input,
        mode,
        result: data.result,
        createdAt: Date.now(),
      };

      // const newHistory = [newItem, ...history];

      // setHistory(newHistory);

      // localStorage.setItem(
      //   "history",
      //   JSON.stringify(newHistory)
      // );

      setHistory((prev) => {
        const newHistory = [newItem, ...prev];

        localStorage.setItem(
          "history",
          JSON.stringify(newHistory)
        );

        return newHistory;
      });

    } catch {
      setResult("发生错误");
    }

    setLoading(false);
  };

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        {t.title}
      </h1>

      <div className="mb-4 flex gap-2">
        <button
          className={`px-4 py-2 rounded ${mode === "auto"
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
            }`}
          onClick={() => setMode("auto")}
        >
          {t.modes.auto}
        </button>

        <button
          className={`px-4 py-2 rounded ${mode === "word"
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
            }`}
          onClick={() => setMode("word")}
        >
          {t.modes.word}
        </button>

        <button
          className={`px-4 py-2 rounded ${mode === "grammar"
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
            }`}
          onClick={() => setMode("grammar")}
        >
          {t.modes.grammar}
        </button>

        <button
          className={`px-4 py-2 rounded ${mode === "sentence"
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
            }`}
          onClick={() => setMode("sentence")}
        >
          {t.modes.sentence}
        </button>
      </div>

      <textarea
        className="w-full border rounded p-3 h-40"
        placeholder={t.placeholders.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="mt-4 flex gap-2">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded"
          onClick={handleAnalyze}
        >
          {loading ? "分析中..." : "分析"}
        </button>

        <button
          className="px-6 py-2 bg-gray-500 text-white rounded"
          onClick={() => {
            setInput("");
            setResult("");
          }}
        >
          清空
        </button>
      </div>

      {result && (
        <div className="mt-6 border rounded p-4 whitespace-pre-wrap">
          {result}
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            历史记录
          </h2>

          <div className="space-y-3">
            {history.map((item) => (
              <div
                key={item.id}
                className="border rounded p-3"
              >
                <div className="text-sm text-gray-500">
                  {item.mode}
                </div>

                <div className="font-medium">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}