function hw() {
  var cou = 0;
  var q13 = document.forms.test_kur.q13_text.value;
  var q16 = document.forms.test_kur.q16_text.value;
  var q28 = document.forms.test_kur.q28_text.value;
  var q3 = document.forms.test_kur.q3_radio;
  var q11 = document.forms.test_kur.q11_radio;
  var q15 = document.forms.test_kur.q15_radio;
  var q45 = document.forms.test_kur.q45_check;
  var q20 = document.forms.test_kur.q20_check;
  var q26 = document.forms.test_kur.q26_check;
  var q999 = document.forms.test_kur.q999_select;

  if (q13 == "пользователя" || q13 == "Пользователя") {
    cou++;
  }
  if (q16 == "2" || q16 == 2) {
    cou++;
  }
  if (q28 == "1" || q28 == 1) {
    cou++;
  }

  for (var i = 0; i < q3.length; i++) {
    if (q3[i].value == "1" && q3[i].checked == true) {
      cou++;
      break;
    }
  }
  for (var i = 0; i < q11.length; i++) {
    if (q11[i].value == "1" && q11[i].checked == true) {
      cou++;
      break;
    }
  }
  for (var i = 0; i < q15.length; i++) {
    if (q15[i].value == "1" && q15[i].checked == true) {
      cou++;
      break;
    }
  }

  for (var i = 0; i < q45.length; i++) {
    if (q45[i].value == "1" && q45[i].checked == true) {
      cou++;
    } else {
      if (q45[i].value == "0" && q45[i].checked == true) {
        cou--;
      }
    }
  }
  for (var i = 0; i < q20.length; i++) {
    if (q20[i].value == "1" && q20[i].checked == true) {
      cou++;
    } else {
      if (q20[i].value == "0" && q20[i].checked == true) {
        cou--;
      }
    }
  }
  for (var i = 0; i < q26.length; i++) {
    if (q26[i].value == "1" && q26[i].checked == true) {
      cou++;
    } else {
      if (q26[i].value == "0" && q26[i].checked == true) {
        cou--;
      }
    }
  }
  if (q999.selectedIndex.text == "Уокер") {
    cou++;
  }

  alert("Набрано " + cou + " баллов");
}
