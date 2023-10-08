//if, if else, nested_if
      // /kondisi if
      var bilangan = 10;
      if (bilangan % 10 == 0) {
        console.log(
          "angka " + bilangan + " merupakan angka yang habis jika di bagi 10"
        );
      }

     //   kondisi if else
      var umur = 17;
      if (umur <= 19) {
        console.log("karena umur kamu " + umur + " thn maka kamu masih pelajar");
      } else {
        console.log("sudah dewasa, jadi siap menghadapi kenyataan hidup :)");
      }

      // kondisi nested if
      var thn_lahir = 2002;
      if (thn_lahir >= 1997 && thn_lahir <= 2012) {
        console.log("anda gen z");
      } else if (thn_lahir >= 1981 && thn_lahir <= 1996) {
        console.log(" anda gen milenial");
      } else if (thn_lahir >= 1965 && thn_lahir <= 1980) {
        console.log("anda gen X");
      } else {
        console.log("anda tidak masuk kategori");
      }
      


//switch_case*
      var Hari = "Sabtu";
      var Menu_Makanan = "";
      
      switch (Hari.toLowerCase()) {
        case "senin":
          Menu_Makanan = "Mie ayam";
          break;
        case "selasa":
          Menu_Makanan = "sate ayam";
          break;
        case "rabu":
          Menu_Makanan = "nasi padang";
          break;
        case "kamis":
          Menu_Makanan = "ayam bakar";
          break;
        case "jumat":
          Menu_Makanan = "Nasi uduk";
          break;
        case "sabtu":
          Menu_Makanan= "tempe goreng";
          break;
        case "minggu":
          Menu_Makanan = "lalapan ayam";
          break;
        default:
          Menu_Makanan = "Hari tidak valid.";
          break;
      }
      
      console.log("Pada hari " + Hari + ", rekomendasi makanan adalah: " + Menu_Makanan);
      

//for statment
      var totalPutaran = 20;
      var kalori = 0;

      for (var putaran = 1; putaran <= 20; putaran++) {
        console.log("Anda telah menyelesaikan putaran ke-" + putaran);
        kalori += 5;
      }

      console.log("Total kalori yang di bakar: " + kalori + " kal");


//while, do while
       //while
       var baterai_skrg = 5;

        while (baterai_skrg <= 100) {
        console.log("baterai ponsel saat ini : " + baterai_skrg + "%");
        baterai_skrg += 5;
        }

        // do while
        let totalwaktu_olahraga = 0;
        let hari = 1;

        do{
          const waktu_olahraga = Math.floor(Math.random()*10)+1;
          console.log("hari " + hari + ": olahraga selama " + waktu_olahraga + " jam ");
          totalwaktu_olahraga += waktu_olahraga;
          hari++;
        } while (hari <= 7);

        console.log("total waktu olahraga selama seminggu: " + totalwaktu_olahraga + " jam ");

// function
//penggunaan build function
function warna_primer() {
      console.log("merah, kuning, biru");
      }
      warna_primer();
      
      //penggunaan parameter function (parameter : saldo_awal, saldo_baru)
      function total_tabungan(saldo_awal, saldo_baru) {
        var total = saldo_awal + saldo_baru;
        return total;
      }
      var total_saldo = total_tabungan(1000000, 1500000);
      console.log("total tabungan yang dimiliki Anton : Rp " + total_saldo);

      //penggunaan return function
      function hasil(panjang, lebar, tinggi) {
        var luas = panjang * lebar * tinggi;
        return luas;
      }

      var luas_persegiPanjang = hasil(4, 5, 6);
      console.log("luas persegi panjang : " + luas_persegiPanjang + " cm");