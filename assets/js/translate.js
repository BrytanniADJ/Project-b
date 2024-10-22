window.addEventListener('DOMContentLoaded', () =>{
    let localLinguage = navigator.language || navigator.userLanguage; // Idioma preferido do Navegador
    console.log(navigator.languages.slice(0, 15)); // exibe idiomas

    while(localLinguage.length > 2){
        localLinguage = localLinguage.slice(0, -1); // Remove o último caractere enquanto a variável for > 2
    }
    
    console.log(`${localLinguage}`) // exibe idioma principal
    idioma(`${localLinguage}`) // passa para a função
});

const traducoes = {
    pt:{ // traduções pt-x
        texto1: "pt 1",
        texto2: "pt 2",
        texto3: "pt 3",
        texto4: "pt 4",
        texto5: "pt 5",
    },
    es:{ // -- es-x
        texto1: "es 1",
        texto2: "es 2",
        texto3: "es 3",
        texto4: "es 4",
        texto5: "es 5",
    },
    fr:{ // -- fr-x
        texto1: "fr 1",
        texto2: "fr 2",
        texto3: "fr 3",
        texto4: "fr 4",
        texto5: "fr 5",
    },
    en:{ // -- en-x
        texto1: "en 1",
        texto2: "en 2",
        texto3: "en 3",
        texto4: "en 4",
        texto5: "en 5",
    }
};

function idioma(lang){
    // pega todos os elementos da mesma classe .txt (todos) textos
    const elementos = document.querySelectorAll(".txt");

    elementos.forEach(elemento => {
        const key = elemento.getAttribute('data-key'); // Pega o valor da data-key
        elemento.textContent = traducoes[lang][key]; // aplica as traduções
    });
    document.getElementById("bandeira").src = `./assets/images/flaticon/${lang}_lang.png`;
}