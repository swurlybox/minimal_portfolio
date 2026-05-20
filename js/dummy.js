const popup_widget = document.getElementById("popup-widget");
const cards = document.getElementsByClassName("card");
const popup_widget_bg = document.getElementById("popup-widget-background");
const popup_widget_close = document.getElementById("widget-close-button");
const widget_header_title = document.getElementById("widget-header-title");

const rhd = document.getElementById("recipehub");
const bslbd = document.getElementById("bsliarsbar");
const lfrd = document.getElementById("lfr");
const mp3d = document.getElementById("mp3");
const zephyr_mp3d = document.getElementById("zephyr-mp3");

let state;
let intervalId;
let op = 0;

/* Depending on which card was clicked, display the relevant information.  */
for (const el of cards) {
    el.addEventListener("click", () => {
        /* Clear every description. */
        rhd.style.display = "none";
        bslbd.style.display = "none";
        lfrd.style.display = "none";
        mp3d.style.display = "none";
        zephyr_mp3d.style.display = "none";

        if (el.id == "recipehub-card") {
            rhd.style.display = "block";
            widget_header_title.textContent = "Recipe Hub"
        } else if (el.id == "bsliarsbar-card") {
            bslbd.style.display = "block";
            widget_header_title.textContent = "BS Liar's Bar"
        } else if (el.id == "lfr-card") {
            lfrd.style.display = "block";
            widget_header_title.textContent = "Line Following Robot"
        } else if (el.id == "mp3-card") {
            mp3d.style.display = "block";
            widget_header_title.textContent = "MP3 Player Prototype"
        } else if (el.id == "zephyr-mp3-card") {
            zephyr_mp3d.style.display = "block";
            widget_header_title.textContent = "Zephyr MP3 Player"
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
