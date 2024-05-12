$.getJSON("app/data/motor.json", function (data) {
    let daftarMotor = ""
    for (let i = 0; i<data.length;i++){
        daftarMotor += `
        <div class="col-6 p-0 col-lg-3 my-3 px-1">
            <div class="card produk mx-auto rounded">
                <div class="img-container">
                    <img src=app/image/Motor/`+data[i].MID+`/`+data[i].gambar[0]+` class="card-img-top" alt="`+data[i].gambar[i]+`">
                </div>
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">`+data[i].merk+`</h6>
                    <h5 class="card-title">`+data[i].varian+`</h5>
                    
                    <!-- <a href="#" class="btn button-outline-primary w-100 mt-4">DETAIL</a> -->
                    
                    <a href="#" class="btn button-outline-primary w-100 ">`
                    + (localStorage.getItem('lang') === "idn" ? "RENTAL SEKARANG" : "RENT NOW") + 
                    `</a>
                </div>
            </div>
        </div>
        `
    }
    $('#daftarMotor').html(daftarMotor)

})
// let card = `
// <div class="col-6 p-0 col-lg-3 my-3 px-1">
//     <div class="card produk mx-auto rounded">
//         <img src="https://picsum.photos/200?grayscale" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h6 class="card-subtitle mb-2 text-muted">Yamaha</h6>
//             <h5 class="card-title">MIO</h5>
            
//             <!-- <a href="#" class="btn button-outline-primary w-100 mt-4">DETAIL</a> -->
//             <a href="#" class="btn button-outline-primary w-100 mt-2">RENTAL SEKARANG</a>
//         </div>
//     </div>
// </div>
// `
