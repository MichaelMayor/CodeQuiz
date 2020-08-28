var homeBtn = document.getElementById("#home-button");
var resetBtn = document.getElementById("#reset-button");
var startBtn = document.getElementById("#start-button");
var tbody = document.getElementById('#tbody');
var timer = document.getElementById('#timer');


for (var i = 0; i < obj.length; i++) {
    var tr = "<tr>";

    /* Verification to add the last decimal 0 */
    if (obj[i].value.toString().substring(obj[i].value.toString().indexOf('.'), obj[i].value.toString().length) < 2) 
        obj[i].value += "0";

    /* Must not forget the $ sign */
    tr += "<td>" + obj[i].key + "</td>" + "<td>$" + obj[i].value.toString() + "</td></tr>";

    /* We add the table row to the table body */
    tbody.innerHTML += tr;
}