function isLowerCase(str) {
    return str === str.toLowerCase();
}

var s = prompt().split(".");

let l = s.length;

if(l==1|| s[0].length>1) console.log("false");

else if(isLowerCase(s[s.length-1].charAt(0))) console.log("false");

else if((s[0].length>=1 && isLowerCase(s[0]))) console.log("false");

else if((s[1].length!=1 || (s[1].length==1 && isLowerCase(s[1].charAt(0)))) && s.length>=3) console.log("false");

else console.log("true");