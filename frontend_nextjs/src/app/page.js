import HeaderText from "@/components/HeaderText"
import MainContentSection from "@/components/MainContentSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient flex">
      <section className="flex flex-col items-center max-w-[1200px] mx-auto flex-1">
        <Navbar />
        <HeaderText />
        <MainContentSection />
      </section>
    </section>
  );
}