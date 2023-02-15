function concat(...arr) {
  
    var con = [];
  
    arr.forEach(function(i) { con = con.concat(i); });
  
    console.log(con);
}

concat([1 , 2 , 3] , [4 , 5] , [6 , 7]);

concat([1] , [2] , [3] , [4] , [5] , [6] , [7] , [8] , [9] , [10]);

concat([1 , 2] , [3 , 4]); 