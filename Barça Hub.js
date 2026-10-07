const btnEntrar = document.getElementById("btnEntrar");
const btnAvancar = document.getElementById("btnAvancar");

if (btnEntrar) {
    btnEntrar.addEventListener("click", function() {
        window.location.href = "Barça Lobby.html";
    });
}

if (btnAvancar) {
    btnAvancar.addEventListener("click", function() {
        window.location.href = "Barça Lobby.html";
    });
}

const laLiga = document.getElementById("laLiga");
const champions = document.getElementById("champions");
const supercup = document.getElementById("supercup");
const intercontinental = document.getElementById("intercontinental");

const telaTitulo = document.getElementById("telaTitulo");
const tituloNome = document.getElementById("tituloNome");
const anosTitulo = document.getElementById("anosTitulo");
const fecharTitulo = document.getElementById("fecharTitulo");

const titulos = {
    "La Liga": [
        1929,
        1945,
        1948,
        1949,
        1952,
        1953,
        1959,
        1960,
        1974,
        1985,
        1991,
        1992,
        1993,
        1994,
        1998,
        1999,
        2005,
        2006,
        2009,
        2010,
        2011,
        2013,
        2015,
        2016,
        2018,
        2019,
        2023,
        2025
    ],

    "Champions League": [
        1992,
        2006,
        2009,
        2011,
        2015
    ],

    "UEFA SuperCup": [
        1992,
        1997,
        2009,
        2011,
        2015
    ],

    "FIFA Club World Cup": [
        2009,
        2011,
        2015
    ]
};

function mostrarTitulo(nome) {

    tituloNome.textContent = nome;

    anosTitulo.innerHTML = "";

    titulos[nome].forEach(function(ano) {

        const elemento = document.createElement("span");

        elemento.classList.add("ano");

        elemento.textContent = ano;

        anosTitulo.appendChild(elemento);

    });

    telaTitulo.style.display = "flex";
}

if (laLiga) {
    laLiga.addEventListener("click", function() {
        mostrarTitulo("La Liga");
    });
}

if (champions) {
    champions.addEventListener("click", function() {
        mostrarTitulo("Champions League");
    });
}

if (supercup) {
    supercup.addEventListener("click", function() {
        mostrarTitulo("UEFA SuperCup");
    });
}

if (intercontinental) {
    intercontinental.addEventListener("click", function() {
        mostrarTitulo("FIFA Club World Cup");
    });
}

if (fecharTitulo) {
    fecharTitulo.addEventListener("click", function() {
        telaTitulo.style.display = "none";
    });
}

if (telaTitulo) {
    telaTitulo.addEventListener("click", function(event) {

        if (event.target === telaTitulo) {
            telaTitulo.style.display = "none";
        }

    });
}
