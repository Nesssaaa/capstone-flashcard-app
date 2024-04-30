export function calculateFontSize(text) {
  const charactersCount = text.trim().replace(/\s+/g, "").length;
  const maxFontSize = 40;
  const minFontSize = 20;
  return Math.max(minFontSize, maxFontSize - charactersCount / 5);
}

export function getRandomCards(arr, n) {
  let len = arr.length;
  n = Math.min(n, len);
  const result = new Array(n);
  const taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
