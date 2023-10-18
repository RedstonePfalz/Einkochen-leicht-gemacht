document.querySelectorAll(".product_item").forEach(function(element) {
    element.addEventListener("click", function() {
        window.open("https://redstonepfalz.github.io/elg-web/r.html?id=" + $(element).attr("product_id"), "_blank", "location=yes");
    });
});

document.querySelectorAll(".year").forEach(function(element) {
    $(element).text(new Date().getFullYear());
});