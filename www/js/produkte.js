function openProductPage(link) {
    window.open("https://redstonepfalz.github.io/elg-web/r.html?id=" + link);
}

document.querySelectorAll(".year").forEach(function(element) {
    $(element).text(new Date().getFullYear());
});