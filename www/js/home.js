document.querySelectorAll(".elg-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        switchPage($(button).attr("page"));
    });
});

if (!localStorage.getItem("updateNotice")) {
    $("#updateDialog").attr("open", "open");
}

document.getElementById("close-btn").addEventListener("click", function() {
    localStorage.setItem("updateNotice", "true");
});
