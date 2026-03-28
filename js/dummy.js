const popup_widget = document.getElementById("popup-widget");
const cards = document.getElementsByClassName("card");
const popup_widget_bg = document.getElementById("popup-widget-background");
const popup_widget_close = document.getElementById("widget-close-button");

console.log(cards);
console.log(popup_widget);
console.log(popup_widget_bg);
console.log(popup_widget_close);

let intervalId;
let op = 0;

for (const el of cards) {
    el.addEventListener("click", () => {
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

popup_widget_close.addEventListener("click", () => {
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
});

popup_widget_bg.addEventListener("click", () => {
    console.log("Clicked on widget background, closing it."); 
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
});
