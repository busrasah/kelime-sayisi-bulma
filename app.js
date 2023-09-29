// kelime sayısı bulma uygulaması

let metin = "şuanda antalya'da javascript eğitimi çekmekteyim.";

let harf = prompt("Harfi giriniz");

let sonuc = bul(harf);
alert("Harf Sayısı :" +sonuc);

function bul(harf) {
    let toplam=0;
    for(let i =0; i<metin.length ; i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()) {
            toplam+=1;
        }
    }
    return toplam;
}