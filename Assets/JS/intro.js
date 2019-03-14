new TypeIt("#simpleUsage", {
  strings: ["Hello", "Welcome to my page", "I am a Coder"],
  speed: 200,
  breakLines: false,
  waitUntilVisible: true
})

  .delete(5)
  .pause(500)
  .type("Developer")
  .delete(9)
  .pause(500)
  .type("Front-End developer")
  .delete(21)
  .pause(500)
  .type("Eric")

  .go();
