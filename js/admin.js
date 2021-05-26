$("document").ready(function(){
   $(".firstSection .custom .chPrice").on("click",function(){
       
       $(".firstSection .custom input[data-number ='" + $(this).attr("data-number") + "']").fadeToggle();
   })
   
   $(".firstSection .custom input").on("keyup",function(){
       console.log( $(this).attr("data-number"))
    $(".boxes .price .number[data-number ='" + $(this).attr("data-number") + "']").text($(this).val());
    })

    

   $(".firstSection .custom .chColors").on("click",function(){
    $(".firstSection .custom .colors[data-number ='" + $(this).attr("data-number") + "']").fadeToggle();
     })

   $(".firstSection .custom .colors div").on("click",function(){
      $(".firstSection .boxes .sentence .paragraph[data-number ='" + $(this).attr("data-number") + "']").css({
          color:$(this).attr("data-color")
      })
})
})