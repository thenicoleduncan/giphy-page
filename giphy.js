$(document).ready(function () {

    // my array of strings, called topics
    var topics = ["rainbows", "popcorn", "icecream", "candy", "christmas", "happiness"];

    // Add a form to your page that takes a value from a user input box and adds it to your`topics` array.
    // Then make a function call that takes each topic in the array and remakes the buttons on the page.
    $("#search-button").on("click", function (event) {
        event.preventDefault();
        var textInput = $("#search-form").val();
        console.log(textInput);

        var topicBtn = $("<button>");

        topicBtn.addClass("topic-button topic topic-button-color");

        topicBtn.attr("data-topics", textInput);


        topicBtn.text(textInput);

        $("#buttons-go-here").append(topicBtn);


    });



    // Your app should take the topics in this array and create buttons in your HTML.
    //    * Try using a loop that appends a button for each string in the array.
    for (var i = 0; i < topics.length; i++) {

        var topicBtn = $("<button>");

        topicBtn.addClass("topic-button topic topic-button-color");

        topicBtn.attr("data-topics", topics[i]);


        topicBtn.text(topics[i]);

        $("#buttons-go-here").append(topicBtn);
        console.log(topics[i]);

    };

    $(".topic-button").on("click", function () {
        $("#gifs-appear-here").empty()
        // When the user clicks on a button, the page should grab 10 static, non - animated gif images from the 
        // GIPHY API and place them on the page.

        // testing the function with an alert
        // alert(`You just clicked me!`);

        var something = $(this).attr("data-topics");

        console.log(`checking if ${something} is working`);
        var queryURL = `https://api.giphy.com/v1/gifs/search?q=${something}&api_key=t6ijkRM4RhHT0TGgBjTHFd9VKPaO4AZk&limit=10`;


        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {

                // testing the response in console
                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var topicDiv = $("<div>");

                    // Under every gif, display its rating(PG, G, so on).
                    var p = $("<p>").text(`Rating: ${results[i].rating.toUpperCase()}`);

                    var topicImage = $("<img>");
                    topicImage.attr("src", results[i].images.fixed_height_still.url);
                    topicImage.attr("data-animate", results[i].images.fixed_height.url);
                    topicImage.attr("data-still", results[i].images.fixed_height_still.url);
                    topicImage.attr("data-state", "still");



                    topicDiv.append(p);
                    topicDiv.append(topicImage);

                    $("#gifs-appear-here").prepend(topicDiv);

                    // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, 
                    // it should stop playing.
                    $(topicImage).on("click", function () {

                        var state = $(this).attr("data-state");

                        if (state === "still") {

                            var dataAnimate = $(this).attr("data-animate")
                            $(this).attr("src", dataAnimate);
                            $(this).attr("data-state", "animate");

                        } else {

                            let dataStill = $(this).attr("data-still")
                            $(this).attr("src", dataStill);
                            $(this).attr("data-state", "still");
                        }


                    });


                }


            });

    });






});



