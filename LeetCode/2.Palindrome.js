/*

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

function Palindrome (){
var x = 121;
var y = x.toString().split('').reverse().join('')
//console.log(y)
if ( y == x ){
    console.log('true')
}else{
    console.log('false')
}
}
Palindrome()
