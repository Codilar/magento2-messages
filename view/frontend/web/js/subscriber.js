requirejs([
    'jquery',
    'Magento_Customer/js/customer-data',
    'toastr'
], function($, customerData, toastr){
    var observableObject = customerData.get('messages');

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-bottom-left",
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

    var showToastMessage = function(data){
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
    var previousMessages = $.cookieStorage.get('mage-messages');
    $.cookieStorage.set('mage-messages', '');
    showToastMessage({'messages' : previousMessages});

    observableObject.subscribe(showToastMessage);
});