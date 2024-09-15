import SocLinks from "./ui/SocLinks";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="mt-11 text-2xl">Home Page</h1>
      <SocLinks />
    </div>
  );
}
