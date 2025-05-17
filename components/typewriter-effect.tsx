"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
  cursorClassName?: string;
}

export function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
  className = "",
  cursorClassName = "",
}: TypewriterEffectProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingTimeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        typingTimeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        typingTimeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (text.length > 0) {
        typingTimeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span
      className={cn("inline-flex items-center whitespace-nowrap", className)}
    >
      <span>{text}</span>
      <span
        className={cn(
          "ml-1 inline-block w-0.5 h-6 bg-primary animate-cursor-blink",
          cursorClassName
        )}
      />
    </span>
  );
}
