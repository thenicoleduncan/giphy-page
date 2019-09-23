

// my array of strings, called topics
let topics = ["rainbows", "popcorn", "icecream", "candy", "christmas", "happiness"];


// Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.

// When the user clicks on a button, the page should grab 10 static, non - animated gif images from the 
// GIPHY API and place them on the page.

// When the user clicks one of the still GIPHY images, the gif should animate.If the user clicks the gif again, 
// it should stop playing.

// Under every gif, display its rating(PG, G, so on).
//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// Add a form to your page that takes a value from a user input box and adds it to your`topics` array.
// Then make a function call that takes each topic in the array and remakes the buttons on the page.

$("button").on("click", function () {
    var animal = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=t6ijkRM4RhHT0TGgBjTHFd9VKPaO4AZk&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        console.log(response);

        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data


        // =============== put step 2 in between these dashes ==================
        var results = response.data;

        // ========================

        for (var i = 0; i < results.length; i++) {

            // Step 3: uncomment the for loop above and the closing curly bracket below.
            // Make a div with jQuery and store it in a variable named animalDiv.
            var topicDiv = $("<div>");

            // Make a paragraph tag with jQuery and store it in a variable named p.
            // Set the inner text of the paragraph to the rating of the image in results[i].
            var p = $("<p>").text(results[i].rating);


            // Make an image tag with jQuery and store it in a variable named animalImage.
            // Set the image's src to results[i]'s fixed_height.url.
            var topicImage = $("<img>");
            topicImage.attr("src", results[i].images.fixed_height.url);


            // Append the p variable to the animalDiv variable.
            // Append the animalImage variable to the animalDiv variable.
            topicDiv.append(p);
            topicDiv.append(topicImage);

            // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
            $("#gifs-appear-here").prepend(topicDiv);

        }

    });
});
