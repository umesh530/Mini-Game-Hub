gsap.from(".title", {
  duration: 2,
  y: -50,
  opacity: 0,
  ease: "bounce.out"
});

gsap.from(".game-card", {
  duration: 1,
  opacity: 0,
  scale: 0.8,
  stagger: 0.2,
  delay: 0.5,
  ease: "back.out(1.7)"
});
gsap.from(".coming-soon",
  {
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 1.5
  });
