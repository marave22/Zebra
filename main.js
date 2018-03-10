var boxselected = false;
var boxid = "";
function tableObjectClicked(id) {
    'use strict';
    boxid = id;
    boxselected = true;
}
function textObjClick(tid) {
    'use strict';
    if (!boxselected) {
        return;
    }
    document.getElementById(boxid).innerHTML = document.getElementById(tid).innerHTML;
    boxid = "";
    boxselected = false;
}
function check() {
    'use strict';
    var i, j, a, str, str1, allOk;
    allOk = true;
    for (i = 1; i < 5; i++) {
        for (j = 1; j < 5; j++) {
            a = (10 * i) + j;
            a = a.toString();
            console.log(a);
            console.log(document.getElementById(a));
            if (document.getElementById(a).innerHTML === "") {
                allOk = false;
            }
        }
    }
    if (!allOk) {
        alert("Hey do your job!");
        return;
    }
    str = "Water";
    str1 = "Zebra";
    if ((document.getElementById("51").innerHTML === str) && (document.getElementById("45"))){
        alert("Awesome!!!");
    }
    else {
        alert("Try Again!!!");
    }
}