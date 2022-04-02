require('./bootstrap');

window.Echo.channel('chat').listen('.massage',(e)=>{
    var regex = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if(!regex .test(e.massage)) {
        $("#msg_history").append('<div class="received_withd_msg"><p>'+e.massage+'</p> <span class="time_date"> 11:01 AM    |    June 9</span></div></div>');
        $("#massage").val("");
    } else {

        $("#msg_history").append('<div class="received_withd_msg"><p><a href ="'+e.massage+'">'+e.massage+'</a></p> <span class="time_date"> 11:01 AM    |    June 9</span></div></div>');
    }
    
    

    
});



