"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImage[];
};

export function GalleryCarousel({ images }: Props) {
  return (
    <Carousel opts={{ align: "center", loop: true }} className="w-full">
      <CarouselContent className="-ml-2 items-center">
        {images.map((img) => (
          <CarouselItem key={img.id} className="pl-2 basis-4/5">
            <div className="flex items-center justify-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-3" />
      <CarouselNext className="-right-3" />
    </Carousel>
  );
}
