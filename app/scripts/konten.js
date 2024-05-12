$(document).ready(function() {
    $.getJSON(konten, function (data) {
        $(".tagline").html(data.tagline)
        $(".more_btn").html(data.more_btn)
        $('.unggulan-gambar').each(function(index) {
            $(this).text(data.teks_unggulan[index]);
        });
        $(".h2_layanan").html(data.h2_layanan)
        $(".par_layanan").html(data.par_layanan)
        $('.card-layanan .card-title').each(function(index) {
            $(this).text(data.layanan_unggulan[index].h5);
        });
        $('.card-layanan .card-subtitle').each(function(index) {
            $(this).text(data.layanan_unggulan[index].h6);
        });
        $(".sub_text").html(data.sub_text)
        $(".h2_testimoni").html(data.h2_testimoni)
        $(".subjudul_testimoni").html(data.subjudul_testimoni)
        $(".footer").html(data.footer)
        $(".menu_daftar_kendaraan").html(data.menu_daftar_kendaraan)
        $(".rental_btn").html(data.rental_btn)
        $(".bahasa").html(data.bahasa)
    })
});