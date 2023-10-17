document.querySelectorAll(".year").forEach(function(element) {
    $(element).text(new Date().getFullYear());
});