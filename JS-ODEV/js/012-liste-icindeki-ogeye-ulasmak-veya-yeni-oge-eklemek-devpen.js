var one = document.getElementById("gangstarr")
var two = document.getElementsByClassName("alternate")

for (var i = 0; i < two.length; i++) {
    two[i].style.color = "purple";
}

var liste = document.querySelector("ul");

var urun = document.querySelector("#veri");
var ekle = document.querySelector("#ekle");

ekle.addEventListener("click", function () {
    var li = document.createElement("li");
    li.textContent = veri.value;
    liste.appendChild(li);
    veri.value = "";
});