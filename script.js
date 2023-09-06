function eventManager(){
    console.log("Ola");
    var areas = document.getElementsByClassName("card");
    for(var i = 0; i < areas.length; i++) {
        (function(index) {
            areas[index].addEventListener("click", function() {
                var anchor = document.createElement('a');
                anchor.href = 'https://api.whatsapp.com/send?phone=5511995302558';
                anchor.target="_blank";
                anchor.click();
                //window.location.href = '';
           })
        })(i);
      }
}


document.addEventListener("DOMContentLoaded", eventManager, false);

