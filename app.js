const search = document.getElementById('search');
const submitbutton = document.getElementById('submitbtn');
const kg = document.getElementById('kg');
const cel = document.getElementById('cel');
const grams = document.getElementById('mg');
const centimeters = document.getElementById('centimeters');
const theul = document.getElementById('myUL');
const input = document.getElementById('input')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const answer = document.getElementById('answ');
const answerkg = document.getElementById('answkg');
const close = document.getElementById('close');
const mainsearch = document.getElementById('seachshit');


function thesearchfuntion() {
    var input, filter, ul, li, a, i, txtValue;
    input = search;
    filter = input.value.toUpperCase();

    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    theul.className = 'show';

}

function closethings() {
    theul.className = 'hide'

}


function convertkg() {
    let killogrames = prompt("Enter A the value To Convert");
    let convertvalue = killogrames * 1000;

    alert(convertvalue + ' G');
}

function convertintocel() {
    let cel = prompt("Enter The Celsius Value To Convert")
    let farenhite = (cel * 1.8) + 32;
    alert(farenhite + " F");
}

function gramsconvert() {
    let grams = prompt("Enter A the value To Convert");
    let convertvalue = grams / 1000;

    alert(convertvalue + ' KG');
}

function centimetersconv() {
    let centimeters = prompt("Enter The Value to Convert ")
    let ans = centimeters / 2.54;

    alert(ans + 'Inch');
}


//the new close thing wish me luck

function calculatekg() {
    let value = input.value;
    let ans = value / 1000;
    answer.innerHTML = ans + 'KG';
}

function closeme() {
    let closething = document.getElementById('grams');
    closething.classList = 'hidden';
    mainsearch.classList = 'search'
}

function addinggrams() {
    let closething = document.getElementById('grams');
    closething.classList = 'show';
    mainsearch.classList = 'hidden'
}

function addinggkg() {
    let closething = document.getElementById('kgs');
    closething.classList = 'show';
    mainsearch.classList = 'hidden'
}

function addinggkg() {
    let closething = document.getElementById('thisiskg');
    closething.classList = 'show';
    mainsearch.classList = 'hidden'
}

function kgdivclose() {
    let closething = document.getElementById('thisiskg');
    closething.classList = 'hidden';
    mainsearch.classList = 'search'
}

function pleasecalculate() {

    let value = input2.value;
    let ans = value * 1000;
    console.log(ans);
    answerkg.innerHTML = ans + ' g';
}


//celcious to farenhite

function celtioparenhite() {
    console.log('clicks')
    let thediv = document.getElementById('celtof');
    thediv.className = 'show'
    mainsearch.classList = 'hidden'
}


function closetheceltof() {
    let thediv = document.getElementById('celtof');
    thediv.className = 'hidden'
    mainsearch.classList = 'search'
}

function calculatectof() {
    let value = document.getElementById('input3').value;
    let thevaluebox = document.getElementById('answctof');
    let answ = (value * 9 / 5) + 32;
    thevaluebox.innerHTML = answ + '°F';
}

//centimeters in to inch
function displaycintoinc() {
    console.log('clicks')
    let thediv = document.getElementById('ctoincelement');
    thediv.className = 'show';
    mainsearch.classList = 'hidden';
}

function ctoincclose() {
    let thediv = document.getElementById('ctoincelement');
    thediv.className = 'hidden'
    mainsearch.classList = 'search'
}

function ctoinccal() {
    let value = document.getElementById('input4').value;
    let thevaluebox = document.getElementById('answctofcel');
    let answ = value / 2.54;
    thevaluebox.innerHTML = answ + ' Inch';

}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#theme").addEventListener("change", function() {
        applyTheme(this.value);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";

    applyTheme(savedTheme);

    for (const optionElement of document.querySelectorAll("#theme option")) {
        optionElement.selected = savedTheme === optionElement.value;
    }

    document.querySelector("#theme").addEventListener("change", function() {
        localStorage.setItem("theme", this.value);
        applyTheme(this.value);
    });
});

cel.addEventListener('click', convertintocel);
grams.addEventListener('click', gramsconvert);
centimeters.addEventListener('click', centimetersconv);
submitbutton.addEventListener('onkeyyup', thesearchfuntion);
//(°C * 1.8) + 32 = °F