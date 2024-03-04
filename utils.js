export function calculateFontSize(text) {
  const charactersCount = text.trim().replace(/\s+/g, "").length;
  const maxFontSize = 50;
  const minFontSize = 8;
  return Math.max(minFontSize, maxFontSize - charactersCount / 5);
}
