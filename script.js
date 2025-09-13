let listcontainer = document.querySelector("#list");
let inputnote = document.querySelector("#text-note");
let addnote = document.querySelector("#add-note");

// add btn
function addedNote () {
    if (inputnote.value == "") {
        return
    }
    let cards = document.querySelectorAll(".card")
    if (cards.length >= 5) {
        return
    }
    listcontainer.appendChild(createListCard(inputnote.value))
    inputnote.value = ""
}

// create card
function createListCard (value) {
    let card = document.createElement("div");
    let title = document.createElement("input");
    let text = document.createElement("div");
    let btnnote = document.createElement("div");
    let edite = document.createElement("button");
    let del = document.createElement("button");
    card.className = "card";
    title.className = "card-title" ;
    title.setAttribute("placeholder" , "title");
    text.className = "card-content";
    text.innerText = value
    btnnote.className = "card-actions";
    edite.className = "btn";
    edite.innerText = "Edite";
    del.className = "delete";
    del.innerText = "Delete";
    del.style.marginLeft = "4px"
    btnnote.appendChild(edite);
    btnnote.appendChild(del);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(btnnote);
    // remove card
    del.addEventListener("click" ,() => {
        card.remove();
    })
    // edite card
    edite.addEventListener("click" , () => {
        let input = document.createElement("textarea");
        input.style.width = "230px";
        input.style.height = "70px";
        input.style.background = "linear-gradient(to left, #cbd5e1, #f1f5f9)";
        input.style.outline = "none";
        input.style.border = "none";
        input.style.fontSize = "15px";
        input.value = text.innerText;
        card.replaceChild(input,text);

        input.addEventListener("blur" , () => {
            text.innerText = input.value;
            card.replaceChild(text,input);
        })

        input.addEventListener("keypress" , (e) => {
            if (e.key == "Enter") {
                text.innerText = input.value;
                card.replaceChild(text,input)
            }
        })
    })
    return card;
}