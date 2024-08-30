"use client";

import TopBar from "./_components/TopBar";

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full mt-[70px]">
      <TopBar />
      {children}
    </div>
  );
}
