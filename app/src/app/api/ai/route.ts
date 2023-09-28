import { submitMessage } from "@/lib/ai";
import { NextRequest, NextResponse } from "next/server";
//
export async function POST(request: NextRequest) {
  const { message, context } = await request.json();

  const response = await submitMessage(message, context);

  if (response.status === 429)
    return NextResponse.json(
      {
        message: { role: "system", content: "We're thinking too hard on this... Let's rest for a few seconds..." },
      },
      { status: 429 }
    );

  if (response.status !== 200)
    return NextResponse.json(
      { message: { role: "system", content: "Something went wrong. Try again." } },
      { status: 500 }
    );

  const reply = response.data?.choices[0].message;

  return NextResponse.json({ message: reply });
}
