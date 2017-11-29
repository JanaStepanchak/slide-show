var objImg = {};
var radio = 1;
for (var i = 1; i <= 9; i++) {
    objImg["img" + i] = "url(img/0" + i + ".jpg)";
}
document.getElementById("container").style.background = objImg.img1;
document.getElementById("container").style.backgroundSize = "cover";
document.getElementById("container").style.backgroundRepeat = "no-repeat";
document.getElementById("container").style.backgroundPosition = "center";
document.getElementById("left").onclick = function () {
    radio = radio + 1;
    if (radio == 10) {
        radio = 1;
    };
    document.getElementById("container").style.background = objImg["img" + radio];
    document.forms.form[radio - 1].checked = true;
}
document.getElementById("right").onclick = function () {
    radio = radio - 1;
    if (radio < 1) {
        radio = 9;
    };
    document.getElementById("container").style.background = objImg["img" + radio];
    document.forms.form[radio - 1].checked = true;
}
var play = 1;
document.getElementById("play-pause").onclick = function () {
        if (play == 1) {
            this.value = "Pause";
            play = 0;
            PlaySlide = setInterval(function () {
                radio = radio + 1;
                document.getElementById("container").style.background = objImg["img" + radio];
                document.forms.form.radio[radio - 1].checked = true;
                if (radio == 9) {
                    radio = 0
                };
            }, 1000);
        }
        else {
            this.value = "Play";
            play = 1;
            clearInterval(PlaySlide);
        }
    }

//for (j = 0; j < 9; j++) {
//         console.log(j);
//    
//    
//        document.forms.form.radio[j].onclick = function () {
//            console.log(j);
//            document.getElementById("container").style.background = objImeg["img" + this.value];
//            radio = this.value;
//            console.log(radio);
//        }
//    }