document.addEventListener("DOMContentLoaded", function(event) {
	
    let targetImage = document.querySelector("#smart-image1");
	
	
    targetImage.addEventListener("click", function() {
        if (targetImage.classList.contains("small")) {
            targetImage.classList.remove("small");
        }else{
            targetImage.classList.add("small");        
        }
    });
	
 });
 
 document.addEventListener("DOMContentLoaded", function(event) {
 	
     let targetImage = document.querySelector("#smart-image2");
 	
     targetImage.addEventListener("click", function() {
         if (targetImage.classList.contains("small")) {
             targetImage.classList.remove("small");
         }else{
             targetImage.classList.add("small");        
         }
     });
 	
  });
  document.addEventListener("DOMContentLoaded", function(event) {
  	
      let targetImage = document.querySelector("#smart-image3");
  	
      targetImage.addEventListener("click", function() {
          if (targetImage.classList.contains("small")) {
              targetImage.classList.remove("small");
          }else{
              targetImage.classList.add("small");        
          }
      });
  	
   });
