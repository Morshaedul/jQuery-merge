$(document).ready(function() {
    $("button").click(function() {
    var arr1 = [ "Welcome", "to", "the" ];  
    var arr2 = [ "javaTpoint", ".", "com" ];
    $( "#p1" ).append( JSON.stringify( arr1 ));
    $( "#p2" ).append( JSON.stringify( arr2 ));
    $.merge( arr1, arr2 );
    $( "#p3" ).append( JSON.stringify( arr1 ));
    });
    });






























// document.querySelector('h1').classList.add("para1")

// $('h1').css({'color':'red',
//             'font-style':'bold',
//             "background-color": "black",
//             "font-size": "60px"

// });

// button click  function:
// document.querySelector('button').addEventListener('click', function(e) {
//     document.querySelector("h1").innerHTML="Button is clicked."
// })

// same working below this code 

// $('button').click( function() {
//     $("h1").toggleClass('para1 button');
// })

// var num1=parseInt(prompt("Enter your second  value"))
// var num2=parseInt(prompt("Enter your second  value"))
// $('#btn').click( function() {
//     function add(num1, num2) {
//         v=num1+num2;
//         return v;
//     }
//     var n= add(num1, num2);
//     document.write(n)
// })
// $('#btn').click(function(e) {
//     $('#btn').css('background',"black")
//     $('#btn').css('color',"red")
// })
// $("#click_btn").click(function(e) {
//     $('#click_btn').css('background',"black")
//     $('#click_btn').css('color','red')
// })

// $("#click_btn").click(function(e) {
//     $('#click_btn').css('background',"black")
//     $('#click_btn').css('color','red')
// })




