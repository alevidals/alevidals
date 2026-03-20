import type { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Awaited<ReturnType<typeof getDictionary>>["me"];
};

const CV_URL = encodeURI("/CV - Alejandro Vidal Sanchez.pdf");

export async function MeSection({ dict }: Props) {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-500">
      <article className="prose py-4 dark:prose-invert prose-a:font-normal prose-a:text-accent-blue prose-a:decoration-accent-blue/40 prose-a:decoration-dotted prose-a:underline-offset-[5px] hover:prose-a:decoration-accent-blue">
        <p className="leading-loose text-base">
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: content from own dictionaries */}
          <span dangerouslySetInnerHTML={{ __html: dict.description }} />{" "}
          <a
            href={CV_URL}
            download
            className="font-normal text-accent-blue decoration-accent-blue/40 decoration-dotted underline underline-offset-[5px] transition-colors duration-150 hover:decoration-accent-blue"
          >
            {dict.cvText}
          </a>
          .
        </p>
      </article>
    </section>
  );
}
