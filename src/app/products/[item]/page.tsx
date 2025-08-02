"use client";

import { useParams } from "next/navigation";

// Item page
export default function Item() {
  const params = useParams();

  return (
    <div className="text-8xl text-black font-medium">{params.item}</div>
  );
}
