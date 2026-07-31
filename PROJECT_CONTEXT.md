# AI Japanese Tutor Project Context

## 技术栈

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

## 当前进度

已完成：

* Next.js项目创建
* page.tsx基础页面
* API Route
* fetch调用后端
* mode切换

模式：

* auto
* word
* grammar
* sentence

## 当前数据结构

```ts
type AnalyzeMode =
  | "auto"
  | "word"
  | "grammar"
  | "sentence";

type Language =
  | "zh"
  | "en"
  | "vi";

type AnalyzeRequest = {
  text: string;
  mode: AnalyzeMode;
  language: Language;
};
```

## 国际化计划

当前：

* zh.ts
* en.ts
* vi.ts

未来支持：

* 中文
* 英文
* 越南语

目前默认：

```ts
const [language, setLanguage] =
  useState<Language>("zh");
```

## API

route:

```text
app/api/analyze/route.ts
```

request:

```json
{
  "text": "...",
  "mode": "word",
  "language": "zh"
}
```

## 产品规划

Version 0.1

* 输入
* 分析
* 返回结果

Version 0.2

* mode切换

Version 0.3（当前开发）

* 历史记录

Version 0.4

* localStorage持久化

Version 0.5

* 收藏功能

Version 0.6

* OpenAI/Gemini接入

## 重要设计原则

* 默认自动模式
* 用户可手动切换
* 中文优先
* 后续支持英文和越南语
* Web优先
* 暂不开发Android/iOS
* 后续可能使用React Native

```
```
