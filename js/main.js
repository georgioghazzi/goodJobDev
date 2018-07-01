


$('document').ready(function()
{ 
/* validation */
$("#login-form").validate({
    rules:
    {
    password: {
    required: true,
    },
    user_name: {
    required: true,
    },
    },
    errorPlacement: function(error,element) {
        return true;
      },
    invalidHandler: shakeIt,
    submitHandler: submitForm	
    });  
      /* validation */

/* login submit */
function submitForm()
{		
    var options = {
        distance: '5',
        direction:'left',
        times:'3'
       }
        
    
var data = $("#login-form").serialize();

        $.ajax({

            type : 'POST',
            url  : 'login.php',
            data : data,
            beforeSend: function()
            {	
                $('#login').val("connecting...");
            },
            success :  function(response)
            {						
                    if($.trim(response)== 'ok'){
                        $('document').attr("title", "Voting");  
                        $("body").load("vote.php").hide().fadeIn(1500);
                       
            
            
                    }
                    else{
            
                        $("#box").effect("shake", options, 800);
                        $('#login').val("Login");
                        $('#error').html("<span class='text-danger small'>"+response+" \</span>");
                        $('#password').val('');	 
                    }
            }
            });
       } 


return false;
});
/* login submit */



function shakeIt(){
    var options = {
        distance: '5',
        direction:'left',
        times:'3'
       }
   
    $("#box").effect("shake", options, 800);
    $('#login').val("Login");
    $('#error').html("<span class='text-danger small'>Please Enter Username And Password \</span>");
    $('#user_name').val('');
    $('#password').val('');	   
}

(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
        
    });


})(jQuery);

