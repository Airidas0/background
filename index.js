
let uppercaseletters = "ABCDEF";
let numbers = "0123456789";
let hexcode = uppercaseletters + numbers;
let body = document.getElementById("body");
let result = document.getElementById("hexcode");
let copybutton = document.getElementById("copy");


function generatehexcode(){
    let hex = "";
    for(let i = 0; i < 6; i++){
        const randomindex = Math.floor(Math.random() * hexcode.length);
        hex += hexcode[randomindex];
    }
    body.style.backgroundColor = `#${hex}`;
    result.textContent = `Hex code: #${hex}`;
    
}
function copy(){
    const textarea = document.createElement("textarea");
    textarea.value = result.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Copied to clipboard");
}
