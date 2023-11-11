import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
import "@material/web/button/filled-button";

let gemuese;
let insertHtml;

document.addEventListener("change", selectmenuchange, false);

let zeit = $("#zeit");
let temperatur = $("#temperatur");
let notice = $("#notice");
let productlink = $("#productLink");

function loadAffiliate(sort) {
    productlink.show();
    if (sort === "gewuerzgurken") {
        insertHtml = "<md-filled-button id=\"productButton\">Zur Gurken-Einmachzubereitung</md-filled-button>";
        productlink.html(insertHtml);
        document.querySelector("#productButton").addEventListener("click", function() {
            window.open("https://redstonepfalz.github.io/elg-web/r.html?id", "_blank", "location=yes");
        });
    }
}

function selectmenuchange() {
    gemuese = document.querySelector("md-outlined-select").value;
    //TODO: Sprachenunterstützung per JSON-Strings

    notice.hide();
    productlink.hide();

    if (gemuese === "blumenkohl") {
        temperatur.text("100");
        zeit.text("90");
    }
    if (gemuese === "erbsen") {
        temperatur.text("100");
        zeit.text("120");
    }
    if (gemuese === "gewuerzgurken") {
        temperatur.text("85");
        zeit.text("30");
        notice.text("Wichtig: Gurken können nicht in normalem Wasser eingekocht werden. Um Gurken einzukochen, muss eine Gurken-Einmach-Zubereitung mit Essig verwendet werden.");
        notice.show();
    }
    if (gemuese === "gruenebohnen") {
        temperatur.text("100");
        zeit.text("120");
    }
    if (gemuese === "karotten") {
        temperatur.text("100");
        zeit.text("95");
    }
    if (gemuese === "kohlrabi") {
        temperatur.text("100");
        zeit.text("95");
    }
    if (gemuese === "kuerbis") {
        temperatur.text("90");
        zeit.text("30");
    }
    if (gemuese === "pilze") {
        temperatur.text("100");
        zeit.text("110");
    }
    if (gemuese === "rosenkohl") {
        temperatur.text("100");
        zeit.text("110");
    }
    if (gemuese === "rotebeete") {
        temperatur.text("100");
        zeit.text("30");
    }
    if (gemuese === "rotkohl") {
        temperatur.text("100");
        zeit.text("110");
    }
    if (gemuese === "sellerie") {
        temperatur.text("100");
        zeit.text("110");
    }
    if (gemuese === "spargel") {
        temperatur.text("100");
        zeit.text("120");
    }
    if (gemuese === "tomaten") {
        temperatur.text("90");
        zeit.text("30");
    }

    $("#details").removeClass("hidden");
}