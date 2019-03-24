// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money = {};

    if (currency > 10000){
      money["error"]="You are rich, my friend! We don't have so much coins for exchange";
    }
   else{
     if(Math.floor(currency/50) >0){
      money["H"] = Math.floor(currency/50);
     currency = currency%50;
    }
     
    if(Math.floor(currency/25)>0){
      money["Q"] = Math.floor(currency/25);
      currency = currency%25;
    }
    
      if(Math.floor(currency/10)>0){
        money["D"] = Math.floor(currency/10);
      currency = currency%10;
    }
    
      if(Math.floor(currency/5)>0){
        money["N"] = Math.floor(currency/5);
      currency = currency%5;
    }
    
    if(currency>0){
      money["P"] = currency;
    }
  }

    return money;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
