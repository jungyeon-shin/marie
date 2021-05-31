$(function(){
            
    var n= 0;
    $(".btn>li").eq(0).children("a").addClass("act")
    
    var time = setInterval (move,2500);
    pos = new Array("0","-700","-1400","-2100")
    
    function move(){
        
        
        $(".viewer").stop().animate({left : "-=700px"},1000,function(){
            $(".viewer").append($(".viewer li").first());
            dist_pos = pos.shift();
            $(".viewer").css("left","+=700px");
            pos.push(dist_pos)
        })
        
        
        $(".btn>li>a").removeClass("act")
        $(".btn>li").eq(n).find("a").addClass("act")


        
    }//move
    
    
    $(".btn a , .viewer").hover(function(){
        clearInterval(time)
    },function(){
        time = setInterval (slide,2500);
    })// $(".btn a").hover

    
    
    $(".btn a").click(function(){
        $(".btn>li>a").removeClass();
        $(this).addClass("act");
        
        n=$(this).parent().index()

        if(n == 0){
            $(".viewer").prepend($(".viewer li").eq(3));
            $(".viewer").stop().animate({left:"-700px" + "px" })
        }else if(n == 3 ){
            $(".viewer").append($(".viewer li").eq(0));
            $(".viewer").stop().animate({left:"-2400px" + "px" })
        }else{
            $(".viewer").stop().animate({left:pos=[n] + "px" })
        }
        
    })//$(".btn >a").click
    
    
    function slide(){
        if(n<3){
            n++;
        }else{
            n=0;
        }
        move()
    }//slide

    var toggle = true;

    $(".more").click(function(){
        
        $(".most_report , .more_box").slideToggle(1000);
//        if(toggle){
//            $(".most_report , .more_box").slideUp(1000)
//        }else{
//            $(".most_report , .more_box").slideDown(500)
//        }
//        toggle = !toggle
    })//
})//전체쿼리



// $(function(){

//     var n = 1;// 현재보여지는그림의 index넘버
//         var current = $(".round1")
//         current.addClass("on")

//     var time = setInterval(play , 2000);

    // function pass(){
        
    //     $(".hotissue").animate({left:"-=650px"},1800,function(){
    //         $(".hotissue").append($(".hotissue a").first())
    //         $(".hotissue").css("left", "+=650px")

    //     })

    // }//function pass

    // function play(){
    //     n= (n+1) % 4;
    //     current.removeClass("on");
    //     current=$(".round" + n)
    //     current.addClass("on")
    //     pass();
    // }//play

    // $(".hotissue , .round").hover(function(){
    //     clearInterval(time)
    // },function(){
    //     time = setInterval(play , 2000);
    // })
    
    // var toggle = true;

    // $(".more").click(function(){
    //     if(toggle){
    //         $(".most_report , .more_box").slideUp(1000)
    //     }else{
    //         $(".most_report , .more_box").slideDown(500)
    //     }
    //     toggle = !toggle
    // })//
    
    


// })//전체쿼리



