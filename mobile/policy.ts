export function isAllowed(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "mailto:" || parsed.protocol === "tel:") return true;
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function isStartUrl(url: string) {
  return url.startsWith("https://") && !url.includes("REPLACE-WITH-PUBLISHED-SITE");
}
