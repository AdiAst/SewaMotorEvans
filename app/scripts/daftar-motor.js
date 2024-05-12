function getWaktuSekarang() {
    const waktu = new Date();
    const jam = waktu.getHours();

    if (jam >= 5 && jam < 12) {
        return "pagi";
    } else if (jam >= 12 && jam < 18) {
        return "siang";
    } else {
        return "malam";
    }
}
$.getJSON("app/data/motor.json", function (data) {
    let daftarMotor = ""
    for (let i = 0; i<data.length;i++){
        let pesan = "Selamat " + getWaktuSekarang() + ", Saya tertarik untuk menyewa motor " + data[i].merk + " " + data[i].varian + ", apakah motornya tersedia?";
            daftarMotor += `
            <div class="col-6 p-0 col-lg-3 my-3 px-1">
                <div class="card produk mx-auto rounded">
                    <div class="img-container">
                        <img src="app/image/Motor/${data[i].MID}/${data[i].gambar[0]}" class="card-img-top" alt="${data[i].gambar[i]}">
                    </div>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">${data[i].merk}</h6>
                        <h5 class="card-title">${data[i].varian} (${data[i].harga}/${localStorage.getItem('lang') === "idn" ? "hari" : "day"})</h5>
                        
                        <a href="https://wa.me/+6281338764099?text=${pesan}" class="btn button-outline-primary w-100" target="_blank">${localStorage.getItem('lang') === "idn" ? "RENTAL SEKARANG" : "RENT NOW"}</a>
                    </div>
                </div>
            </div>
            `;

    }
    $('#daftarMotor').html(daftarMotor)

})
