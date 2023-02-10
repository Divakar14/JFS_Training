let stack1 = [];
let stack2 = [];

function enqueue(value){
    stack1.push(value);
}

function dequeue(){
    if(stack2.length == 0) for( ; (stack1.length > 0) ; ) stack2.push(stack1.pop());
    return stack2.pop();
}

enqueue(1);
enqueue(2);
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());