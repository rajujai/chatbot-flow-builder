'use client';

import FlowBuilder from "@/components/FlowBuilder";
import ThemeToggleButton from "@/theme/ThemeToggleButton";

export default function Home() {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <FlowBuilder />
      <ThemeToggleButton />
    </main>
  );
}
