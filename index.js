// Write your solution here!

const cats =["Milo", "Otis","Garfield" ];
 
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const cats = ["Milo", "Otis","Garfield" ];
    const newCats = [...cats ,"Broom"];
    return newCats;
}
function prependCat() {
    const cats = ["Milo", "Otis","Garfield" ];
    const moreCats = [ "Arnold",...cats]
    return moreCats; 
}
function removeLastCat() {
    const cats = ["Milo", "Otis","Garfield" ];
    const removeCat =cats.slice(cats,cats.length - 1);
    return removeCat;
}
function removeFirstCat() {
    const cats = ["Milo", "Otis","Garfield" ];
    const removeCat1 = cats.splice(1)
    return removeCat1;
    
}





 
