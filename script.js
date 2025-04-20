console.log("Script is runnig");
let container = document.querySelector(".container");
let p = document.querySelector("p");
const colorPalettes = [];
for (let i = 0; i < 100; i++) {
    const hue = i * 3.6; // Vary hue for 100 unique palettes
    const palette = [
        `hsl(${hue}, 100%, 50%)`, // Base color
        `hsl(${(hue + 30) % 360}, 100%, 50%)`, // Secondary color
        `hsl(${(hue + 60) % 360}, 100%, 50%)`, // Tertiary color
        `hsl(${(hue + 120) % 360}, 100%, 50%)` // Complementary color
    ];
    colorPalettes.push(palette);
}

        function changeBackground() {
            const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
            const randomColor = randomPalette[Math.floor(Math.random() * randomPalette.length)];
            document.body.style.backgroundColor = randomColor;
        }

async function main(){
    setInterval(() => {
        let last =  document.body.lastElementChild;
         if (last.innerHTML.endsWith("...")) {
          last.innerHTML = last.innerHTML.slice(0, innerHTML.length - 3);
         }
         else{
             last.innerHTML = last.innerHTML + ".";
         }
     },700)

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    })
}

let msg = ["Initializing Hacking",
    "Reading your files",
    "Sending your files to server",
    "Deleting your files",
    "Hacking your bank account",
    "Sending money to my account",
    "Done!"];

const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}
for (const item of msg) {
   await addItem(item);
}}

main();
setInterval(() => {
    changeBackground();
}, 1000);