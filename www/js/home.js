document.querySelectorAll(".elg-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        switchPage($(button).attr("page"));
    });
});