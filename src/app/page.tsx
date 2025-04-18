import Image from "next/image";
import ComponentPreview from "./components/componentPreview";

export default function Home() {
  // div: 20px header, flex mid section, 20px footer, center vertically, center horisontally
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-4 py-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <a className="text-3xl font-bold">Tait&apos;s Headless UI components</a>
      </header>
      <main className="flex flex-col sm:flex-row flex-wrap gap-8 row-start-2 items-center justify-center sm:items-start">
        <ComponentPreview title="Contact Form" image="/component-previews/contact-form.png" href="/contact" />
        <ComponentPreview title="Shuffling letters" image="/component-previews/shuffling-letters.png" href="/shuffling-letters" />
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://taitvanstrien.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to taitvanstrien.nl →
        </a>
      </footer>
    </div>
  );
}
