
function switchPage(page) {
    $.ajax({
        url: "./pages/" + page + ".html",
        success: function(result) {
            $("#app").html(result);
        }
    });
    let scriptElement = document.createElement("script");
    if (page === "home") {
        scriptElement.src = "js/" + page + ".js";
    } else {
        scriptElement.src = "js/" + page + ".min.js";
    }
    document.head.appendChild(scriptElement);
    localStorage.setItem("page", page);
}

function onBackButtonPress() {
    switchPage("home");
}

switchPage("home");




