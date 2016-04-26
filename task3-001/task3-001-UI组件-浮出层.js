/**
 * Created by nanianxiaL on 2016/4/24.
 */

var oPickMe =  getId('pick-me');
var oMask =  getId('mask');
var oLoginBox =  getId('login');
var oLoginBtn = getId('login-btn');
var oUnDo = getId('undo');


pinkMe( oLoginBtn, oUnDo, oMask, oLoginBox );
drag( oLoginBox );


//浮出层拖拽函数，含有碰撞检测
function drag(obj) {
        obj.onmousedown = function(ev) {
                var ev = ev || event;
                var disX = ev.clientX - this.offsetLeft;
                var disY = ev.clientY - this.offsetTop;

                if ( obj.setCapture ) {
                        obj.setCapture();
                }
                document.onmousemove = function(ev) {
                        var ev = ev || event;

                        var L = ev.clientX - disX;
                        var T = ev.clientY - disY;

                        obj.style.left = L + 'px';
                        obj.style.top = T + 'px';

                }
                document.onmouseup = function() {
                        document.onmousemove = document.onmouseup = null;
                        if ( obj.releaseCapture ) {
                                obj.releaseCapture();
                        }
                }
                return false;
        }
}
//PinkMe 点击事件，显示浮出层
oPickMe.addEventListener( 'click', function (  ) {
        oMask.style.display = 'block';
        oLoginBox.style.display = 'block';
} );
//遮罩层点击事件
function pinkMe ( btnIn, undo,mask,LoBox) {
        btnIn.addEventListener( 'click', function (  ) {unDis( mask, LoBox );});
        undo.addEventListener( 'click', function (  ) {unDis( mask, LoBox );});
        mask.addEventListener( 'click', function (  ) {unDis( mask, LoBox );});
};
//关闭遮罩层和浮出层
function unDis ( mask, LoBox ) {
        oMask.style.display = 'none';
        oLoginBox.style.display = 'none';
}
//按照ID获取页面元素
function getId ( ID ) {
        return document.getElementById(ID);
}
