export function calculateFontSize(text) {
  const wordCount = text.trim().split(/\s+/).length;
  const maxFontSize = 40;
  const minFontSize = 8;
  return Math.max(minFontSize, maxFontSize - wordCount / 4);
}
