$(function(){
    //cart, detail 수량 증감
    $('.my_input button').click(function(){
        var input = $(this).parent().find('input');
        var inputV = parseInt(input.val());
        var inputMin = parseInt(input.attr('data-min'));
        var inputMax = parseInt(input.attr('data-max'));

        var down = $(this).hasClass('down');

        if (down) {
            inputV <= inputMin ? (inputV = inputMin) : inputV--;
        } else {
            inputV >= inputMax ? (inputV = inputMax) : inputV++;
        }
        $(this).parent().find('input').val(inputV);
    });

    //cart 목록에서 삭제하기
    $('.box .delete').click(function () {
    $(this).parents('li').remove();
    });

    //detail - wish
    $('#item .info .btn_wish').click(function(){
        $(this).toggleClass('on');
    });

    //고객평 more
    $('#detail .pr_review .btn_more').click(function(){
        alert('더 이상 리뷰가 없습니다.');
    });
});

//detail - add to cart
const added = document.getElementById('addBtn')

added.addEventListener("click", function(){
    if(added.innerText === 'ADD TO CART') {
        added.innerText = 'added!';
    } else added.innerText = 'ADD TO CART';
});
