let pages = ["home", "obst", "gemuese", "fleisch", "tipps", "produkte"];
let version = "1.4.4";

function observePageChanges() {
    const targetNode = document.querySelector("body");

    const config = { childList: true, subtree: true };

    const callback = function(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                location.reload();
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}

function switchPage(page) {
    $.ajax({
        url: "./pages/" + page + ".html",
        success: function(result) {
            $("#app").html(result);
        }
    });

    document.querySelectorAll(".page_js").forEach(function (element) {
       element.remove();
    });

    let scriptElement = document.createElement("script");
    let scriptElement2 = document.createElement("script");

    if (page === "home") {
        scriptElement.src = "js/" + page + ".js";
        scriptElement2.src = "js/home_md_loader.min.js";
        scriptElement2.className = "page_js";
        document.head.appendChild(scriptElement2);
    } else {
        scriptElement.src = "js/" + page + ".min.js";
    }

    if(page === "produkte" || page === "tipps") {
        let BootstrapCSSLoader = document.createElement("link");
        let BootstrapJSLoader = document.createElement("script");
        BootstrapCSSLoader.href = "lib/bootstrap.css";
        BootstrapCSSLoader.rel = "stylesheet";
        BootstrapJSLoader.src   = "lib/bootstrap.js";
        BootstrapJSLoader.className = "page_js";
        BootstrapCSSLoader.className = "page_js";
        document.head.appendChild(BootstrapJSLoader);
        document.head.appendChild(BootstrapCSSLoader);
    }

    scriptElement.className = "page_js";
    document.head.appendChild(scriptElement);
    localStorage.setItem("page", page);
    window.location.hash = page;
    observePageChanges();
}


function onBackButtonPress() {
    switchPage("home");
}

window.onhashchange = function() {
    if (pages.includes(window.location.hash.replace('#', ''))) {
        switchPage(window.location.hash.replace('#', ''));
    } else {
       switchPage("home");
    }
};

if (pages.includes(window.location.hash.replace('#', ''))) {
    switchPage(window.location.hash.replace('#', ''));
} else {
    switchPage("home");
}



