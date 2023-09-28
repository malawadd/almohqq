"use client";
import clsx from "clsx";
import { ChatCompletionRequestMessage } from "openai";
import { useMemo } from "react";

export default function NotebookEntry({ message }: { message: ChatCompletionRequestMessage }) {
  //@ts-ignore
  const content = useMemo(() => message.content.replaceAll(/{.*?}/g, "").trim(), [message]);
  return (
    <li
      className={clsx(
        "whitespace-pre-wrap pb-7 last-of-type:pb-0",
        "bg-[repeating-linear-gradient(to_bottom,transparent_0rem,transparent_1.7rem,black_1.75rem)] bg-[0_-0.25rem]",
        message.role === "user" && 'before:content-[">"] before:font-bold before:mr-2'
      )}
    >
      {content}
    </li>
  );
}
