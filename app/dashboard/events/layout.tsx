import TopBar from "./_components/EventTopBar";
import React from "react";

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <TopBar />
      {children}
    </div>
  );
}
