let form =document.forms["form-cal"];

form.addEventListener("submit",getValues);

function getValues(event){
    event.preventDefault();

    const jkelamin = form.jekel.value;
    console.log(jkelamin);
    const berat = form.berat_badan.value;
    const umur = form.usia.value;
    const tinggi = form.tinggi_badan.value/100;

    let BMI;
    BMI = berat/(tinggi^2);
    console.log(BMI);
    
    let klasifikasiBerat,
    klasifikasiBeratDetail,
    hasilBMIText,
    hasilBMIText1,
    hasilBMIText2;
    BMI = BMI.toFixed(2);
    console.log(BMI);

    if (BMI < 18.5) {
        klasifikasiBerat = "Berat Badan Kurang";
        klasifikasiBeratDetail = "Anda kekurangan berat badan";
        hasilBMIText = "Hasil BMI dibawah 18.5";
        hasilBMIText1 =
          "<p>Anda berada dalam kategori underweight atau kekurangan berat badan.</p><p> Cara terbaik untuk menaikkan berat badan adalah dengan mengonsumsi makanan yang kaya nutrisi dan berolahraga. </p><p> Jika BMI Anda berada dalam katerogi ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.</p>";
        hasilBMIText2 =
          "<h3> Beberapa penyakit yang berasal dari kurangnya berat badan</h3><ul><li>Anemia</li><li>Malnutrisi</li><li>Infertilitas</li><li>Osteoporosis</li><li>Sistem Imun Rendah</li></ul>";
      } else if (BMI > 18.5 && BMI <= 24.9) {
        klasifikasiBerat = "Berat Badan Normal (Ideal)";
        klasifikasiBeratDetail = "Anda memiliki berat badan normal";
        hasilBMIText = "Hasil BMI diantara 18.5 dan 25";
        hasilBMIText1 =
          "<p>Anda berada dalam kategori normal.</p><p>Cara terbaik untuk menjaga berat badan adalah dengan mengurangi cemilan, melakukan aktivitas fisik, dan istirahat yang cukup.</p><p>Jika BMI Anda berada dalam katerogi ini maka Anda dianjurkan untuk menjaga pola makan dan kesehatan Anda.</p>";
        hasilBMIText2 =
          "<h3> Trik dalam menjaga berat badan normal</h3><ul><li>Konsumsi Makanan yang Tepat</li><li>Makan Dalam Porsi Kecil</li><li>Makan Secara Perlahan</li><li>Istirahat yang Cukup</li><li>Olahraga yang Rutin</li></ul>";
    
      } else if (BMI > 25 && BMI <= 29.9) {
        klasifikasiBerat = "Kelebihan Berat Badan";
        klasifikasiBeratDetail = "Anda memiliki berat badan berlebih";
        hasilBMIText = "Hasil BMI diantara 25 dan 30";
        hasilBMIText1 =
        "<p>Anda berada dalam kategori overwight atau berat badan berlebih.</p><p>Cara terbaik untuk mengurangi berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.</p><p>Jika BMI Anda berada dalam katerogi ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.</p>";
        hasilBMIText2 =
          "<h3>Beberapa penyakit yang berasal dari kelebihan berat badan</h3><ul><li>Diabetest</li><li>Hiliertensi</li><li>Sakit Jantung</li><li>Osteoarthritis</li></ul>";
    
      } else {
        klasifikasiBerat = "Kegemukan (Obesitas)";
        klasifikasiBeratDetail = "Anda miliki berat badan berlebih atau obesitas";
        hasilBMIText = "Hasil BMI 30";
        hasilBMIText1 =
        "<p>Anda berada dalam kategori obesity atau obesitas.</p><p>Cara terbaik untuk mengurangi berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.</p><p>Jika BMI Anda berada dalam katerogi ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.</p>";
        hasilBMIText2 =
        "<h3>Beberapa penyakit yang berasal dari kelebihan berat badan</h3><ul><li>Diabetest</li><li>Hiliertensi</li><li>Sakit Jantung</li><li>Osteoarthritis</li></ul>";
    
      }
      let out = `<p>BMI adalah ${BMI}</p>
      `;
      let klasifikasiBeratView = `<h3>${klasifikasiBerat}</h3>
      `;
      let klasifikasiBeratDetailView = `<h3>${klasifikasiBeratDetail}</h3>
      `;
      let hasilBMIText1View = `<P>${hasilBMIText1}</p>`;
      console.log(hasilBMIText1);

      document.querySelector(".BMI").innerHTML = out;
      document.querySelector(".klasifikasi-berat").innerHTML = klasifikasiBeratView;
      document.querySelector(".klasifikasi-berat-detail").innerHTML =
        klasifikasiBeratDetailView;
      document.querySelector(".hasil-pertama").innerHTML = hasilBMIText1;
      document.querySelector(".hasil-kedua").innerHTML = hasilBMIText2;
    
      document.querySelector(".hasil").style.display = "flex";
    }
    