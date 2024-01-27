function checkInput(inputValue) {
  let reader = new XMLHttpRequest();
  let lowerInput = inputValue.value.trim();
  lowerInput = lowerInput.toLowerCase();
  reader.open("GET", "pobeda.json", true);
  reader.send();
  reader.onreadystatechange = () => {
    if (reader.readyState == 4) {
      if (reader.status == 200) {
        var json = JSON.parse(reader.responseText);
        var person = json.generals;

        const cyrillicPattern = /[\u0400-\u04FF]/;
        document.getElementById("search-table").innerHTML = "";

        var findedInfo = "";

        if (lowerInput != "") {
          if (cyrillicPattern.test(lowerInput)) {
            document.getElementById("search-table").innerHTML = "";
            for (var id in person) {
              var name = person[id].name.toLowerCase();
              if (name.indexOf(lowerInput) !== -1) {
                findedInfo +=
                  "<li>" + "<a href='" + person[id].url + "'>" + person[id].name + "</a>" + "</li>";
                document.getElementById("search-table").innerHTML = findedInfo;
              }
            }
          } else {
            document.getElementById("search-table").innerHTML += "Try input again";
          }
        }
      }
    }
  };
}
