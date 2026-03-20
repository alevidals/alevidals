import Image from "next/image";
import type { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["aboutMe"];
};

const PHOTOS = [
  { src: "/about/img1.webp", alt: "Photo 1" },
  { src: "/about/img2.webp", alt: "Photo 2" },
  { src: "/about/img3.webp", alt: "Photo 3" },
  { src: "/about/img4.webp", alt: "Photo 4" },
  { src: "/about/img5.webp", alt: "Photo 5" },
  { src: "/about/img6.webp", alt: "Photo 6" },
];

export function AboutMeSection({ dict }: Props) {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards delay-300 duration-500">
      <h2 className="mb-6 text-lg font-semibold">{dict.title}</h2>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {dict.description}
      </p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {PHOTOS.map((photo) => (
          <div key={photo.src} className="relative overflow-hidden rounded-xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={750}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
