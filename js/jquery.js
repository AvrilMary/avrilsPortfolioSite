$(document).ready(function() {


//Replace Text function	Word 1	 
$(function word1 () { 
    count = 0; 
        wordsArray1 = ["kiwi 🇳🇿.", "nature lover 🌳.", "foodie 🥘.", "bookworm 📚🪱.", "swimmer 🏊‍♀️." ]; 
        setInterval(function () { 
          count++; 
          $("#word1").fadeOut(500, function () { 
            $(this).text(wordsArray1[count % wordsArray1.length]).fadeIn(500); 
          }); 
        }, 2000); 
      }); 
      //End Replace Text function


    });
    
    //End Text Function Word 2 