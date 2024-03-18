//#
//# Vault - Main - Variables v1
//#
var version, gridCount, materialCount;
version = '1.8.1';
gridCount = '112';
materialCount = '0';

document.getElementById("websiteVersion").innerHTML = version;
document.getElementById("gridCount").innerHTML = gridCount;
document.getElementById("gridCount").title = 'Uncategorized: 34\nMap Labs Collection: 57\nLEGO Collection: 8\nSoftware Collection: 10' ;
document.getElementById("materialCount").innerHTML = materialCount;

a = document.getElementById("websiteVersion");
a.setAttribute("href", "https://theema-dev.github.io/highRES/help");

let c1 = "color:#fc1b5b; font-weight:bold; font-size:16px;"
let c2 = "color:#ff4177; font-weight:bold; font-size:15px;"
let c3 = "color:#ff719a; font-weight:bold; font-size:14px;"
let c4 = "color:#febacd; font-weight:bold; font-size:13px;"
let c5 = "color:#ffecf1; font-weight:bold; font-size:12px;"

console.log("‌");
console.log("%c 🆅🅻🆃 𝐕𝐀𝐔𝐋𝐓 " + version + " ", c1);
console.log("‌%c 🆅🆂🅴 Search Engine v3", c2);
console.log("‌%c 🆅🆂🅴 Filters v2", c3);
console.log("‌%c 🆅🆃🅴 Themes v1 ", c4);
console.log("‌%c 🆂🆃🆂 Grids: " + gridCount + " Assets: " + materialCount, c5);
console.log("‌");
