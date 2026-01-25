"use client";

import { IconArrowNarrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const SCROLL_THRESHOLD = 300;

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <Button
      className="fixed bottom-8 right-8 z-50 w-14 h-14 duration-500 fade-in-0 animate-in"
      onClick={scrollToTop}
      variant="outline"
      aria-label="Volver arriba"
      title="Volver arriba"
    >
      <IconArrowNarrowUp className="size-8" />
    </Button>
  );
}
