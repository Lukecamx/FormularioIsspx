$(document).ready(function(){
    
    $('#btnSend').click(function(){
        
        var errores = '';

        // Validar nombre ====
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        }

        if( $('#email').val() == '' ){
            errores += '<p>Escriba un correo electrónico</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        }

        if( $('#phone').val() == '' ){
            errores += '<p>Ingrese un número de teléfono</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        }

        // Enviando mensaje ==========
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Campos incompletos</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'
                                    


                                '</div>'
                                
            $('body').append(mensajeModal);
        }

        // Cerrar modal // =================================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();

        });
     

    });
});   