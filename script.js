candle.addEventListener("click", () => {
  if (flame.style.display === "none") return; // cegah klik berulang
  flame.style.display = "none";
  launchConfetti();
  letterDiv.style.display = "block";
  typedTextSpan.style.animation =
    "typing 4s steps(40, end), blink-caret 0.75s step-end infinite";
  typedTextSpan.style.borderRight = "0.15em solid var(--primary-pink)";
  typedTextSpan.style.width = "100%";
  typedTextSpan.style.overflow = "hidden";

  // Setelah animasi ketik selesai, tampilkan seluruh teks
  typedTextSpan.addEventListener("animationend", () => {
    typedTextSpan.style.animation = "none";
    typedTextSpan.style.borderRight = "none";
    typedTextSpan.style.width = "auto";
    typedTextSpan.style.overflow = "visible";
  });
});
candle.addEventListener("click", () => {
  if (flame.style.display === "none") return; // cegah klik berulang
  flame.style.display = "none";
  launchConfetti();
  letterDiv.style.display = "block";
  typedTextSpan.style.animation =
    "typing 8s steps(150, end), blink-caret 0.75s step-end infinite";
  typedTextSpan.style.borderRight = "0.15em solid var(--primary-pink)";
  typedTextSpan.style.width = "100%";
  typedTextSpan.style.overflow = "hidden";

  // Setelah animasi ketik selesai, tampilkan seluruh teks dan hilangkan kursor
  typedTextSpan.addEventListener(
    "animationend",
    (e) => {
      if (e.animationName === "typing") {
        typedTextSpan.style.animation = "none";
        typedTextSpan.style.borderRight = "none";
        typedTextSpan.style.width = "auto";
        typedTextSpan.style.overflow = "visible";
      }
    },
    { once: true }
  );
});