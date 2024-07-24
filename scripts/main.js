


$(document).ready(function() {
    var $carousel = $('#carouselExampleFade');
    var interval = 3000; // Interval in milliseconds (1 second)

    // Initialize carousel without auto sliding
    $carousel.carousel({
        interval: false // Disable Bootstrap's automatic sliding
    });

    // Function to move to the next slide
    function slideNext() {
        $carousel.carousel('next');
    }

    // Set interval to slide every 1 second
    setInterval(slideNext, interval);
});


$(document).on('mouseover','.nav-logo',function(){
    $(this).attr('src','img/Asset 3.png')
})
$(document).on('mouseleave','.nav-logo',function(){
    $(this).attr('src','img/Asset 4.png')
})
$(document).on('mouseover','.item-cont',function(){
    $(this).children('.item-img').css('opacity', '0');
    $(this).children('.sec-item-img').css('opacity', '1');
    $(this).find('.like-item').fadeIn(1000);
    $(this).find('.item-info').fadeIn(1000);
})
$(document).on('mouseleave','.item-cont',function(){
    $(this).children('.item-img').css('opacity', '1');
    $(this).children('.sec-item-img').css('opacity', '0');
    $(this).find('.like-item').fadeOut();
    $(this).find('.item-info').fadeOut();
    $('.quick-add-div').slideUp()
    $('.quick-add-btn').removeClass('quick-add-to-cart-btn')
    $('.quick-add-btn').text('Quick Add')
})
$(document).on('mouseover','.like-item',function(){
    $(this).children('.fa-heart').removeClass('fa-regular');
    $(this).children('.fa-heart').addClass('fa-solid');
    $(this).children('.fa-heart').removeClass('text-dark');
    $(this).children('.fa-heart').addClass('text-danger');
})
$(document).on('mouseleave','.like-item',function(){
    $(this).children('.fa-heart').addClass('fa-regular');
    $(this).children('.fa-heart').removeClass('fa-solid');
    $(this).children('.fa-heart').addClass('text-dark');
    $(this).children('.fa-heart').removeClass('text-danger');
})
$(document).on('click','.quick-add-btn',function(){
    $(this).prev().slideDown()
    $(this).addClass('quick-add-to-cart-btn')
    $(this).attr({
        'data-bs-toggle': '',
        'data-bs-target': '',
        'aria-controls': ''
    });
    $(this).text('Add Item')
})
$(document).on('click','.colse-quick-icon',function(){
    $(this).parent().parent().slideUp()
    $('.quick-add-btn').text('Quick Add')
    $('.quick-add-btn').attr({
        'data-bs-toggle': '',
        'data-bs-target': '',
        'aria-controls': ''
    });
    $('.quick-add-btn').removeClass('quick-add-to-cart-btn')
})
$(document).on('click','.quick-size-span',function(){
    $(this).toggleClass('quick-size-span-active')
})
$(document).on('click','.quick-color-span',function(){
    $(this).toggleClass('quick-color-span-active')
})
$(document).ready(function() {
    $(document).on('click','.quick-add-to-cart-btn', function() {
        var $selectedSize = $('.quick-size-span.quick-size-span-active');
        var $selectedColor = $('.quick-color-span.quick-color-span-active');
        var offCanvas = new bootstrap.Offcanvas($('#offCanvasMenu')[0]);

        if ($selectedSize.length > 0 && $selectedColor.length > 0) {
            offCanvas.show();  // Show the off-canvas menu
        } else {
            $size = $(this).prev().children('.quick-item-size');
            console.log($size)
            $color = $(this).prev().children('.quick-item-color');
            if($selectedSize.length == 0){
                
                setTimeout(function() {
                    $size.addClass('shake');
                }, 500);
                setTimeout(function() {
                    $size.removeClass('shake');
                }, 1500);
            }
            if($selectedColor.length == 0){
                setTimeout(function() {
                    $color.addClass('shake');
                }, 500);
                setTimeout(function() {
                    $color.removeClass('shake');
                }, 1500);

            }
        }
    });
});
$(document).on('click','.btn-quantity',function(){
    if($(this).hasClass('plus')){
        let current = parseInt($(this).siblings('.quantity').val())
        $(this).siblings('.quantity').val(current + 1)
    }else if($(this).hasClass('minus')){
        let current = parseInt($(this).siblings('.quantity').val())
        if(current - 1  > 0){
            $(this).siblings('.quantity').val(current - 1)
        }else{
            $(this).parent().parent().parent().parent().parent().remove()
            let count = parseInt($('.cart-count').text())
            $('.cart-count').text(count-1)
        }
    }
})
$(document).on('click','.remove-side-cart-item',function(){
    $(this).parent().parent().remove()
    let count = parseInt($('.cart-count').text())
    $('.cart-count').text(count-1)
    
})
$(document).on('click','.edit-cart-item-size-span',function(){
    $('.edit-cart-item-size-span').removeClass('edit-cart-item-size-span-active')
    $(this).addClass('edit-cart-item-size-span-active') 
})
$(document).on('click','.edit-cart-item-color-span',function(){
    $('.edit-cart-item-color-span').removeClass('edit-cart-item-color-span-active')
    $(this).addClass('edit-cart-item-color-span-active') 
})
