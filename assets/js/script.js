//Le E
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(140, 100);
ctx.lineTo(50, 100);
ctx.lineTo(50, 300);
ctx.lineTo(140, 300);
ctx.moveTo(50, 200);
ctx.lineTo(140, 200);
ctx.lineWidth = "5";
ctx.strokeStyle = "#000000";
ctx.stroke();
//Le 2
var d = document.getElementById("myCanvas");
var dtx = d.getContext("2d");
dtx.beginPath();
dtx.moveTo(140, 100);
dtx.quadraticCurveTo(500,-110,110,350);
dtx.moveTo(110, 350);
dtx.quadraticCurveTo(250, 310, 250, 320);
dtx.lineWidth = "13";
dtx.strokeStyle = "#EA4E1D";
dtx.stroke();
//Le N
var n = document.getElementById("myCanvas");
var ntx = n.getContext("2d");
ntx.beginPath();
ntx.moveTo(300, 300);
ntx.lineTo(300, 100);
ntx.moveTo(300, 100);
ntx.lineTo(420, 300);
ntx.moveTo(420, 300);
ntx.lineTo(420, 100);
ntx.lineWidth = "5";
ntx.strokeStyle = "#000000";
ntx.stroke();
//Le texte
var t = document.getElementById("myCanvas");
var ttx = t.getContext("2d");
ttx.beginPath();;
ttx.font = "20pt Calibri,Geneva,Arial";
ttx.strokeStyle = "#DBDADB";
ttx.fillStyle = "#DBDADB";
ttx.fillText("École du Numérique", 300, 330);
ttx.fillText("du Noyonnais", 300, 360);
ttx.fill();
//Les losanges
var l = document.getElementById("myCanvas");
var ltx = l.getContext("2d");
ltx.beginPath();
ltx.moveTo(510, 100);
ltx.lineTo(500, 110);
ltx.lineTo(500, 120);
ltx.lineTo(510, 130);
ltx.lineTo(520, 120);
ltx.lineTo(520, 110);
ltx.lineTo(510, 100);
ltx.strokeStyle = "#DBDADB";
ltx.stroke();
ttx.fillStyle = "#DBDADB";
ttx.fill();
// L2
var l = document.getElementById("myCanvas");
var ltx = l.getContext("2d");
ltx.beginPath();
ltx.moveTo(490, 140);
ltx.lineTo(480, 150);
ltx.lineTo(480, 160);
ltx.lineTo(490, 170);
ltx.lineTo(500, 160);
ltx.lineTo(500, 150);
ltx.lineTo(490, 140);
ltx.strokeStyle = "#DBDADB";
ltx.stroke();
ttx.fillStyle = "#DBDADB";
ttx.fill();
//L3 gris foncé
var l = document.getElementById("myCanvas");
var ltx = l.getContext("2d");
ltx.beginPath();
ltx.moveTo(530, 140);
ltx.lineTo(520, 150);
ltx.lineTo(520, 160);
ltx.lineTo(530, 170);
ltx.lineTo(540, 160);
ltx.lineTo(540, 150);
ltx.lineTo(530, 140);
ltx.strokeStyle = "#595656";
ltx.stroke();
ttx.fillStyle = "#595656";
ttx.fill();
//L4 orange
var l = document.getElementById("myCanvas");
var ltx = l.getContext("2d");
ltx.beginPath();
ltx.moveTo(510, 170);
ltx.lineTo(500, 180);
ltx.lineTo(500, 190);
ltx.lineTo(510, 200);
ltx.lineTo(520, 190);
ltx.lineTo(520, 180);
ltx.lineTo(510, 170);
ltx.strokeStyle = "#EA4E1D";
ltx.stroke();
ttx.fillStyle = "#EA4E1D";
ttx.fill();
//L5
var l = document.getElementById("myCanvas");
var ltx = l.getContext("2d");
ltx.beginPath();
ltx.moveTo(490, 200);
ltx.lineTo(480, 210);
ltx.lineTo(480, 220);
ltx.lineTo(490, 230);
ltx.lineTo(500, 220);
ltx.lineTo(500, 210);
ltx.lineTo(490, 200);
ltx.strokeStyle = "#878787";
ltx.stroke();
ttx.fillStyle = "#878787";
ttx.fill();
//L6
var l = document.getElementById("myCanvas");
var ltx = l.getContext("2d");
ltx.beginPath();
ltx.moveTo(530, 200);
ltx.lineTo(520, 210);
ltx.lineTo(520, 220);
ltx.lineTo(530, 230);
ltx.lineTo(540, 220);
ltx.lineTo(540, 210);
ltx.lineTo(530, 200);
ltx.strokeStyle = "#ECECEC";
ltx.stroke();
ttx.fillStyle = "#ECECEC";
ttx.fill();
//Le petit L
