var black = document.getElementById("black");
var popup = document.querySelector(".pop");
var add = document.querySelector(".ADD");
var exit = document.querySelector(".E");
var red = document.getElementById("red");
var result = document.querySelector(".rst");

add.addEventListener("click", function() {
    black.style.display = "block";
    popup.style.display = "block";
});

exit.addEventListener("click", function() {
    black.style.display = "none";
    red.style.display = "none";
    result.style.display = "none";
    exit.style.display = "none";
});

function VIEW(title, content) {
    red.style.display = "block";
    result.style.display = "block";
    exit.style.display = "block";
    P1.textContent = title;
    P2.textContent = content;
}

var P1 = document.querySelector(".p1");
var P2 = document.querySelector(".p2");
var n1 = document.querySelector(".N1");
var n2 = document.querySelector(".N2");
var mainContainer = document.querySelector(".main1");

document.querySelector(".S").addEventListener("click", function() {
    var title = n1.value;
    var content = n2.value;

    var Div = document.createElement("div");
    Div.setAttribute("class", "main");
    Div.innerHTML = `
        <h5>Welcome To Notes</h5>
        <h3 class="add1">${title}</h3>
        <button class="view">View</button>
    `;
    var nnn=Div.querySelector(".add1")
    nnn.style.opacity="1"
    
    Div.querySelector(".view").addEventListener("click", function() {
        VIEW(title, content);
    });

    mainContainer.appendChild(Div);
    black.style.display = "none";
    popup.style.display = "none";
    n1.value = "";
    n2.value = "";
});

document.querySelector(".D").addEventListener("click", function() {
    black.style.display = "none";
    popup.style.display = "none";
    n1.value = "";
    n2.value = "";
});
