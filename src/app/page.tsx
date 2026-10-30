import { Header } from "@/components/header";
import { Hero } from "@/components/home/hero";
import { CourseCatalog } from "@/components/home/course-catalog";
import { Mentor } from "@/components/home/mentor";
import { LessonPreview } from "@/components/home/lesson-preview";
import { Enterprise } from "@/components/home/enterprise";
import { Faq } from "@/components/home/faq";
import { CallToAction } from "@/components/home/call-to-action";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/ui/reveal";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <CourseCatalog />
        <Mentor />
        <LessonPreview />
        <Enterprise />
        <Reveal>
          <Faq />
        </Reveal>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
