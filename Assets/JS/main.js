$(window).on("load", function() {
  $(window)
    .scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});

let city = "New York";

let APIkeyWeather = "70c19500496f9aecbd97ff861d3072ee";
let queryURLWeather =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&units=imperial&appid=" +
  APIkeyWeather;

// Weather display API
$.ajax({
  url: queryURLWeather,
  method: "GET"
}).then(function(response) {
  let temperatureAndCity = $("<p style='text-align:center;'>").text(
    response.name.toUpperCase() + ": " + response.main.temp + "° F "
  );
  temperatureAndCity.attr("class", "displayTemp");
  let arr = [];
  for (let i = 0; i < response.weather.length; i++) {
    arr.push(response.weather[i].icon);
  }
  for (let i = 0; i < 1; i++) {
    let imgWeather = $("<img>").attr(
      "src",
      "http://openweathermap.org/img/w/" + arr[i] + ".png"
    );
    imgWeather.css("filter", "grayscale(100%)");
    $("#weather").append(imgWeather);
  }
  $("#weather").append(temperatureAndCity);
});

//nasa API

var url =
  "https://api.nasa.gov/planetary/apod?api_key=JLYllqlcc7KdrBRVuasCBeRkrPZXqJ5vsfbhXTsm";

$.ajax({
  url: url,

  success: function(result) {
    if (result.media_type == "video") {
      $("#apod_img_id").css("display", "none");
      $("#apod_vid_id").attr("src", result.url);
    } else {
      $("#apod_vid_id").css("display", "none");
      $("#apod_img_id").attr("src", result.url);
    }
    $("#reqObject").text(url);
    $("#returnObject").text(JSON.stringify(result, null, 4));

    $("#apod_title").text(result.title);
  }
});

// var url =
//   "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

// $.ajax({
//   url: url,
//   success: function(result) {
//     if ("copyright" in result) {
//       $("#copyright").text("Image Credits: " + result.copyright);
//     } else {
//       $("#copyright").text("Image Credits: " + "Public Domain");
//     }

//     if (result.media_type == "video") {
//       $("#apod_img_id").css("display", "none");
//       $("#apod_vid_id").attr("src", result.url);
//     } else {
//       $("#apod_vid_id").css("display", "none");
//       $("#apod_img_id").attr("src", result.url);
//     }
//     $("#reqObject").text(url);
//     $("#returnObject").text(JSON.stringify(result, null, 4));
//     $("#apod_explaination").text(result.explanation);
//     $("#apod_title").text(result.title);
//   }
// });

//Audio play
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
