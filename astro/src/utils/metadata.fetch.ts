import sanityFetch from "@/utils/sanity.fetch";
import type { OpenGraphImageProps } from "@/src/layouts/Head.astro";

type QueryProps = {
  title: string;
  description: string;
  openGraphImage?: OpenGraphImageProps;
};

export default async function metadataFetch(type: string, slug?: string): Promise<QueryProps> {
  const filter = slug ? `*[_type == '${type}' && slug.current == $slug][0]` : `*[_type == "${type}"][0]`;

  const seo = await sanityFetch<QueryProps>({
    query: /* groq */ `
      ${filter}.seo {
        title,
        description,
        "openGraphImage": {
          "url": img.asset -> url + "?w=1200",
          "height": round(1200 / img.asset -> metadata.dimensions.aspectRatio),
        },
      }
    `,
    ...(slug && { params: { slug: slug } }),
  });

  return seo;
}
