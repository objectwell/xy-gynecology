
function baseLayer(layer,options,callback){
    layer.open({
        type:1,
        content:options.content,
        title:options.title,
        btn:options.btn,
        offset: 'auto',
        area: ['600px', '400px'],
        shade: [0.3, '#ddd'],
        anim :0,
        resize:true,
        success:function(layero, index){
            if(callback){
                callback(layero, index)
            }
        }
    })
}

function baseMsg(layer,msg,icon){
    layer.msg(msg,icon);
}