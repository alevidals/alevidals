import Image from "next/image";

const images = Array.from({ length: 13 }, (_, i) => ({
  id: i,
  src: `/about/img${i + 1}.webp`,
  alt: `Imagen ${i + 1}`,
}));

export function AboutMeSection() {
  return (
    <section id="about" className="mt-32">
      <div className="flex items-center gap-10">
        <h3 className="text-3xl font-semibold leading-tight">About me</h3>
        <div className="border flex-1" />
      </div>
      <p className="mt-10 text-muted-foreground max-w-prose">
        I'm Alejandro Vidal Sánchez, a passionate Frontend Developer with a
        knack for creating engaging and user-friendly web applications. With
        experience in React, Next.js, and various modern web technologies, I
        strive to build seamless digital experiences that captivate users and
        drive results. When I'm not coding, I enjoy exploring new tech trends,
        contributing to open-source projects, and sharing my knowledge through
        blogging.
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
