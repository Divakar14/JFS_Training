// for each
['A','B','C'].forEach(function(elements){ console.log(elements)}) ;

//map
console.log( [1, 2, 3, 4, 5].map(number => number ** 2) ); 

// start with
console.log( ['Egypt','England','Newyork'].filter((country)=> country.startsWith("E")) );

//typeof
function getStringLists(arr) {
  const stringArray = arr.filter(item => typeof item === 'string');
  return stringArray;
} 
console.log(getStringLists([1, 'hello', true, 3, 'world']));

//reduce
var countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const sentence = countries.reduce((acc, curr, index) => {
  if (index === countries.length - 1) {
    return `${acc}, and ${curr} are north European countries.`;
  } else {
    return `${acc}, ${curr}`;
  }
});

console.log(sentence); 

// destruction
const constants = [2.71828, 3.14159, 9.81, 37, 100];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e); // 2.71828
console.log(pi); // 3.14159
console.log(gravity); // 9.81
console.log(humanBodyTemp); // 37
console.log(waterBoilingTemp); // 100

//count of country names initial value 
console.log("count of country names initial value : ");
const arr6=["India","Indonesia","Iceland","Ireland","Australia","Japan"];
var m = 0;
var mc = '#';
var alph={
 a:[],b:[],c:[],d:[],e:[],f:[],g:[],h:[],i:[],j:[],k:[],l:[],m:[],n:[],o:[],p:[],q:[],r:[],s:[],t:[],u:[],v:[],w:[],x:[],y:[],z:[]
}

arr6.forEach(function (v){
    alph[v[0].toLowerCase()].push(v);
    if(m < alph[v[0].toLowerCase()].length){
        m = alph[v[0].toLowerCase()].length;
        mc = v[0].toLowerCase();
    }
})
console.log(alph[mc]+"\n");

//Q9
var set1 = new Set();
console.log(set1);

// /Q10.
set1 = new Set();
for (var i=0;i<=10;i++) set1.add(i); 
console.log(set1);

// Q11.
set1 = new Set();
for (var i = 0; i <= 10; i++) set1.add(i);
console.log(set1);
set1.delete(10);
console.log(set1);

// Q12.
set1 = new Set();
for (var i=0;i<=10;i++) set1.add(i); 
console.log(set1);
set1.clear()
console.log(set1);

// Q13.
const res = new Set(["Alice", "Bob", "Charlie", "Dave", "Eric"]);
console.log(res);

//Q14.
names = { Alice: 5, Bob: 3, Charlie: 6, Dave: 4, Eric: 4};
console.log(names);

// Q15.
var a = [4, 5, 8, 9];
var b = [3, 4, 5, 7];
var A = new Set(a);
var B = new Set(a);
union = Array.from(a.concat(b));
console.log(union);

// Q16.
a = [4, 5, 8, 9];
b = [3, 4, 5, 7];
A = new Set(a);
B = new Set(b);
c = [...a, ...b];
console.log(new Set(c));

// Q17.
a = [4, 5, 8, 9];
b = [3, 4, 5, 7];
A = new Set(a);
B = new Set(b);
c = a.filter((num) => B.has(num));
console.log(new Set(c));

// Q18.
a = [4, 5, 8, 9];
b = [3, 4, 5, 7];
A = new Set(a);
B = new Set(b);
c = a.filter((num) => !B.has(num));
console.log(new Set(c))