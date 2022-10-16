let table = document.getElementById("personalTable");

let row1 = table.insertRow();
let row2 = table.insertRow();
let row3 = table.insertRow();
let row4 = table.insertRow();
let row5 = table.insertRow();

row1.insertCell().innerHTML = "1";
row1.insertCell().innerHTML = "<i class='bi bi-facebook'></i>";
row1.insertCell().innerHTML = "Facebook";
row1.insertCell().innerHTML = "<a href='https://www.facebook.com/' target='_blank'>https://www.facebook.com/</a>";
row1.insertCell().innerHTML = "<img src='https://picsum.photos/id/1/50/50'/>";

row2.insertCell().innerHTML = "2";
row2.insertCell().innerHTML = "<i class='bi bi-instagram'></i>";
row2.insertCell().innerHTML = "Instagram";
row2.insertCell().innerHTML = "<a href='https://www.instagram.com/' target='_blank'>https://www.instagram.com/</a>";
row2.insertCell().innerHTML = "<img src='https://picsum.photos/id/1022/50/50'/>";

row3.insertCell().innerHTML = "3";
row3.insertCell().innerHTML = "<i class='bi bi-youtube'></i>";
row3.insertCell().innerHTML = "YouTube";
row3.insertCell().innerHTML = "<a href='https://www.youtube.com/' target='_blank'>https://www.youtube.com/</a>";
row3.insertCell().innerHTML = "<img src='https://picsum.photos/id/1054/50/50'/>";

row4.insertCell().innerHTML = "4";
row4.insertCell().innerHTML = "<i class='bi bi-twitter'></i>";
row4.insertCell().innerHTML = "Twitter";
row4.insertCell().innerHTML = "<a href='https://www.twitter.com/' target='_blank'>https://www.twitter.com/</a>";
row4.insertCell().innerHTML = "<img src='https://picsum.photos/id/1055/50/50'/>";

row5.insertCell().innerHTML = "5";
row5.insertCell().innerHTML = "<i class='bi bi-snapchat'></i>";
row5.insertCell().innerHTML = "SnapChat";
row5.insertCell().innerHTML = "<a href='https://www.snapchat.com/' target='_blank'>https://www.snapchat.com/</a>";
row5.insertCell().innerHTML = "<img src='https://picsum.photos/id/1056/50/50'/>";

$(document).ready(function () {
    $("img").click(function () {
        window.open($(this).attr("src"));
    });
});

$(document).ready(function () {
    $("tr:odd").hover(
        function () {
            $(this).css("color", "red");
        },
        function () {
            $(this).css("color", "black");
        }
    );
});
