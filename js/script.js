function validateForm() {
  var all_err_id =["#name_error","#email_error","#sayisal_error","#basamakli_error","#alfa_error","#max30_error","#uckelime_error","#password_error"];
  for (var i = 0;i<all_err_id.length;i++) {
    document.querySelector(all_err_id[i]).textContent ="";
  }
  var generalCheck1=true;
  var generalCheck2=true;
  var generalCheck3=true;
  var generalCheck4=true;
  var generalCheck5=true;
  var generalCheck6=true;
  var generalCheck7=true;
  var generalCheck8=true;
  var all_id = ["#name","#email","#sayisal","#basamakli","#alfa","#max30","#uckelime","#password"];
    var temp=document.querySelector(all_id[0]).value;
    if(!/^[a-zA-Zç\Ç\ğ\Ğ\İ\ı\ö\Ö\ş\Ş\ü\Ü\ ]+$/.test(temp)){
      document.querySelector("#name_error").textContent = "İsim Alanı Boş Veya Harf Dışında Veri Girilmiş.";
      generalCheck1=false;
    }
    var temp=document.querySelector(all_id[1]).value;
    if(correctEmail(temp)==false){
      document.querySelector("#email_error").textContent = "Girilen E-mail Hatalı Veya Boş.";
      generalCheck2=false;
    }
    var temp=document.querySelector(all_id[2]).value;
    if (((isNaN(temp) || temp==""))) {
    document.querySelector("#sayisal_error").textContent = "Bu Kısım Boş Veya Bu Kısıma Sayısal Değer Dışında Veri Girilmiş.";
      generalCheck3=false;
    }
    var temp=document.querySelector(all_id[3]).value;
    if ((temp.length>=13  || isNaN(temp) || temp=="")) {
    document.querySelector("#basamakli_error").textContent = "Bu Kısımda 12'den Fazla Basamak Var Ve/Veya Sayısal Bir Değer Dışında Veri Girilmiş Ya da Boş. ";
      generalCheck4=false;
    }
    var temp=document.querySelector(all_id[4]).value;
    if (!/^[a-zA-Zç\Ç\ğ\Ğ\İ\ı\ö\Ö\ş\Ş\ü\Ü]+$/.test(temp)) {
    document.querySelector("#alfa_error").textContent = "Bu Kısım Boş Veya Bu Kısıma Harfler Dışında Veri Girilmiş.";
      generalCheck5=false;
    }
    var temp=document.querySelector(all_id[5]).value;
    if (!/^[a-zA-Zç\Ç\ğ\Ğ\İ\ı\ö\Ö\ş\Ş\ü\Ü]+$/.test(temp) || temp.length>30 || (!/^[a-zA-Zç\Ç\ğ\Ğ\İ\ı\ö\Ö\ş\Ş\ü\Ü]+$/.test(temp) && temp.length>30)) {
    document.querySelector("#max30_error").textContent = "Bu Kısımda 30'dan Fazla Basamak Var Ve/Veya Bu Kısıma Harfler Dışında Veri Girilmiş Ya da Bu Kısım Boş.";
      generalCheck6=false;
    }
    var temp=document.querySelector(all_id[6]).value;
    var tempArray=temp.split(" ");
    if(tempArray.length!=3){
      document.querySelector("#uckelime_error").textContent = "Bu Kısım Sadece 3 Kelimeden Oluşabilir.";
      generalCheck7=false;
    }
    else{
      generalCheck7=checkString(tempArray);
    }
    var temp=document.querySelector(all_id[7]).value;
    if(lengthCalculator(temp,9)==false){
      generalCheck8=false;
    }
    else if(lengthCalculator(temp,9)==true){
      var tempArray=temp.split("");
      var check1,check2,check3,check4;
      var checkArray=[check1,check2,check3,check4];
      checkArray[0]=checkPassword(tempArray,0);
      checkArray[1]=checkPassword(tempArray,1);
      checkArray[2]=checkPassword(tempArray,2);
      checkArray[3]=checkPassword(tempArray,3);
      if(checkArray[0]==true && checkArray[1]==true && checkArray[2]==true && checkArray[3]==true){
        generalCheck8=true;
      }
      else{
        var text="Bu Kısımda ";
        if(checkArray[0]==false){
          text+= "En Az 1 Küçük Harf ";
          generalCheck8=false;
        }
        if(checkArray[1]==false){
          text+= "En Az 1 Büyük Harf ";
          generalCheck8=false;
        }
        if(checkArray[2]==false){
          text+= "En Az 1 Rakam ";
          generalCheck8=false;
        }
        if(checkArray[3]==false){
          text+= "En Az 1 Noktalama İşareti ";
          generalCheck8=false;
        }
      text+="Bulunmalıdır.";
      document.querySelector("#password_error").textContent = text;
      }
    }
  if(generalCheck1==true && generalCheck2==true && generalCheck3==true && generalCheck4==true && generalCheck5==true && generalCheck6==true &&generalCheck7==true && generalCheck8==true){
    return true;
  }
  return false;
}   
function checkString(tempArray){
  for (var i =0 ; i<3;i++) {
    if(!/^[a-zA-Zç\Ç\ğ\Ğ\İ\ı\ö\Ö\ş\Ş\ü\Ü]+$/.test(tempArray[i])){
      document.querySelector("#uckelime_error").textContent = "Bu Kısımdaki Stringler Sadece Harflerden Oluşmalıdır.";
      return false;
    }
  }
  return true;
}
function checkPassword(tempArray,type){
  if(type==0){
    for (var i =0;i<tempArray.length;i++) {
      if(/^[a-z]+$/.test(tempArray[i])){
        return true;
      } 
    }
    return false;
  }
  else if(type==1){
    for (var i =0;i<tempArray.length;i++) {
      if(/^[A-Z]+$/.test(tempArray[i])){
        return true;
      } 
    }
    return false;
  }
  else if(type==2){
    for (var i =0;i<tempArray.length;i++) {
      if(/^[0-9]+$/.test(tempArray[i])){
        return true;
      } 
    }
    return false;
  }
  else if(type==3){
    for (var i =0;i<tempArray.length;i++) {
      if(/^[.\,\;\:\!\'\"\?\_\-\)\(\[\]\/]+$/.test(tempArray[i])){
        return true;
      } 
    }
    return false;
  }
}
function lengthCalculator(temp,length){
  if(temp.length<length){
    document.querySelector("#password_error").textContent = "Bu Kısım En Az 8 Karakterden Oluşmalıdır.";
    return false;
  }
  return true;
}
function correctEmail(mail){
  if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail)){
    return true;
  }
  return false;
}