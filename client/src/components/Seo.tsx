import { useEffect } from "react";

const SITE_URL = "https://r3bikeshop.com";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
};

function setMeta(selector: string, attribute: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.setAttribute(attribute, value);
}

export default function Seo({ title, description, path = "/", noindex = false }: SeoProps) {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", noindex ? "noindex, nofollow" : "index, follow");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = canonicalUrl;
  }, [description, noindex, path, title]);

  return null;
}
