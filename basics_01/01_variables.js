const accountId = 144553
let accountEmail = "mdkaif@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


//accountId = 2 // not allowed

/*
Perefer Not to use var
Because of issue in block scope and functional scope
*/
accountEmail = "hc@hc.com"
accountPassword = "221425"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
