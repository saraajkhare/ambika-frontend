import { useEffect } from "react";

const SITE_URL = "https://www.amarinfratech.com";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const setMeta = (selector, attribute, value) => {
  if (!value) return;

  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
};

const setCanonical = (url) => {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
};

const SEO = ({
  title,
  description,
  path = "/",
  keywords,
  image = DEFAULT_IMAGE,
  schema,
}) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setCanonical(url);
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="keywords"]', "content", keywords);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);

    const schemaId = "page-json-ld";
    let schemaElement = document.getElementById(schemaId);
    if (schema) {
      if (!schemaElement) {
        schemaElement = document.createElement("script");
        schemaElement.id = schemaId;
        schemaElement.type = "application/ld+json";
        document.head.appendChild(schemaElement);
      }
      schemaElement.textContent = JSON.stringify(schema);
    } else if (schemaElement) {
      schemaElement.remove();
    }
  }, [description, image, keywords, path, schema, title]);

  return null;
};

export { SITE_URL };
export default SEO;
