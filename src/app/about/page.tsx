"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div>
      <h2>About page</h2>
      <button type="button" onClick={() => router.push("/")}>
        Back
      </button>
    </div>
  );
}
