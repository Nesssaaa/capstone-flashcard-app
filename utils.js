export function calculateFontSize(text) {
  const charactersCount = text.trim().replace(/\s+/g, "").length;
  const maxFontSize = 38;
  const minFontSize = 15;
  return Math.max(minFontSize, maxFontSize - charactersCount / 5);
}
