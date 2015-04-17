
/*function verScroll(){
    var a = document.body.scrollTop;
    document.getElementById('numerito').innerHTML = a;

    if(a>=60){

        document.getElementById('contenedor').style.position= "fixed";
        document.getElementById('contenedor').style.top= "-16px";
    }else{
        document.getElementById('contenedor').style.position= "";
        document.getElementById('contenedor').style.top= "";
    }

}*/


/*document.getElementById('contenedor').onscroll = function(){

    myFunction()
};

function myFunction(){

    var a = document.body.scrollTop;
    document.getElementById('numerito').innerHTML = a;

    if(a>=60){
        document.getElementById('contenedor').style.position= "fixed";
        document.getElementById('contenedor').style.top= "-16px";
    }else{
        document.getElementById('contenedor').style.position= "";
        document.getElementById('contenedor').style.top= "";
    };

}*/

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('products').addClass("prueba");
    }
    else{
        $('products').removeClass("prueba");
    }
});

