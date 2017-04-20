$(function (){
    function pageSize(){
        var pageH = $('body').height();
        var obj = ".download, .pContent"
        $(obj).css({
            '-webkit-transform':'scale(' + pageH / 1080 + ')',
            '-moz-transform':'scale(' + pageH / 1080 + ')',
            '-o-transform':'scale(' + pageH / 1080 + ')',
            'transform':'scale(' + pageH / 1080 + ')'
        })
    }
    pageSize();
    $(window).resize(function (){
        pageSize();
    })
    function resize(){
        $(".slide2 .phone img:nth-child(2)").removeClass('zoomIn');
        $(".slide2 .phone img:nth-child(3)").removeClass('zoomIn');
        $(".slide3 .phone span:nth-child(2)").removeClass('zoomIn');
        $(".slide3 .phone span:nth-child(3)").removeClass('zoomIn');
        $(".slide4 .phone img:nth-child(2)").removeClass('zoomIn');
        $(".slide4 .phone img:nth-child(3)").removeClass('zoomIn');
        $(".slide4 .phone img:nth-child(4)").removeClass('zoomIn');
        $(".slide4 .phone img:nth-child(5)").removeClass('zoomIn');
		$(".slide5 .phone img:nth-child(2)").removeClass('zoomIn');
        $(".slide5 .phone img:nth-child(3)").removeClass('zoomIn');
        $(".slide5 .phone img:nth-child(4)").removeClass('zoomIn');
        $(".slide5 .phone img:nth-child(5)").removeClass('zoomIn');
    }
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        resistanceRatio: 0,
        pagination: '.swiper-pagination',
        paginationClickable:true,
        mousewheelControl : true,
        onInit: function(slide){
            //初始化事件
        },
        onSlideChangeEnd: function(slide){
            //滑动完成事件
            resize();
            if(slide.activeIndex == 1){
                $(".slide2 .phone img:nth-child(2)").addClass('zoomIn');
                setTimeout(function (){
                    $(".slide2 .phone img:nth-child(3)").addClass('zoomIn');
                    setTimeout(function (){
                        $(".slide2 .phone img:nth-child(4)").addClass('zoomIn');
                        setTimeout(function (){
                            $(".slide2 .phone img:nth-child(5)").addClass('zoomIn');
                        },200)
                    },200)
                },200)
            }
            if(slide.activeIndex == 2){
                $(".slide3 .phone span:nth-child(2)").addClass('zoomIn');
                setTimeout(function (){
                    $(".slide3 .phone span:nth-child(3)").addClass('zoomIn');
                    setTimeout(function (){
                        $(".slide3 .phone span:nth-child(4)").addClass('zoomIn');
                        setTimeout(function (){
                            $(".slide3 .phone span:nth-child(5)").addClass('zoomIn');
                            setTimeout(function (){
                                $(".slide3 .phone span:nth-child(6)").addClass('zoomIn');
                            },200)
                        },200)
                    },200)
                },200)
            }
            if(slide.activeIndex == 3){
                $(".slide4 .phone img:nth-child(2)").addClass('zoomIn');
                setTimeout(function (){
                    $(".slide4 .phone img:nth-child(3)").addClass('zoomIn');
                    setTimeout(function (){
                        $(".slide4 .phone img:nth-child(4)").addClass('zoomIn');
                        setTimeout(function (){
                            $(".slide4 .phone img:nth-child(5)").addClass('zoomIn');
                        },200)
                    },200)
                },200)
            }
        
		if(slide.activeIndex == 4){
                $(".slide5 .phone img:nth-child(2)").addClass('zoomIn');
                setTimeout(function (){
                    $(".slide5 .phone img:nth-child(3)").addClass('zoomIn');
                    setTimeout(function (){
                        $(".slide5 .phone img:nth-child(4)").addClass('zoomIn');
                        setTimeout(function (){
                            $(".slide5 .phone img:nth-child(5)").addClass('zoomIn');
                        },200)
                    },200)
                },200)
			}
		}  
    })
})
