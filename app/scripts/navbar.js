$(document).ready(function() {
    const fileLocation = "app/components/content/"
    $("#content").load(fileLocation+"home.html");
    $("#home-link").click(function() {
        $("#content").load(fileLocation+"home.html");
    });
  
    $("#daftar-link").click(function() {
      $("#content").load(fileLocation+"daftar.html");
    });
    $("#idn").click(function() {
      localStorage.setItem('lang', "idn");
      location.reload()
    });
    $("#eng").click(function() {
      localStorage.setItem('lang', "eng");
      location.reload()
    });

    
  });