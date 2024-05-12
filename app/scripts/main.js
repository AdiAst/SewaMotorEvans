$(document).ready(function() {
    $("#navbar").load("app/components/navbar.html");
    $("#footer").load("app/components/footer.html");
    $("#content").load("app/components/content/home.html");
});
const data = localStorage.getItem('lang');

if (data === "idn") {
    var konten = "app/data/konten_idn.json"
} else {
    var konten = "app/data/konten_eng.json"
}
