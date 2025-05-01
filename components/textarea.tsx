"use client";
import { Trash2 } from "lucide-react";
import { useRef, useEffect } from "react";

export const TextArea = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // set to scroll height
    }
  };

  useEffect(() => {
    handleInput(); // set initial height
  }, []);

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        autoFocus
        className="w-[85vw] sm:w-[45rem] resize-none overflow-hidden rounded-none border-0 bg-transparent text-left sm:text-xl text-foreground/50 outline-none ring-0 ring-offset-0 placeholder:text-muted-foreground/30 focus:border-0 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 leading-6 "
        autoComplete="off"
        spellCheck="false"
        style={{
          whiteSpace: "pre-wrap",
          overflowWrap: "break-word",
          verticalAlign: "middle",
        }}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            e.preventDefault();
          }
        }}
        onInput={handleInput}
        placeholder={`Write. Don't look back. Type what's on your mind. You don't need a therapist. You need a moment of honesty.`}
      />
      <Trash2
        onClick={() => {
          const textarea = textareaRef.current;
          if (textarea) {
            textarea.value = "";
            handleInput();
          }
        }}
        className="absolute h-4 w-4 top-1 -left-6 text-foreground/20 cursor-pointer"
      />
    </div>
  );
};
