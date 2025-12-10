import { useMemo } from "react";
import type { ReadingTimeProps } from "../../Interface/Interface";


const ReadingTime = ({ details}:ReadingTimeProps) => {
  const readingTime = useMemo(() => {
    if (!Array.isArray(details)) return 0;

    const text = details
      .flatMap((d) => d.paragraphs ?? [])
      .map((p) => {
        if (typeof p.text === "string") return p.text;
        if (Array.isArray(p.text)) return p.text.join(" ");
        return "";
      })
      .join(" ");

    const wordsPerMinute = 100;
    const wordCount = text.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }, [details]);    
  return (
    <p className="text-sm text-black dark:text-white text-end">
      🕒 Estimated reading time: {readingTime} minute{readingTime > 1 ? "s" : ""}
    </p>
  )
}

export default ReadingTime
