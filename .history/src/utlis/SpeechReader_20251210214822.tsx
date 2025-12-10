import { useEffect, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import type { SpeechReaderProps } from "../Interface/Interface";
import type { Paragraph } from "../type/post";


const SpeechReader = ({ post }: SpeechReaderProps) => {
  const synth = window.speechSynthesis;
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      const enVoices = availableVoices.filter((v) => v.lang.startsWith("en"));
      if (enVoices.length) {
        setVoices(enVoices);
      }
    };

    loadVoices();
    synth.onvoiceschanged = loadVoices;

    return () => {
      synth.cancel();
    };
  }, [synth]);

  const extractText = () => {
    const { title, description, details } = post;

    const descText = description?.join(" ") ?? "";

    const detailText =
      details
        ?.flatMap((detail) =>
          detail.paragraphs?.map((p: Paragraph) =>
            typeof p.text === "string" ? p.text : p.text.join(" ")
          ) ?? []
        )
        .join(" ") ?? "";

    return [title, descText, detailText].join(" ");
  };

  const speak = () => {
    const content = extractText();
    if (!content || synth.speaking) return;

    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = "en-US";

    const selectedVoice =
      voices.find((v) => v.lang === "en-US") || voices.find((v) => v.default) || voices[0];

    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);

    setTimeout(() => {
      synth.speak(utterance);
    }, 100);
  };

  const stop = () => {
    synth.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="flex gap-3 items-center mt-4 justify-end">
      <button
        onClick={speak}
        disabled={isSpeaking}
        className="p-2 bg-fuchsia-700 text-white rounded-full hover:scale-110 transition disabled:opacity-50 cursor-pointer"
        aria-label="Play"
      >
        <FaPlay />
      </button>
      <button
        onClick={stop}
        className="p-2 bg-pink01 text-white rounded-full hover:scale-110 transition cursor-pointer"
        aria-label="Stop"
      >
        <FaStop />
      </button>
    </div>
  );
};

export default SpeechReader;

