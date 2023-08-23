require([
    'jquery',
    'Magento_Customer/js/customer-data',
    'toastr'
], function($, customerData, toastr){
    let observableObject = customerData.get('messages');

    toastr.options = {
        "closeButton": window.toastConfig.show_close_button ?? false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": window.toastConfig.message_position ?? "toast-bottom-left",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "2000",
        "timeOut": "5000",
        "extendedTimeOut": "2000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    let showToastMessage = function(data){
        try{
            data.messages.forEach(function(message){
                switch(message.type){
                    case "success":
                        toastr.success(message.text, "");
                        break;
                    case "error":
                        toastr.error(message.text, "");
                        break;
                    default:
                        toastr.info(message.text, "");
                }
            })
        }catch(e){}
    };

    /* Show initial messages */
    let previousMessages = $.cookieStorage.get('mage-messages');
    $.cookieStorage.set('mage-messages', '');
    showToastMessage({'messages' : previousMessages});

    observableObject.subscribe(showToastMessage);
});
