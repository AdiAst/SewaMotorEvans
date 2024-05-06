$(document).ready(function() {
    const fileLocation = "app/components/content/"
    $("#content").load(fileLocation+"home.html");
    $("#home-link").click(function() {
        $("#content").load(fileLocation+"home.html");
    });
  
    $("#daftar-link").click(function() {
      $("#content").load(fileLocation+"daftar.html");
    });

  });