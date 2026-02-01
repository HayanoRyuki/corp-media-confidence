import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <HeroSection />

      {/* ソリューション一覧 */}
      <SolutionsSection />

      {/* CTA セクション */}
      <CTASection />
    </>
  );
}
