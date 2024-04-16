// import { useState, useEffect } from "react";

// export default function useDarkMode() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const storedMode = localStorage.getItem("darkMode");
//     setIsDarkMode(storedMode === "true");
//   }, []);

//   function setDarkMode() {
//     setIsDarkMode(true);
//     localStorage.setItem("darkMode", "true");
//   }

//   function setLightMode() {
//     setIsDarkMode(false);
//     localStorage.setItem("darkMode", "false");
//   }

//   return [isDarkMode, setDarkMode, setLightMode];
// }
