// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let answer = {};

    if (currency > 10000){
      answer["error"]="You are rich, my friend! We don't have so much coins for exchange";
    }
   else{
     if(Math.floor(currency/50) >0){
      answer["H"] = Math.floor(currency/50);
     currency = currency%50;
    }
     
    if(Math.floor(currency/25)>0){
      answer["Q"] = Math.floor(currency/25);
      currency = currency%25;
    }
    
      if(Math.floor(currency/10)>0){
      answer["D"] = Math.floor(currency/10);
      currency = currency%10;
    }
    
      if(Math.floor(currency/5)>0){
      answer["N"] = Math.floor(currency/5);
      currency = currency%5;
    }
    
    if(currency>0){
      answer["P"] = currency;
    }
  }

    return answer;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
