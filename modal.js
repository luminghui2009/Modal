//根据传入的参数生成dom，
function Modal() {
    this.defaultOpt={
        title:"哇！连续登录7天啦",
        portrait:"./images/portrait.jpg",
        //段落是纯文字，type=1；段落是文字和按钮,type=2;
        content:[{text:"1、10积分",type:1},{text:{subTitle:"2、问道礼包:",subText:"121311145465454621"},btn:{text:"复制并打开",url:'./mock/index.json'},type:2},{text:"3、5金币",type:1}],
        //底部按钮
        footer:[
            {
                txt:"我知道了",
                cb:()=>$('.modal').fadeOut(200),
            sty:{backgroundColor:'#fcc129', width:100,height:30,borderRadius:"30px",color:'#fff',lineHeight:"30px",fontSize:"16px"}
},
    {
        txt:"一键注册",
            cb:()=>$('.modal').fadeOut(200),
        sty:{backgroundColor:'#706eff', width:100,height:30,borderRadius:"30px",color:'#fff',lineHeight:"30px",fontSize:"16px"}
    }
]
};
};
Modal.prototype.init=function (options=this.defaultOpt) {
    $('.modal').detach();
    $(document.body).prepend('<div class="modal" style="display:none"></div>');
    $('.modal').append('<div class="modal-dialog"></div>');
    $('.modal-dialog').append('<div class="modal-header"><h2 class="modal-title"></h2></div>')
        .append('<div class="modal-body"></div>')
        .append('<div class="modal-footer"></div>');
    let {title,portrait,content,footer}={...options};
    $('.modal-title').text(title);
    if(!!portrait){
        let modalPortrait=$('<img class="modal-portrait"/>');
        modalPortrait.attr('src',portrait).prependTo($('.modal-header'));
    }else{
        $('.modal-title').addClass('only-tilte');
    }
    $.each(content,function (index,con) {
        let p=$('<p class="modal-content"></p>');
        if(con.type==1){
            p.html(con.text);
        }else if(con.type==2){
            let span=$('<span class="left-side"></span>');
            let span1=$('<span></span><br>');
            span1.text(con.text.subTitle).appendTo(span);
            let span2=$('<span style="margin-left: 1.5em;display:inline-block"></span>');
            span.append(span2.text(con.text.subText));
            p.append(span);
            let button=$('<button class="right-side"></button>');
            button.html(con.btn.text);
            p.append(button);
        }
        $('.modal-body').append(p);
    });
    $.each(footer,function (index,item) {
        let btn=$('<button></button>').html(item.txt).css(item.sty).on('click',function () {
            item.cb();
        });
        $('.modal-footer').append(btn);
    });
};
Modal.prototype.modalShow=function () {
    $('.modal').fadeIn(200);
};
let modal=new Modal();
modal.init();