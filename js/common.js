$(function(){

    // gnb
    $('.main > li').hover(
        function(){
            $(this).children('.sub').stop().css({'visibility':'visible'});
        },
        function(){
            $(this).children('.sub').stop().css({'visibility':'hidden'});
        }
    );

    //scroll animation
    window.onscroll = function(){scrollFunction()};
    function scrollFunction() {
        if(document.body.scrollTop > 290 ||
            document.documentElement.scrollTop > 290){
                document.getElementById('navbar').style.top = '0';
                document.getElementById('btn_top').style.bottom = '60px';
            } else {
                document.getElementById('navbar').style.top = '-80px';
                document.getElementById('btn_top').style.bottom = '-100px';
            }
    }

    $("#btn_top").click(function() {   
        $('html, body').animate({
          scrollTop : 0
         }, 500);
         return false;
         });

    
    //account settings pop-up
    // 팝업 열기 
    $('.direct_nav ul li.acc, #navbar .direct .nav_acc').click(function(){
        $('.ac_wrap, .login').fadeIn(400);
    })
    $('.btn_close').click(function(){
        $('.ac_wrap, #account > div').fadeOut(400);
    });

	// 팝업 스크롤 막기
	$('.ac_wrap, #modal').on('scroll touchmove mousewheel', function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
	});


    $('.forgot').click(function(){
        $('.login').hide();
        $('.findpw').show();
    });
    $('.btn_join').click(function(){
        $('.login').hide();
        $('.signup').show();
    });
    $('.btn_relogin').click(function(){
        $('.signup').hide();
        $('.login').show();
    });
    $('.btn_white').click(function(){
        $('.findpw').hide();
        $('.login').show();
    });

    $('.btn_black').click(function(e){
        e.preventDefault();
    });

    $('.btn_send').click(function(){
        $('.btn_white').fadeIn(500);
    });
 
});
