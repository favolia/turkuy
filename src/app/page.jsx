import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-y-5">
      <ModeToggle />
      <Link href="/team/create-team" className="font-silkscreen border-b-2">BUAT TIM</Link>
    </main>
  );
}
