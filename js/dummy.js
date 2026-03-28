const popup_widget = document.getElementById("popup-widget");
const cards = document.getElementsByClassName("card");
const popup_widget_bg = document.getElementById("popup-widget-background");
const popup_widget_close = document.getElementById("widget-close-button");

const rhd = document.getElementById("recipehub");
const bslbd = document.getElementById("bsliarsbar");
const lfrd = document.getElementById("lfr");
const mp3d = document.getElementById("mp3");

let state;
let intervalId;
let op = 0;

const card_select = {
    RECIPEHUB: 0,
    LIARSBAR: 1,
    LFR: 2,
    MP3: 3,
}

console.log(card_select);

for (const el of cards) {
    el.addEventListener("click", () => {
        /* render description*/
        rhd.style.display = "none";
        bslbd.style.display = "none";
        lfrd.style.display = "none";
        mp3d.style.display = "none";

        if (el.id == "recipehub-card") {
            rhd.style.display = "block";
        } else if (el.id == "bsliarsbar-card") {
            bslbd.style.display = "block";
        } else if (el.id == "lfr-card") {
            lfrd.style.display = "block";
        } else if (el.id == "mp3-card") {
            mp3d.style.display = "block";
        }

        /* fade in widget*/
        popup_widget.style.display = "flex";
        popup_widget_bg.style.display = "block";
        popup_widget.style.opacity = op;
        popup_widget_bg.style.opacity = op;
        intervalId = setInterval(() => {
            if (popup_widget.style.opacity == 1) {
                clearInterval(intervalId);
                return;
            }
            op = op + 0.02;
            popup_widget.style.opacity = op;
            popup_widget_bg.style.opacity = op;
        }, 10);
    });
};

/* fadeout */
const fadeout_widget = () => {
    console.log("Clicked on widget, closing it.");
    intervalId = setInterval(() => {
        if (popup_widget.style.opacity <= 0) {
            popup_widget.style.display = "none";
            popup_widget_bg.style.display = "none";
            clearInterval(intervalId);
            return;
        }
        op = op - 0.02;
        popup_widget.style.opacity = op;
        popup_widget_bg.style.opacity = op;
    }, 5);
}

popup_widget_close.addEventListener("click", fadeout_widget);
popup_widget_bg.addEventListener("click", fadeout_widget);
