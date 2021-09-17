// Validation File

// Add CSS in Main Layout

/*.has-error {
    box-shadow: 0px 0px 2px 1px #DE0707 !important;
}

.error_msg{
    width: 100%; padding: 10px; 
    background-color: rgba(209, 90, 102, 0.31); 
    color: rgb(171, 0, 0); 
    font-size: 15px; 
    text-align: center;
    
}*/


// Add class "val" in form input ex. <input type="text" class="val" val="num alpha m_space s_space max_digit-100"/> ////

$(document).on('click','.val',function(e){
    
    $(this).removeClass('has-error');
    $('.error',$(this).parent()).remove();
    
});
$(document).on('keypress','.val',function(e){
    
    var val_type = $(this).attr('val');
    $(this).removeClass('has-error');
    if((typeof(val_type)!='undefined') && (val_type.trim()!=''))
    {
        e = (e) ? e : window.event;
        var eve = (e.which) ? e.which : e.keyCode;
        
        if((e.which==0)&&((eve>=37)&&(eve<=40))) return true; //For Mozilla access arrow buttons 
        //else if(((eve==8))||((eve==9))||((eve==46))) return true;
        else if(((eve==8))||((eve==9))) return true;
        else if((val_type.indexOf('s_space') >= 0)&&(($(this)[0].selectionStart==0))&&($(this).val().length!=0)&&((eve==32)))
            return false;
        else if((val_type.indexOf('s_space') >= 0)&&((eve==32))&&($(this).val().length==0))
            return false;
        else if(val_type.trim()=='s_space')
            return true;
        else
        {
            var val_check=0;
            var rule_set=0;
            
            if((val_type.indexOf('num') >= 0))
            {
                //if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))))
                if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))))
                    val_check=1;
                rule_set=1;
                
            }

            if((val_type.indexOf('digit') >= 0))
            {
                //if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))))
                if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))))
                    val_check=1;
                rule_set=1;
                
            }
            
            if((val_type.indexOf('float_num') >= 0))
            {
                if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))))
                    val_check=1;
                rule_set=1;
                
            }

            if((val_type.indexOf('float_digit') >= 0))
            {
                if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))))
                    val_check=1;
                rule_set=1;
                
            }
            
            if((val_type.indexOf('comma') >= 0))
            {
                if(eve==44)
                    val_check=1;
                rule_set=1;
                
            }
            
            if((val_type.indexOf('alpha') >= 0))
            {
                if((((eve>=97)&&(eve<=122))||((eve>=65)&&(eve<=90))||((eve==8))||((eve==9))||((eve==46)) || ((eve==45)) || ((eve==95))))
                    val_check=1;
                rule_set=1;
                
                
            }

            if((val_type.indexOf('letters') >= 0))
            {
                if((((eve>=97)&&(eve<=122))||((eve>=65)&&(eve<=90))||((eve==8))||((eve==9))||((eve==46)) || ((eve==45)) || ((eve==95))))
                    val_check=1;
                rule_set=1;
                
                
            }

            if((val_type.indexOf('star') >= 0))
            {
                if(eve==42)
                    val_check=1;
                rule_set=1;
            }

            if((val_type.indexOf('allow_space') >= 0))
            {
                if(eve==32)
                    val_check=1;
                rule_set=1;
            }

            
            if((val_type.indexOf('email') >= 0))
            {
                if((((eve>=97)&&(eve<=122))||((eve>=65)&&(eve<=90))||((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))||((eve==64))||((eve==95)) || ((eve==45))))
                    val_check=1;
                rule_set=1;         
                
            }

            if((val_type.indexOf('mail') >= 0))
            {
                if((((eve>=97)&&(eve<=122))||((eve>=65)&&(eve<=90))||((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))||((eve==64))||((eve==95)) || ((eve==45))))
                    val_check=1;
                rule_set=1;         
                
            }
            
            if((val_type.indexOf('m_space') >= 0))
            {
                
                if((eve==32))
                    val_check=1;
                rule_set=1;
                
            }
            if(val_type.indexOf("min_digit") >= 0)
            {
                min_val=val_type.split('min_digit');
                min_digit=min_val[1].split('-');
                if((typeof(min_digit[1])!='undefined') && (min_digit[1].trim()!=''))
                {
                    min_digit=parseInt(min_digit[1]);
                    if(!isNaN((min_digit)))
                    {
                        
                    }
                }
            }
            if(val_type.indexOf("max_digit") >= 0)
            {
                max_val=val_type.split('max_digit');
                max_digit=max_val[1].split('-');
                if((typeof(max_digit[1])!='undefined') && (max_digit[1].trim()!=''))
                {
                    max_digit=parseInt(max_digit[1]);
                    if(!isNaN((max_digit)))
                    {
                        
                        if(rule_set==1)
                        {
                            if((($(this).val().length)<(max_digit)|| ((eve==8))||((eve==9))||((eve==46)))&&(val_check==1))
                                val_check=1;
                            else 
                                val_check=0;
                                
                        }
                        else if((($(this).val().length)<(max_digit)|| ((eve==8))||((eve==9))||((eve==46))))
                            val_check=1;
                        else 
                            val_check=0;
                                            
                    }
                }
                rule_set=1;
                
            }

            if(val_type.indexOf("max_number") >= 0)
            {
                max_val=val_type.split('max_number');
                max_number=max_val[1].split('-');
                if((typeof(max_number[1])!='undefined') && (max_number[1].trim()!=''))
                {
                    max_number=parseInt(max_number[1]);
                    if(!isNaN((max_number)))
                    {
                        
                        if(rule_set==1)
                        {
                            if((($(this).val().length)<(max_number)|| ((eve==8))||((eve==9))||((eve==46)))&&(val_check==1))
                                val_check=1;
                            else 
                                val_check=0;
                                
                        }
                        else if((($(this).val().length)<(max_number)|| ((eve==8))||((eve==9))||((eve==46))))
                            val_check=1;
                        else 
                            val_check=0;
                                            
                    }
                }
                rule_set=1;
                
            }
            
            if(val_check==1 || rule_set==0)
                return true;
            else
                return false;
            
        }
        
    }
    
});

//////////////////////////////////////////////// END /////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////// START ///////////////////////////////////////////////////////////////////

function validat(typ,data)
{
    
    var val_type ='',
    filterchar=/^[a-zA-Z\-_Ã¤Ã¶Ã¼Ã„Ã–ÃœÃŸ.]+$/,
    filternum=/^[0-9]+$/,
    filternumdot=/^[0-9.]+$/,
    filternumcomma=/^[0-9, ]+$/,
    filternumstar=/^[0-9* ]+$/,
    filternumchar=/^[A-Za-z0-9\-_Ã¤Ã¶Ã¼Ã„Ã–ÃœÃŸ.]+$/,
    filternumcharspace=/^[A-Za-z0-9 \-_Ã¤Ã¶Ã¼Ã„Ã–ÃœÃŸ.]+$/,
    filteremail=/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,     
    filterwebsite=/^((?:https?\:\/\/|www\.)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)?$/i,
    filterstartspace=/^[^-\s][\w\s-]+$/,
    filtermiddlespace=/^[a-zA-Z ]*$/,
    val_check=0;
    //if(typ==0) data = $(this);
    //else 
    data = $(data);
    
    $('.val',data).removeClass('has-error');
    $(".error").remove()

    $('.val',data).each(function(){
        
        val_type = $(this).attr('val');
        //alert(typeof($(this).val()));
        if((typeof(val_type)!='undefined'))
        {
            if((val_type.trim()=='')||((val_type.indexOf('s_space') >= 0) &&($(this).val().trim()=='')))
            {
                
                if((typeof($(this).val())=='object')&&($(this).val()==null))
                {
                    val_check=1;
                    if($(this).hasClass('val_select'))
                        $(this).siblings('.select_option').addClass('has-error');
                    else
                        $(this).addClass('has-error');
                }
                else if (((typeof($(this).val())!='object'))&&($(this).val().trim()==''))
                {
                    val_check=1;
                    if($(this).hasClass('val_select'))
                    {
                        $(this).siblings('.select_option').addClass('has-error');
                    }
                    else
                        $(this).addClass('has-error');
                    //$('label',$(this).parent()).html($('label',$(this).parent()).text()   +' <span class="error" style="display:block;color: #ff0202;">* Field is mendatory </span>');
                }

            }
            else
            {
                
                if((val_type.indexOf('s_space') >= 0) && (val_type.indexOf('alpha') >= 0))
                {
                    if (!(filterstartspace.test($(this).val())))
                    {
                        val_check=1;
                        $(this).addClass('has-error');
                    }
                }
                if((val_type.indexOf('allow_space') >= 0) && (val_type.indexOf('alpha') >= 0))
                {
                    if (!(filtermiddlespace.test($(this).val())))
                    {

                        val_check=1;
                        $(this).addClass('has-error');
                    }
                }
                if((val_type.indexOf('num') >= 0) && (val_type.indexOf('alpha') >= 0))
                {
                    //if (!(filternumchar.test($(this).val())))
                    if((val_type.indexOf('m_space') >= 0))
                    {
                        if (!(filternumcharspace.test($(this).val())))
                        {
                            val_check=1;
                            $(this).addClass('has-error');
                        }
                    }else{
                        if (!(filternumchar.test($(this).val())))
                        {
                            val_check=1;
                            $(this).addClass('has-error');
                        }
                    }
                }
                else if((val_type.indexOf('letters') >= 0) && (val_type.indexOf('digit') >= 0))
                {
                    if($(this).val()!=''){
                        if((val_type.indexOf('m_space') >= 0))
                        {
                            if (!(filternumcharspace.test($(this).val())))
                            {
                                val_check=1;
                                $(this).addClass('has-error');
                            }
                        }else{
                            if (!(filternumchar.test($(this).val())))
                            {
                                val_check=1;
                                $(this).addClass('has-error');
                            }
                        }
                    }
                }
                else if((val_type.indexOf('digit') >= 0) && (val_type.indexOf('star') >= 0))
                {
                    if($(this).val()!=''){
                        if (!(filternumstar.test($(this).val())))
                        {
                            val_check=1;
                            $(this).addClass('has-error');
                        }
                    }
                }
                else if((val_type.indexOf('num') >= 0) && (val_type.indexOf('comma') >= 0))
                {
                    if (!(filternumcomma.test($(this).val())))
                    {
                        val_check=1;
                        $(this).addClass('has-error');
                    }
                }
                else if((val_type.indexOf('float_num') >= 0))
                {
                    if($(this).val()!='')
                    {
                        if (!(filternumdot.test($(this).val())))
                        {   
                            val_check=1;
                            $(this).addClass('has-error');
                        }
                    }
                }
                else if((val_type.indexOf('num') >= 0))
                {
                    if (!(filternum.test($(this).val())))
                    {   
                        val_check=1;
                        $(this).addClass('has-error');
                    }
                }
                else if((val_type.indexOf('digit') >= 0))
                {
                    if($(this).val()!='')
                    {
                        if (!(filternum.test($(this).val())))
                        {   
                            val_check=1;
                            $(this).addClass('has-error');
                        }
                    }
                }
                else if((val_type.indexOf('s_space') >= 0) && (val_type.indexOf('alpha') >= 0))
                {
                    if (!(filterstartspace.test($(this).val())))
                    {
                        val_check=1;
                        $(this).addClass('has-error');
                    }
                }
                else if((val_type.indexOf('alpha') >= 0))
                {
                    if (!(filterchar.test($(this).val())))
                    {
                        alert();
                        val_check=1;
                        $(this).addClass('has-error');
                    }
                }
                else if((val_type.indexOf('letters') >= 0))
                {
                    if($(this).val()!='')
                    {
                        if (!(filterchar.test($(this).val())))
                        {
                            val_check=1;
                            $(this).addClass('has-error');
                        }
                    }
                }
                if((val_type.indexOf('m_space') == -1) && (!val_type.trim()=='s_space'))
                {
                    
                    if (($(this).val().indexOf(' ') >=0))
                    {
                        val_check=1;
                        $(this).addClass('has-error');
                        
                    }
                    
                }
                if((val_type.indexOf('email') >= 0))
                {
                    if (!(filteremail.test($(this).val())) || ($(this).val().trim()==''))
                    {
                        val_check=1;
                        $(this).addClass('has-error');
                        if(!(filteremail.test($(this).val())))
                            $(this).after('<span class="error" style="display:block;color: #ff0202;position: absolute;"></span>');

                    }
                }

                if((val_type.indexOf('mail') >= 0))
                {
                    if($(this).val()!='')
                    {
                        if (!(filteremail.test($(this).val())) || ($(this).val().trim()==''))
                        {
                            val_check=1;
                            $(this).addClass('has-error');
                            if(!(filteremail.test($(this).val())))
                                $(this).after('<span class="error" style="display:block;color: #ff0202;position: absolute;"></span>');

                        }
                    }
                }
                if((val_type.indexOf('website') >= 0))
                {
                    if($(this).val()!='')
                    {
                        if (!(filterwebsite.test($(this).val())) || ($(this).val().trim()==''))
                        {
                            val_check=1;
                            $(this).addClass('has-error');
                        }
                    }
                }
                if(val_type.indexOf("max_digit") >= 0)
                {
                    max_val=val_type.split('max_digit');
                    max_digit=max_val[1].split('-');
                    if((typeof(max_digit[1])!='undefined') && (max_digit[1].trim()!=''))
                    {
                        max_digit=parseInt(max_digit[1]);
                        if(!isNaN((max_digit)))
                        {
                            if(($(this).val().length)<=(max_digit));
                                //val_check=0;
                            else 
                            {
                                val_check=1;
                                $(this).addClass('has-error');
                            }
                            
                        }
                    }
                            
                }

                if(val_type.indexOf("max_number") >= 0)
                {
                    alert($(this).val());
                    if($(this).val()!=''){
                        max_val=val_type.split('max_number');
                        max_number=max_val[1].split('-');
                        if((typeof(max_number[1])!='undefined') && (max_number[1].trim()!=''))
                        {
                            max_number=parseInt(max_number[1]);
                            if(!isNaN((max_number)))
                            {
                                if(($(this).val().length)<=(max_number));
                                    //val_check=0;
                                else 
                                {
                                    val_check=1;
                                    $(this).addClass('has-error');
                                }
                                
                            }
                        }
                    }
                    
                            
                }

                if((val_type.indexOf('min_char') >= 0))
                {
                    min_val=val_type.split('min_char');
                    min_digit=min_val[1].split('-');
                    
                    if((typeof(min_digit[1])!='undefined') && (min_digit[1].trim()!=''))
                    {
                        min_digit=parseInt(min_digit[1]);
                        if(!isNaN((min_digit)))
                        {
                            if(($(this).val().length) > (min_digit));
                                //val_check=0;
                            else 
                            {
                                val_check=1;
                                $(this).addClass('has-error');
                            }
                            
                        }
                    }
                }
                
            }
        }
        
    }); 

    if(val_check==0)
        return true;
    else
        return false;
}

$(document).on('submit','form',function(){
    return validat(0,$(this));
});

$(document).on('keypress','.nowrite',function(){
    return false;
});

/*$(".next-step").click(function (e) {
    
    
});*/


/*For confirm password Validation*/


/*For Valid number(not allowed zero) Validation)*/
$(".mobile_no").blur(function(){
    var input=$(this);
    var is_name=input.val();
    if(is_name==0 && is_name!=""){ $(".mobile_no").addClass("has-error").after('<span class="error" style="display:block;color: #ff0202;position: absolute;">* Invalid Number</span>'); $(".mobile_no").val(""); } else{ $(".mobile_no").removeClass("has-error"); }
});

$(".postal_code").blur(function(){
    var input=$(this);
    var is_name=input.val();
    if(is_name==0 && is_name!=""){ $(".postal_code").addClass("has-error").after('<span class="error" style="display:block;color: #ff0202;position: absolute;">* Invalid Number</span>'); $(".postal_code").val(""); } else{ $(".postal_code").removeClass("has-error"); }
});// Validation File

// Add CSS in Main Layout

/*.has-error {
    box-shadow: 0px 0px 2px 1px #DE0707 !important;
}

.error_msg{
    width: 100%; padding: 10px; 
    background-color: rgba(209, 90, 102, 0.31); 
    color: rgb(171, 0, 0); 
    font-size: 15px; 
    text-align: center;
    
}*/


// Add class "val" in form input ex. <input type="text" class="val" val="num alpha m_space s_space max_digit-100"/> ////

$(document).on('click','.val',function(e){
    
    $(this).removeClass('has-error');
    $('.error',$(this).parent()).remove();
    
});
$(document).on('keypress','.val',function(e){
    
    var val_type = $(this).attr('val');
    $(this).removeClass('has-error');
    if((typeof(val_type)!='undefined') && (val_type.trim()!=''))
    {
        e = (e) ? e : window.event;
        var eve = (e.which) ? e.which : e.keyCode;
        
        if((e.which==0)&&((eve>=37)&&(eve<=40))) return true; //For Mozilla access arrow buttons 
        //else if(((eve==8))||((eve==9))||((eve==46))) return true;
        else if(((eve==8))||((eve==9))) return true;
        else if((val_type.indexOf('s_space') >= 0)&&(($(this)[0].selectionStart==0))&&($(this).val().length!=0)&&((eve==32)))
            return false;
        else if((val_type.indexOf('s_space') >= 0)&&((eve==32))&&($(this).val().length==0))
            return false;
        else if(val_type.trim()=='s_space')
            return true;
        else
        {
            var val_check=0;
            var rule_set=0;
            
            if((val_type.indexOf('num') >= 0))
            {
                //if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))))
                if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))))
                    val_check=1;
                rule_set=1;
                
            }

            if((val_type.indexOf('digit') >= 0))
            {
                //if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))))
                if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))))
                    val_check=1;
                rule_set=1;
                
            }
            
            if((val_type.indexOf('float_num') >= 0))
            {
                if((((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))))
                    val_check=1;
                rule_set=1;
                
            }
            
            if((val_type.indexOf('comma') >= 0))
            {
                if(eve==44)
                    val_check=1;
                rule_set=1;
                
            }
            
            if((val_type.indexOf('alpha') >= 0))
            {
                if((((eve>=97)&&(eve<=122))||((eve>=65)&&(eve<=90))||((eve==8))||((eve==9))||((eve==46)) || ((eve==45)) || ((eve==95))))
                    val_check=1;
                rule_set=1;
                
                
            }

            if((val_type.indexOf('letters') >= 0))
            {
                if((((eve>=97)&&(eve<=122))||((eve>=65)&&(eve<=90))||((eve==8))||((eve==9))||((eve==46)) || ((eve==45)) || ((eve==95))))
                    val_check=1;
                rule_set=1;
                
                
            }

            if((val_type.indexOf('star') >= 0))
            {
                if(eve==42)
                    val_check=1;
                rule_set=1;
            }

            if((val_type.indexOf('allow_space') >= 0))
            {
                if(eve==32)
                    val_check=1;
                rule_set=1;
            }

            
            if((val_type.indexOf('email') >= 0))
            {
                if((((eve>=97)&&(eve<=122))||((eve>=65)&&(eve<=90))||((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))||((eve==64))||((eve==95)) || ((eve==45))))
                    val_check=1;
                rule_set=1;         
                
            }

            if((val_type.indexOf('mail') >= 0))
            {
                if((((eve>=97)&&(eve<=122))||((eve>=65)&&(eve<=90))||((eve>=48)&&(eve<=57))||((eve==8))||((eve==9))||((eve==46))||((eve==64))||((eve==95)) || ((eve==45))))
                    val_check=1;
                rule_set=1;         
                
            }
            
            if((val_type.indexOf('m_space') >= 0))
            {
                
                if((eve==32))
                    val_check=1;
                rule_set=1;
                
            }
            if(val_type.indexOf("min_digit") >= 0)
            {
                min_val=val_type.split('min_digit');
                min_digit=min_val[1].split('-');
                if((typeof(min_digit[1])!='undefined') && (min_digit[1].trim()!=''))
                {
                    min_digit=parseInt(min_digit[1]);
                    if(!isNaN((min_digit)))
                    {
                        
                    }
                }
            }
            if(val_type.indexOf("max_digit") >= 0)
            {
                max_val=val_type.split('max_digit');
                max_digit=max_val[1].split('-');
                if((typeof(max_digit[1])!='undefined') && (max_digit[1].trim()!=''))
                {
                    max_digit=parseInt(max_digit[1]);
                    if(!isNaN((max_digit)))
                    {
                        
                        if(rule_set==1)
                        {
                            if((($(this).val().length)<(max_digit)|| ((eve==8))||((eve==9))||((eve==46)))&&(val_check==1))
                                val_check=1;
                            else 
                                val_check=0;
                                
                        }
                        else if((($(this).val().length)<(max_digit)|| ((eve==8))||((eve==9))||((eve==46))))
                            val_check=1;
                        else 
                            val_check=0;
                                            
                    }
                }
                rule_set=1;
                
            }
            
            if(val_check==1 || rule_set==0)
                return true;
            else
                return false;
            
        }
        
    }
    
});



/*
* Name: Vilas Rajusing Ade
* Desc: Terms and Conditions Method
* Date: 22/01/2019
*
*/
function checkTerms(form)
{

    if(!form.terms.checked) {
      alert("Please accept the Terms and Conditions.");
      form.terms.focus();
      return false;
    }
    return true;
}


$(document).ready(function(){
  $("#new_password-1").blur(function(event){
    var new_password = $("#new_password-1").val();
    //var password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(new_password.length<8)
    {
      $("#password_msg").html('Password is too short. Password length should minimum 8 character').css('color', 'red');
      $("#new_password").val(""); 
      $("#new_password-1").val("");

    }
    else if(!(password.test(new_password))){
      $("#password_msg").html('Password soulde be 1 Capital letter, 1 Small letter, 1 Digit, 1 Special character').css('color', 'red');
      $("#new_password").val("");
      $("#new_password-1").val("");

    }
  });

  $("#new_password-1").keypress(function(event){
    $("#password_msg").html('');
  });
});



  


//////////////////////////////////////////////// END /////////////////////////////////////////////////////////////////////