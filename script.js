$(document).ready(function(){

    let count=0;
    let length=$(".images").children().length;
    $(".images").width(`${length*100}%`);
    let width=$(".images").width();
    $(".image .item").width(`${width/length}`);


    $(".right").click(rightClick)

   let interval=setInterval(rightClick,3000)

    $(".left").click(function(){
       count--;
       if(count>=0){
           $(".images").animate({
               "margin-left":`-${count*100}%`
           })
       }else{
        count=length-1;
        $(".images").animate({
           "margin-left":`-${count*100}%`
       })

       }
    })

    function rightClick(){
        count++;
        if(count<=length-1){
            $(".images").animate({
                "margin-left":`-${count*100}%`
            })
        }else{
         count=0;
         $(".images").animate({
            "margin-left":`-${count*100}%`
        })

        }
            
        
    }

    $(document).on("mouseenter",".right",function(){
      clearInterval(interval)
      
    })
    $(document).on("mouseleave",".right",function(){
        setInterval(rightClick,3000)
      })
    })