function makeRequest(url) {
  window.location.hash = url;

  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        document.getElementById("my").innerHTML += request.responseText;
        window.location.hash = url.split(".")[0];
      } else {
        console.log(request.status);
      }
    }
  };
}

function checkEnd() {
  let A = Math.ceil(
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    ),
  );

  let B = Math.ceil(Math.max(window.pageXOffset, document.documentElement.scrollTop));

  let C = Math.ceil(document.documentElement.clientHeight);

  if (A <= B + C) {
    let hash = window.location.hash;
    hash = hash.split(".")[0];
    hash = hash.split("#")[1];

    let next_page = Number(hash.charAt(hash.length - 1));
    if (next_page < 9) next_page++;
    else {
      alert("The End");
      return;
    }

    hash = hash.slice(0, -1);
    let new_hash = hash + next_page + ".html";

    makeRequest(new_hash);
  }
}

function checkHash() {
  if (window.location.hash.length > 2) {
    let hash = window.location.hash;
    hash = hash.split("#")[1] + ".html";
    makeRequest(hash);
  } else {
    hash = "glava1.html";
    makeRequest(hash);
  }
}
