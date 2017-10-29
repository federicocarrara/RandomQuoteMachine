var quotes = [ "Stay Hungry. Stay Foolish. Steve Jobs",
    "Good Artists Copy, Great Artists Steal. Pablo Picasso",
    "Argue with idiots, and you become an idiot. Paul Graham",
    "Be yourself; everyone else is already taken. Oscar Wilde",
    "Simplicity is the ultimate sophistication. Leonardo Da Vinci"];
var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","BlanchedAlmond","Blue",
    "BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk",
    "Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta",
    "DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray",
    "DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue"]
$(function(){
// newQuote btn functionalit: shows a random quote and changes background color
  $("#btn").on("click", function(){
    var quote = quotes[Math.floor(Math.random()*quotes.length)];
    var color = colors[Math.floor(Math.random()*colors.length)];
    var quoteURL = quote.replace(";", ",");
    $("#quote").html("").append("<h2>" + quoteURL + "</h2>");
    $("#quote").fadeIn(3000);
    $("body").css("background-color", color);
    $("#tweet").removeClass("hidden");
//tweet btn
    $("a").attr("href", "https://twitter.com/intent/tweet?text=" + quoteURL)
  });
});
