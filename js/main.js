var objImg = {};
var radio = 1;
for (var i = 1; i <= 9; i++) {
    objImg["img" + i] = "url(img/0" + i + ".jpg)";
}
document.getElementById("container").style.background = objImg.img1;
document.getElementById("container").style.backgroundSize = "cover";
document.getElementById("left").onclick = function () {
    radio = radio + 1;
    if (radio == 10) {
        radio = 1;
    };
    document.getElementById("container").style.background = objImg["img" + radio];
    document.getElementById("container").style.backgroundSize = "cover";
    document.forms.form[radio - 1].checked = true;
}
document.getElementById("right").onclick = function () {
    radio = radio - 1;
    if (radio < 1) {
        radio = 9;
    };
    document.getElementById("container").style.background = objImg["img" + radio];
    document.getElementById("container").style.backgroundSize = "cover";
    document.forms.form[radio - 1].checked = true;
}
var play = 1;
document.getElementById("play-pause").onclick = function () {
    if (play == 1) {
        this.value = "Pause";
        play = 0;
        PlaySlide = setInterval(function () {
            if (radio == 9) {
                radio = 0
            };
            radio = 1 + parseInt(radio);
            document.getElementById("container").style.background = objImg["img" + radio];
            document.getElementById("container").style.backgroundSize = "cover";
            document.forms.form.radio[radio - 1].checked = true;
        }, 3000);
    }
    else {
        this.value = "Play";
        play = 1;
        clearInterval(PlaySlide);
    }
}
for (var j = 0; j < 9; j++) {
    document.forms.form.radio[j].onmousemove = function () {
        document.getElementById("hover-radio").style.display = "block";
        document.getElementById("hover-radio").style.background = objImg["img" + this.value];
        document.getElementById("hover-radio").style.backgroundSize = "cover";
        document.getElementById("hover-radio").style.left = "" + (250 + (22 * this.value)) + "px";
    }
    document.forms.form.radio[j].onmouseout = function () {
        document.getElementById("hover-radio").style.display = "none";
    }
    document.forms.form.radio[j].onclick = function () {
        document.getElementById("container").style.background = objImg["img" + this.value];
        document.getElementById("container").style.backgroundSize = "cover";
        radio = parseInt(this.value);
        document.getElementById("hover-radio").style.display = "none";
    }
}