$(document).ready(function() {
    
    $('#bodyBlock em.footer').click(function(){
        if($('em.footer').hasClass("white")){
            $('em.footer').removeClass("white");
        } else {
             $('em.footer').addClass("white");     
      }

    


    });
    
    $('#bodyBlock em.project').click(function(){


        if($('em.project').hasClass("white")){
            alert('Show!!!')
            $('em.project').removeClass("white");
            $('a').show("fast");
            $('hr').show("fast")
            $('th').show("fast")
            $('footer').show("fast")
            $('button').show('fast')
        } else {
            alert('Clean!!!')
            $('em.project').addClass("white");  
            $('a').hide("slow");
            $('hr').hide("slow")
            $('th').hide("slow")
            $('footer').hide("slow")   
            $('button').hide("slow")   

      }
     



    });

    $( "#dialog_resume" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode"
    });

    $( "#resume" ).click(function() {
        $( "#dialog_resume" ).dialog( "open" );
        return false;
    });

    

    $( "#dialog_lab5" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode"
    });

    $( "#lab5" ).click(function() {
        $( "#dialog_lab5" ).dialog( "open" );
        return false;
    });

    $( "#dialog_lab6" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode"
    });

    $( "#lab6" ).click(function() {
        $( "#dialog_lab6" ).dialog( "open" );
        return false;
    });

    $( "#dialog_lab8" ).dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode"
    });

    $( "#lab8" ).click(function() {
        $( "#dialog_lab8" ).dialog( "open" );
        return false;
    });





    $('#bodyBlock a.lab6').click(function(){
        alert("Learn how to use jQuery");

    })

    $('#bodyBlock a.lab8').click(function(){
        alert("Learn about XSS");

    })
    

    $('#bodyBlock h2').click(function() {
        alert('You need to click lab not blank');


    });

    
    






});