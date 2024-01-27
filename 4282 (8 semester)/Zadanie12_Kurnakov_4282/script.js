function getVocabulary() {
  if (document.getElementById("inputTB").value[0]) {
    var file = "slovar/" + document.getElementById("inputTB").value[0] + ".txt";
    var Req = new XMLHttpRequest();
    Req.open("GET", file, true);
    Req.send();
    Req.onload = function () {
      if (Req.readyState == 4) {
        if (Req.status == 200) {
          document.getElementById("output_field").innerHTML = "";
          let vocabs = [];
          vocabs = Req.responseText.split("\n");
          var count = 0;

          for (var i = 0; i < vocabs.length; i++) {
            if (vocabs[i].includes(document.getElementById("inputTB").value)) {
              document.getElementById("output_field").innerHTML += vocabs[i] + "<br>";
              count++;
            }
          }

          if (count == 0) {
            document.getElementById("output_field").innerHTML = "This word not found";
          }
        } else {
          console.log(Req.status);
        }
      }
    };
  }
}
