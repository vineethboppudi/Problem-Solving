/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

function longsstr(){


    var str = ["filower","flow","flight"];

    if (str.length ==0){
        console.log("no string in array");

    }

    let ans = str[0];
    for (let i =0; i<str.length; i++){
        while(str[i].indexOf(ans) !==0 ){
            ans = ans.substring(0, ans.length - 1 );
            if (ans === ''){
                console.log("nothing")
            }
        }
    }
    console.log(ans)

}
longsstr()
//indexof(), substring()