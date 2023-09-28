import dynamic from "next/dynamic";

const Content = dynamic(() => import("./content"), { ssr: false });

export default function Home() {
  return (
    <main className="flex items-stretch justify-stretch min-h-screen h-full bg-amber-950 overflow-hidden">
      <Content />
    </main>
  );
}
