/**
 * Created by nanianxiaL on 2016/4/22.
 */


var arr = [];
var oText = getId( 'text-in');
var oList= getId('list');
var oResult= getId('result');
var aInp = document.getElementsByTagName('input');

//根据数组创建在列表中创建li，创建li标签
function cTag (  ) {
                var oList = getId('list');
                oList .innerHTML = '';
                oResult.innerHTML = '';

                for( var i=0; i<arr.length; i++ ){
                                var oLi = document.createElement('li');
                                oLi.innerHTML = arr[i];
                                oList.appendChild( oLi );

                                var oSpan = document.createElement('span');
                                oSpan.style.height = arr[i]*2 + 'px';
                                oSpan.style.left = i*60+ 'px';
                                oSpan.innerHTML = arr[i];
                                oResult.appendChild( oSpan );
                }
                oText.value= '';
}

//判断输入框输入条件

function condition (  ) {
                if ( arr.length >= 60 ){
                                alert( '队列已经满喽' );
                                oText.value= '';
                }else if ( isNaN( oText.value ) ){
                                alert( '输入一个1整数试试吧~~' );
                                oText.value= '';
                }else if ( parseInt( oText.value ) < 10 || parseInt( oText.value ) > 100 ){
                                alert( '请输入10-60之间的数字哦 ');
                                oText.value= '';
                }else  if ( oText.value == '' ){
                               alert('输入的值不能为空的哦');
                }else{
                                return true;
                };
}

//给按钮绑定事件
aInp[1].onclick = function (  ) {
                if ( condition() ){
                                arr.unshift( oText.value );
                                cTag(  );
                };
}
aInp[2].onclick = function (  ) {
                if ( condition() ){
                                arr.push ( oText.value );
                                cTag(  );
                };
}
aInp[3].onclick = function (  ) {
                var str = arr.shift( oText.value );
                cTag();
                alert( str );
}
aInp[4].onclick = function (  ) {
                var str = arr.pop( oText.value );
                cTag();
                alert( str );
}
aInp[5].onclick = function (  ) {
                arr.sort( function ( a, b ) {
                                return a - b;
                } );
                alert( arr );
                cTag();
}

//给队列中的每一项绑定删除事件
oList.addEventListener( 'click', function ( e ) {

                alert( e.target.innerHTML + '    偷偷亲了你一下，然后去吃糖啦~~' );
                oList.removeChild( e.target );
                arr.splice( arr.indexOf(  e.target.innerHTML ), 1 );
                cTag();

} );

//按照ID获取页面元素
function getId ( ID ) {
                return document.getElementById(ID);
}

//     END    按照ID获取页面元素

