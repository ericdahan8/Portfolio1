new TypeIt("#simpleUsage", {
  strings: ["Hello", "Welcome", "This is my portfolio", "I am a Coder"],
  speed: 250,
  breakLines: false,
  waitUntilVisible: true
})

  .pause(600)
  .delete(5)
  .type("Developer")
  .delete(9)
  .pause(600)
  .type("Software Engi")
  .delete(15)
  .pause(2500)
  .type("Eric")
  .break()
  .pause(2500)
  .type("Enter Now")

  .go();

// $("#enter").on("click", function() {
//   $(".interstellar").hide();
// });
