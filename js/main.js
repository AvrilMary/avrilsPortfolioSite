// Selection of Global Variable //

const navigation = document.querySelector(".nav-list");
console.log(navigation);

const menuIcon = document.querySelector(".fas fa-bars")
console.log(menuIcon);
const exit = document.querySelector(".fas fa-times")




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

  //Replace Text function	Word 2	 
$(function word2 () { 
    count = 0; 
    wordsArray2 = ["🫖", "🥛", "🍹"]; 
    setInterval(function () { 
      count++; 
      $("#word2").fadeOut(500, function () { 
        $(this).text(wordsArray2[count % wordsArray2.length]).fadeIn(500); 
      }); 
    }, 2000); 
  }); 

//End Text Function Word 2 