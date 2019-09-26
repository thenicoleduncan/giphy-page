$(document).ready(function () {

    // my array of strings, called topics
    let topics = ["rainbows", "popcorn", "icecream", "candy", "christmas", "happiness"];

    // Your app should take the topics in this array and create buttons in your HTML.
    //    * Try using a loop that appends a button for each string in the array.
    for (let i = 0; i < topics.length; i++) {
        // Inside the loop...

        // 2. Create a variable named "letterBtn" equal to $("<button>");

        let topicBtn = $("<button>");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".

        topicBtn.addClass("topic-button topic topic-button-color");

        // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"

        letterBtn.attr("data-letters", letters[i]);

        // 5. Then give each "letterBtn" a text equal to "letters[i]".

        letterBtn.text(letters[i]);

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).

        $("#buttons").append(letterBtn);
        
    };

    // When the user clicks on a button, the page should grab 10 static, non - animated gif images from the 
    // GIPHY API and place them on the page.

    // When the user clicks one of the still GIPHY images, the gif should animate.If the user clicks the gif again, 
    // it should stop playing.

    // Under every gif, display its rating(PG, G, so on).
    //    * This data is provided by the GIPHY API.
    //    * Only once you get images displaying with button presses should you move on to the next step.

    // Add a form to your page that takes a value from a user input box and adds it to your`topics` array.
    // Then make a function call that takes each topic in the array and remakes the buttons on the page.

});




