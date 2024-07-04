import { createClient, type QueryParams } from "@sanity/client";
import { isPreviewDeployment } from "@/utils/is-preview-deployment";

const token = import.meta.env.SANITY_API_TOKEN;
const projectId = "k66izvou";
const dataset = "production";
const apiVersion = "2024-07-02";

if (isPreviewDeployment && !token) {
  throw new Error("The `SANITY_API_TOKEN` environment variable is required.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: isPreviewDeployment ? "previewDrafts" : "published",
  ...(isPreviewDeployment && { token }),
});

export default async function sanityFetch<QueryResponse>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}): Promise<QueryResponse> {
  return await client.fetch<QueryResponse>(query, params);
}
