import "@material/web/select/outlined-select";
import "@material/web/select/select-option";

let fleisch;

document.addEventListener("change", selectmenuchange, false);

let zeit = $("#zeit");
let temperatur = $("#temperatur");
let notice = $("#notice");

function selectmenuchange() {
    fleisch = document.querySelector("md-outlined-select").value;
    //TODO: Sprachenunterstützung per JSON-Strings

    notice.hide();

    if (fleisch === "braten") {
        temperatur.text("100");
        zeit.text("85");
    }
    if (fleisch === "fleischbruehe") {
        temperatur.text("100");
        zeit.text("60");
    }
    if (fleisch === "gulasch") {
        temperatur.text("100");
        zeit.text("75");
    }
    if (fleisch === "hackfleisch") {
        temperatur.text("100");
        zeit.text("110");
    }
    if (fleisch === "wild") {
        temperatur.text("100");
        zeit.text("75");
    }
    if (fleisch === "wuerste") {
        temperatur.text("100");
        zeit.text("110");
    }

    $("#details").removeClass("hidden");
}