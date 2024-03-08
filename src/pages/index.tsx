import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm">
        hello...
        <DynamicWidget />
      </div>
    </main>
  );
}
