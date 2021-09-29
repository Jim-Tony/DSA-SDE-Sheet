/**
 * @Author Jim Tony
 * @Space_Complexity O(N)
 * @Time_Complexity O(N*N)
 * @param {string} s
 * @return {number}
 */
 var isPalind = function(str,st,end){
    while(st<end){
        if(str[st++]!=str[end--]) return false;
    }  
      return true;
  };
  var helper = function(str,i,j,memo={}){
      let key = i+','+j;
      if(i>=j) return 0;
      if(key in memo) return memo[key];
      if(isPalind(str,i,j)) return memo[key] = 0;
      let ans = Number.MAX_SAFE_INTEGER;
      for(let cur = i;cur<j;cur++){
          if(isPalind(str,i,cur)===false) continue;
          let tmp = helper(str,i,cur,memo)+helper(str,cur+1,j,memo)+1;
          ans = Math.min(ans,tmp);
      }
      return memo[key] = ans;
  };
  var minCut = function(s) {
    let n = s.length;
    return helper(s,0,n-1);
  };

  const string = "aab";
  console.log(minCut(string));