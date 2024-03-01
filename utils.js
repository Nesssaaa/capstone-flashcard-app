// import React, { useState } from "react";

// export default function CalculateFontSize() {
//   const [text, setText] = useState("");
//   const handleChange = (event) => {
//     setText(event.target.value);
//   };
//   const wordCount = text.trim().split(/\s+/).length;
//   const maxFontSize = 18; // Maximal zulässige Schriftgröße
//   const minFontSize = 8; // Minimale zulässige Schriftgröße
//   const newSize = Math.max(minFontSize, maxFontSize - wordCount / 10); // Schriftgröße anpassen, zum Beispiel: Reduziere die Schriftgröße um 1 Pixel pro 10 Wörter
//   return newSize;
// }
