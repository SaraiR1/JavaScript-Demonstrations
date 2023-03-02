// created an array to hold each coin value
// made c equal the length of the array
let coins=[20, 10, 5, 2, 1];
let c = coins.length; 
function minCoins(tokens)
{
    // numTokens is an array that will hold the minimum number of tokens 
        let numTokens = [];
        let ans = ""
        // this for loop goes through each value in the coins array
        for (let num = 0; num < c; num++)
        {
            // after tokens get divided from each coin, ans will hold the quotient
            ans = tokens / coins[num];
            // the quotient will be pushed into the numTokens array
            numTokens.push(parseInt(ans));
            // use the modulus operator to get the remainder 
            tokens %= coins[num];
            
        }
        
        // created an unordered list to neatly display the values
        document.write("<ul>")
        // this for loop prints out the values in the numTokens and coins array
        for (let num = 0; num < numTokens.length; num++)
        {
            document.write(`<li> ${numTokens[num]} X ${coins[num]}</li>`)
        }
        document.write("</ul>")
        
}

// numCoin stores the number the user enters in the prompt
numCoin = parseInt(prompt('Enter a number from 20-100'));
// if the number the user entered is above 100 or less than 20, then the web page will say invalid number
if (numCoin > 100 || numCoin < 20 || isNaN(numCoin))
{
    document.write("<p> invalid number </p>");
} else 
{   
    document.write("<p>");
    document.write("Tokens: <br>")
    // this enters the number into the minCoins function in order to get the minimum number of tokens 
    minCoins(numCoin);
    document.write(`will result in ${numCoin}`);
    document.write("</p>");
}
