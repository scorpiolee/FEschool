/**
 * Created by nanianxiaL on 2016/4/22.
 */


var arr = [];
var oText = getId( 'text-in');
var oList= getId('list');
var aInp = document.getElementsByTagName('input');

//根据数组创建在列表中创建li，创建li标签
function cTag (  ) {
                var oList = getId('list');
                oList .innerHTML = '';
                for( var i=0; i<arr.length; i++ ){
                                var oLi = document.createElement('li');
                                oLi.innerHTML = arr[i];
                                oList.appendChild( oLi );
                }
                oText.value= '';
}



//给按钮绑定事件
aInp[1].onclick = function (  ) {
                arr.unshift( oText.value );
                cTag();
}
aInp[2].onclick = function (  ) {
                arr.push ( oText.value );
                cTag ();
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


//给队列中的每一项绑定删除事件
oList.addEventListener( 'click', function ( e ) {
                oList.removeChild( e.target );
                alert( e.target.innerHTML + '    偷偷亲了你一下，然后去吃糖啦~~' );
} );

//按照ID获取页面元素
function getId ( ID ) {
                return document.getElementById(ID);
}

//     END    按照ID获取页面元素

