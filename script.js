   var div=document.getElementById("myDiv");
    var form=document.getElementById("file");
    var left=document.getElementById("content");
    console.log(form);

      var show = function(){
        div.style.display = "flex";
        left.style.display="none";
        setTimeout(hide, 5000); // 5 seconds
      },

      hide = function(){
        div.style.display = "none";
        left.style.display="block";

      };

    show();