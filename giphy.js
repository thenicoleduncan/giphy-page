
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=t6ijkRM4RhHT0TGgBjTHFd9VKPaO4AZk&limit=5");

xhr.done(function (data) { 
    console.log("success got data", data); 
});

