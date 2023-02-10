function reverseEachWord(s){
    return s.split(" ").map(i => i.split("").reverse().join("")).join(" ");
}

console.log(reverseEachWord(prompt()));