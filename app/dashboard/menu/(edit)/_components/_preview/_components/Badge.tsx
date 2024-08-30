import React from "react";

export default function Badge({ badge }: { badge: string }) {
  const style = {
    "🔥 Popular": "popular",
    "👨‍🍳 Chef's Selection": "chef-selection",
    "🏆 Best Seller": "best-seller",
    "👋 New": "new",
  };
  return (
    <div className={`label-container ${style[badge as keyof typeof style]}`}>
      <div className="label-text">{badge}</div>
    </div>
  );
}
