import Image from "next/image";
import type { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["aboutMe"];
};

const images = Array.from({ length: 13 }, (_, i) => ({
  id: i,
  src: `/about/img${i + 1}.webp`,
  alt: `Imagen ${i + 1}`,
}));

export function AboutMeSection({ dict }: Props) {
  return (
    <section id="about" className="mt-14 md:mt-32">
      <div className="flex items-center gap-10">
        <h3 className="text-3xl font-semibold leading-tight">{dict.title}</h3>
      </div>
      <p className="mt-10 text-muted-foreground max-w-[80ch] text-lg">
        {dict.text}
      </p>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-10">
        {images.map((img) => (
          <div key={img.id} className="mb-4 break-inside-avoid">
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
