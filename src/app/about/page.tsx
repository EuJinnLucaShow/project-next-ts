"use client";

import InputSearch from "../ui/InputSearch";
import BtnGoBack from "../ui/BtnGoBack";

export interface PageProps {}

export default function About({}: PageProps) {
  return (
    <div className="flex flex-col items-center gap-10">
      <h2 className="mt-11 text-2xl">About page</h2>
      <BtnGoBack />
      <InputSearch />
    </div>
  );
}
