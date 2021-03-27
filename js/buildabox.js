
  $(document).on('click', '.product-opt-title', function(e){
    e.preventDefault();
    if($(this).parents('.product-opt-part').hasClass('product-opt-part-open')){
      $(this).parents('.product-opt-part').removeClass('product-opt-part-open');

    }else{
      $('.product-opt-part').removeClass('product-opt-part-open');
      $(this).parents('.product-opt-part').addClass('product-opt-part-open');
    }
  });
  $(document).on('click', '.product-opt-value label', function(){
    setTimeout(function(){
      var total_input = $('.product-opt-section').find('input:checked').length;
      var crisps_input = $('.crisps-part-wc').find('input:checked').length;
      var heavy_stuff_input = $('.the-heavy-stuff-part-wc').find('input:checked').length;
      var gifts_input = $('.gifts-part-wc').find('input:checked').length;
      if(total_input == 10){
        //console.log(total_input);
        $('.product-opt-section').addClass('product-part-hide-wc');
      }else{
        $('.product-opt-section').removeClass('product-part-hide-wc');
      }
      if(crisps_input == 1){
        //console.log(crisps_input);
        $('.crisps-part-wc').addClass('product-part-hide-wc');
      }else{
        $('.crisps-part-wc').removeClass('product-part-hide-wc');
      }
      if(heavy_stuff_input == 1){
        //console.log(heavy_stuff_input);
        $('.the-heavy-stuff-part-wc').addClass('product-part-hide-wc');
      }else{
        $('.the-heavy-stuff-part-wc').removeClass('product-part-hide-wc');
      }
      if(gifts_input == 3){
        //console.log(gifts_input);
        $('.gifts-part-wc').addClass('product-part-hide-wc');
      }else{
        $('.gifts-part-wc').removeClass('product-part-hide-wc');
      }
    }, 200);
  });
  $(document).on('click', '.product-opt-value input', function(){
    setTimeout(function(){
      var total_input = $('.product-opt-section').find('input:checked').length;
      var crisps_input = $('.crisps-part-wc').find('input:checked').length;
      var heavy_stuff_input = $('.the-heavy-stuff-part-wc').find('input:checked').length;
      var gifts_input = $('.gifts-part-wc').find('input:checked').length;
      if(total_input == 10){
        //console.log(total_input);
        $('.product-opt-section').addClass('product-part-hide-wc');
      }else{
        $('.product-opt-section').removeClass('product-part-hide-wc');
      }
      if(crisps_input == 1){
        //console.log(crisps_input);
        $('.crisps-part-wc').addClass('product-part-hide-wc');
      }else{
        $('.crisps-part-wc').removeClass('product-part-hide-wc');
      }
      if(heavy_stuff_input == 1){
        //console.log(heavy_stuff_input);
        $('.the-heavy-stuff-part-wc').addClass('product-part-hide-wc');
      }else{
        $('.the-heavy-stuff-part-wc').removeClass('product-part-hide-wc');
      }
      if(gifts_input == 3){
        //console.log(gifts_input);
        $('.gifts-part-wc').addClass('product-part-hide-wc');
      }else{
        $('.gifts-part-wc').removeClass('product-part-hide-wc');
      }
    }, 200);
  });
  function addItem(form_id) {
    $.ajax({
      type: 'POST', 
      url: '/cart/add.js',
      dataType: 'json', 
      data: $('#'+form_id).serialize(),
      success: function(data) {
        window.location.href = '/cart';
      },
      error: function(XMLHttpRequest, textStatus) {
        console.log('error');
      }
    });
  }
  $(document).on('click','.add-to-cart',function(e){
    e.preventDefault();
    var form_id = $(this).parents('form').attr('id');
    var total_length = $('.product-opt-element input:checked').length;
    console.log(total_length);
    if(total_length == 10){
    setTimeout(function(){
    addItem(form_id);
      }, 1000);
    }else{
      alert('Choose 10 items for your own custom box');
    }
  });  













  $('#add-to-cart-button').click(function(){    
    addItemToCart( ID NUMBER, 1, "1", "Months").    // paste your id product number
  });

  function addItemToCart(variant_id, qty, frequency, unit_type) {
    data = {
      "id": variant_id,
      "quantity": qty
    }
    
    jQuery.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: data,
      dataType: 'json',
      success: function() { 
        document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
          bubbles: true  //this code is for prestige theme, is to refresh the cart
       }));
      }
    });
    document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
      bubbles: true    // same code for prestige theme   
   }));
  }




  $('#add-to-cart-button').click(function(){    
    addItemToCart(39357735567550, 1)    
  });

  function addItemToCart(variant_id, qty) {
    data = {
      "id": variant_id,
      "quantity": qty
    }
    
    jQuery.post('/cart/add.js', {
      items: [
        {
          quantity: 1,
          id: 39357735567550
        }
      ]
    });
    
  }


<a id="add-to-cart-button" value="{{ product.variants.first.id }}">Add to cart</a>



