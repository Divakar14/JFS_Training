function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
      return false;
    }
    let freq1 = {};
    let freq2 = {};
    for (let i of string1) freq1[i] = (freq1[i] || 0) + 1;
    for (let i of string2) freq2[i] = (freq2[i] || 0) + 1;
    for (let i in freq1) {
      if (!(i in freq2)) return false;
      if (freq1[i] !== freq2[i]) return false;
    }
    return true;
  }
  
  
  var s1 = prompt();
  var s2 = prompt();
  
  console.log(isAnagram(s1.toLowerCase(),s2.toLowerCase()));