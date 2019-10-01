$(document).ready(function () {
    console.log("ready");

    var topics = ["rainbows", "popcorn", "icecream", "candy", "christmas", "happiness"];

    function displayBtn() {
        for (var i = 0; i < topics.length; i++) {

            var topicBtn = $("<button>");

            topicBtn.addClass("topic-button topic topic-button-color btn-warning text-light rounded");

            topicBtn.attr("data-topics", topics[i]);

            topicBtn.text(topics[i]);

            $("#buttons-go-here").append(topicBtn);
            console.log(topics[i]);

        };

    };
    displayBtn();

    var something = "";

    function callAjax() {

        console.log(`checking if ${something} is working`);
        var queryURL = `https://api.giphy.com/v1/gifs/search?q=${something}&api_key=t6ijkRM4RhHT0TGgBjTHFd9VKPaO4AZk&limit=18`;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var topicDiv = $("<div class= 'col-4'>");
                    
                    var p = $("<p class= 'text-light'>").text(`Rating: ${results[i].rating.toUpperCase()}`);

                    var topicImage = $("<img class='gif'>");
                    topicImage.attr("src", results[i].images.fixed_height_still.url);
                    topicImage.attr("data-animate", results[i].images.fixed_height.url);
                    topicImage.attr("data-still", results[i].images.fixed_height_still.url);
                    topicImage.attr("data-state", "still");

                    topicDiv.append(p);
                    topicDiv.append(topicImage);

                    $("#gifs-appear-here").prepend(topicDiv);
                };
            });
    };

    $("#buttons-go-here").on("click", ".topic-button", function () {
        $("#gifs-appear-here").empty();
        something = $(this).attr("data-topics");
        console.log(something);
        callAjax();
    });

    $("#gifs-appear-here").on("click", ".gif", function () {

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

    $(document).on("click", "#search-button", function (event) {

        event.preventDefault();
        something = $("#search-form").val();
        console.log(something);

        if (something === "") {

        } else {

            topicBtn = $("<button>");

            topicBtn.addClass("topic-button topic topic-button-color btn-warning text-light rounded");

            topicBtn.attr("data-topics", something);

            topicBtn.text(something);

            $("#buttons-go-here").append(topicBtn);

            $("#search-form").val("");
        };

    });

});