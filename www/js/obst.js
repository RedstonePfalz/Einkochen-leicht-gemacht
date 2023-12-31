import "@material/web/select/outlined-select";
import "@material/web/select/select-option";

let obst;

document.addEventListener("change", selectmenuchange, false);

let z1k = $("#z1k");
let z1l = $("#z1l");
let zeit = $("#zeit");
let temperatur = $("#temperatur");
let notice = $("#notice");

function selectmenuchange() {
    obst = document.querySelector("md-outlined-select").value;
    //TODO: Sprachenunterstützung per JSON-Strings

    notice.hide();
    z1l.show();
    z1k.show();

    if (obst === "apfel") {
        zeit.text("30");
        temperatur.text("85");
        z1k.text("200-300 g");
        z1l.text("200-300 g");
        notice.show();
        notice.text("Bei Bedarf können die Äpfel vor dem Einmachen auch mit Zimt, Vanille oder Ingwer gewürzt werden.");
    }

    if (obst === "apfelmus") {
        zeit.text("30");
        temperatur.text("90");
        z1l.hide();
        z1k.hide();
    }

    if (obst === "aprikosen") {
        zeit.text("30");
        temperatur.text("85");
        z1l.text("200-350 g");
        z1k.text("Nicht verfügbar");
    }

    if (obst === "birnen") {
        zeit.text("30/80");
        temperatur.text("90");
        z1l.text("250-400 g");
        z1k.text("Nicht verfügbar");
        notice.show();
        notice.text("Wichtig: Weiche Birnen werden 30 min lang eingekocht, harte Birnen 80 min.\n" +
            "Ich empfehle, bei Birnen etwas Zitronensaft in das Wasser zu geben. Dann behalten die Birnen ihre weiße Farbe.");
    }

    if (obst === "brombeeren") {
        zeit.text("25");
        temperatur.text("85");
        z1l.text("350-500 g");
        z1k.text("150-250 g");
    }

    if (obst === "erdbeeren") {
        zeit.text("25");
        temperatur.text("80");
        z1l.text("250-350 g");
        z1k.text("150-200 g");
    }

    if (obst === "himbeeren") {
        zeit.text("30");
        temperatur.text("80");
        z1l.text("300-400 g");
        z1k.text("150-200 g");
    }

    if (obst === "johannisbeeren") {
        zeit.text("25");
        temperatur.text("90");
        z1l.text("500-600 g");
        z1k.text("200-300 g");
    }

    if (obst === "kirschen") {
        zeit.text("30");
        temperatur.text("80");
        z1l.text("Siehe Hinweis");
        z1k.text("Siehe Hinweis");
        notice.show();
        notice.text("WICHTIG: Sauerkirschen: 400-600g Zucker auf 1l Wasser und 300-400g Zucker auf 1kg Obst\n" +
            " Süßkirschen: 250-350g Zucker auf 1l Wasser und 150-200g Zucker auf 1kg Obst");
    }

    if (obst === "mirabellen") {
        zeit.text("30");
        temperatur.text("85");
        z1l.text("250-300 g");
        z1k.text("200-250 g");
    }

    if (obst === "pfirsiche") {
        zeit.text("30");
        temperatur.text("85");
        z1l.text("250-400 g");
        z1k.text("Nicht verfügbar");
    }

    if (obst === "pflaumen") {
        zeit.text("30");
        temperatur.text("90");
        z1l.text("300-350 g");
        z1k.text("300-350 g");
    }

    if (obst === "preiselbeeren") {
        zeit.text("25");
        temperatur.text("90");
        z1l.text("750 g");
        z1k.text("Nicht verfügbar");
    }

    if (obst === "renekloden") {
        zeit.text("30");
        temperatur.text("85");
        z1l.text("Nicht verfügbar");
        z1k.text("250 g");
    }

    if (obst === "rhabarber") {
        zeit.text("30");
        temperatur.text("95");
        z1l.text("200-250 g");
        z1k.text("200-250 g");
    }

    if (obst === "stachelbeeren") {
        zeit.text("30");
        temperatur.text("80");
        z1l.text("400-500 g");
        z1k.text("400-500 g");
    }


    $("#details").removeClass("hidden");
}
