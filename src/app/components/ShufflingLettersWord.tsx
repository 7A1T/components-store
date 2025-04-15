"use client";
import React, { useState, useEffect } from "react";

interface LetterProps {
  targetLetter: string;
  delay: number;
  alphabet: string;
}

function ShufflingLetter({ targetLetter, delay, alphabet }: LetterProps) {
  const [currentLetter, setCurrentLetter] = useState<string>(
    alphabet.charAt(0)
  );
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [hasCompletedOneCycle, setHasCompletedOneCycle] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    const shuffleInterval = setInterval(() => {
      setCurrentLetter((prev: string) => {
        const currentIndex = alphabet.indexOf(prev);
        // Use charAt instead of array indexing for clearer character access
        const nextLetter = alphabet.charAt(
          (currentIndex + 1) % alphabet.length
        );

        if ((currentIndex + 1) % alphabet.length === 0) {
          setHasCompletedOneCycle(true);
        }

        if (hasCompletedOneCycle && nextLetter === targetLetter) {
          setIsAnimating(false);
        }

        return nextLetter;
      });
    }, 50);

    return () => clearInterval(shuffleInterval);
  }, [isAnimating, alphabet, targetLetter, hasCompletedOneCycle]);

  // Delay the start of animation
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [delay]);

  return (
    <span
      className={`animated-letter block ${isAnimating ? "shuffling" : "final"}`}
      style={{ animationDelay: `${delay}s` }}
      data-final={targetLetter}
    >
      {currentLetter}
    </span>
  );
}

interface ShufflingLettersWordProps {
  finalText: string;
  alphabet: string;
}

function ShufflingLettersWord({
  finalText,
  alphabet,
}: ShufflingLettersWordProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3d-container h-[3em] overflow-hidden">
        <h1 className="text-5xl font-bold font-mono">
          {finalText.split("").map((letter, index) => (
            <ShufflingLetter
              key={index}
              targetLetter={letter}
              delay={index * 0.1}
              alphabet={alphabet}
            />
          ))}
        </h1>
      </div>
    </div>
  );
}

export default ShufflingLettersWord;
