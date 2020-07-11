
function copyToClipboard(obj){
    let copyText = document.getElementById("text-field");
    obj.select();
    document.execCommand("Copy");
}

function toLowerCase(obj){
    let inputString = obj.value;
    let outputString = inputString.toLowerCase();
    obj.value = outputString;
}

function toUpperCase(obj){
    let inputString = obj.value;
    let outputString = inputString.toUpperCase();
    obj.value = outputString;
}

function inicialEmMaiuscula(obj){
    let inputString = obj.value;
    let outputString = inputString.replace(/\w\S*/g, 
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
    obj.value = outputString;
}

function toSentenceCase(obj){
    let inputString = obj.value;    
    let outputString = inputString.replace(/\w[^.]*/g, 
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
    obj.value = outputString;
}

function textAreaAdjust(obj) {
    obj.style.height = "100px";
    obj.style.height = (obj.scrollHeight)+"px";
}

function countChar(obj){
    document.getElementById("counter-char").innerHTML = "qtd de caracteres: "+obj.value.length+"/10000";
    if(obj.value.length >= 10000){
        document.getElementById("counter-char").style.color = "#c71c38";
        document.getElementById("counter-char").style.fontWeight = "bold";
    } else {
        document.getElementById("counter-char").style.color = "#999";
        document.getElementById("counter-char").style.fontWeight = "normal";
    }
}

function countWord(obj){
    let reg = /\w+/g;
    document.getElementById("counter-word").innerHTML = "qtd palavras: "+obj.value.match(reg).length;
}


