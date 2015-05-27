function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function getRadioVal(form, name) {
    var val;
    var radios = form.elements[name];
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}
function cekJawaban(form){
var benar = "benar"+form;
var salah = "salah"+form;
var lanjut = "lanjut"+form;
var formbuah = "formbuah"+form;
var submit = "submit"+form;
var jawa = "jaws"+form;
var answer=getRadioVal(document.getElementById(formbuah),  "jwb" );
var solution=answerBuah[form];
if(answer==solution){
    skor = skor + 100;
    myNavigator.pushPage(benar, { animation : 'slide' } );
    document.getElementById(salah).style.display="none";
    document.getElementById(submit).style.display="none";
    document.getElementById(jawa).style.display="block";
    //document.getElementById(lanjut).style.display="block";
   // level=level+1;
    }
    else{     
        skor = skor - 60;
        ons.notification.alert({message: 'Jawaban anda salah!'});
        //document.getElementById(salah).style.display="block";
        //document.getElementById(salah).innerHTML="<p>Jawaban salah :( silahkan coba lagi</p>";
    }
}
function cekJawabann(form){
var benar = "benarn"+form;
var salah = "salahn"+form;
var lanjut = "lanjutn"+form;
var formsayur = "formsayur"+form;
var submit = "submitn"+form;
var jawa = "jawsn"+form;
var answer=getRadioVal(document.getElementById(formsayur),  "jwb" );
var solution=answerSayur[form];
if(answer==solution){
    skor = skor + 100;
    myNavigator.pushPage(benar, { animation : 'slide' } );
    document.getElementById(salah).style.display="none";
     document.getElementById(submit).style.display="none";
    document.getElementById(jawa).style.display="block";
    //document.getElementById(lanjut).style.display="block";
   // level=level+1;
    }
    else{     
        skor = skor - 60;
        ons.notification.alert({message: 'Jawaban anda salah!'});
        //document.getElementById(salah).style.display="block";
        //document.getElementById(salah).innerHTML="<p>Jawaban salah :( silahkan coba lagi</p>";
    }
}
var QueryString = function () {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();

function nextBuah(form){
    form=form+1;
    var url = "congrats.html?skor="+skor;
    if(form==10){
        window.location=url;
    }
    else {
    var next="soalbuah"+form;
    myNavigator.pushPage(next, { animation : 'slide' } );
    }
}

function nextSayur(form){
   form=form+1;
    var url = "congrats.html?skor="+skor;
    if(form==10){
        window.location=url;
    }
    else {
    var next="soalsayur"+form;
    myNavigator.pushPage(next, { animation : 'slide' } );
    }
}

function hideSalah(form){
    var salah="soalsalah"+form;
    //document.getElementById(salah).style.display="none";
}