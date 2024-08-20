
                            // Counter

// let number=0;

// function count(){
//     if(number<20){
//         number= number+1;
//     }
//     else{
//         console.log(number);
//         alert('more than 20 not allowed');
//         number=0;
//     }
//     document.getElementById('number').innerHTML=number;
// }
// document.getElementById('btn').addEventListener('click', count);

                    // Chnage color on click

// var index=0;
// let text= ['blue color', 'green color', 'red color', 'orange color', 'yellow color'];
// var indexoftext=0;

function colorchange(){
    var colors=['blue','green','red','orange','yellow'];
    document.getElementsByTagName("body")[0].style.backgroundColor=colors[index++];
    text[indexoftext++];
    if(index>colors.length-1)
        index=0;
}
