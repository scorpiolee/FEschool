
/*    功能：第一个模块
                  用户输入回车时，自动把当前输入的内容作为一个tag放在输入框下面。
                 Tag不能有重复的，遇到重复输入的Tag，自动忽视。
                 最多允许10个Tag，多于10个时，按照录入的先后顺序，把最前面的删掉
                 当鼠标悬停在tag上时，tag增加删除二字，点击tag可删除

                 第二个模块：兴趣爱好输入的功能
                 通过一个Textarea进行兴趣爱好的输入，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为间隔。
                 当点击“确认兴趣爱好”的按钮时，显示在textarea下方
                 爱好不能重复，所以在下方呈现前，需要做一个去重

                 程序特点：
                      将两个大模块分开，去重，输入条件判断等公用，将数组和输入框作为参数传递

                      缺点：第一个模块绑定鼠标进出的事件的时候放在了创建元素的函数中，不利于这个函数的重用

*
* */

var arr1 = [];
var arrHobby = [];
var oTextIn = getId('text-in');
var oHobby = getId('hobby');

judgeKey( oTextIn,arr1 );

btn( oHobby, arrHobby );


//第二个模块鼠标点击事件
function btn ( attr,arr ) {
                var oBtn = getId('hobby-btn');
                oBtn.addEventListener( 'click', function (  ) {
                                if ( condition(  attr ) ){
                                                dude( arr );  //数组去重
                                                gohobby( attr,arr ); //根据标签和数组的创建子元素
                                }
                });
}
//  第一个模块， 判断是否回车,然后执行后续函数
function judgeKey ( attr, arr ) {
                attr.onkeydown = function ( ev ) {
                                if ( (ev.keyCode == 13) && condition(  attr ) ){
                                                if ( arr.length >= 10 ) {
                                                                arr.shift();    //删除数组中的第一项
                                                }
                                                arr.push( attr.value );   //将attr中的值push到数组中
                                                attr.value = '';
                                                dude( arr );  //数组去重
                                                cTag(  attr ); //创建元素
                                }
                }
}


//根据数组创建在列表中创建li，创建li标签,给每个上面加上鼠标进入离开的事件  第一个模块
function cTag ( attr ) {
                var oList = getId('list');
                oList .innerHTML = '';

                for( var i=0; i<arr1.length; i++ ){
                                var oLi = document.createElement('li');
                                oLi.innerHTML = arr1[i];
                                oList.appendChild( oLi );
                                //给每一项生成的标签都添加一个鼠标进出事件
                                oLi.addEventListener( 'mouseenter', function ( event ){
                                                var some = event.target.innerHTML;
                                                event.target.innerHTML += '点击删除';
                                                event.target.addEventListener( 'mouseleave', function ( event ){
                                                                event.target.innerHTML = some;
                                                })
                                })
                                //给每一项生成的标签都添加一个鼠标点击事件
                                oLi.addEventListener( 'click',function ( event ) {
                                                event.target.parentNode.removeChild(event.target);//删除当前目标的父节点的子节点==这个节点
                                } )
                }
                attr.value= '';
}
//hobby模块的创建子元素
function gohobby ( attr,arr ) {
                var oList2 = getId ( 'list-hobby' );
                oList2.innerHTML = '';
                arr.push( attr.value );
                attr.value = '';

                for ( var i = 0 ; i < arr.length ; i ++ ) {
                                var oLi1 = document.createElement ( 'li' );
                                oLi1.innerHTML = arr[ i ];
                                oList2.appendChild ( oLi1 );
                }
                attr.value = '';
}
//判断输入值是否正确
function condition ( attr ) {
                if ( ! isNaN ( attr.value ) ) {
                                alert ( '输入一个han试试吧~~' );
                                attr.value = '';
                } else if ( attr.value == '' ) {
                                alert ( '输入的值不能为空的哦' );
                } else {
                                return true;
                };
}
//数组去重
function dude ( arr ) {
                for( var i=0; i<arr.length; i++ ){
                                for( var j=i+1; j<arr.length; j++ ){
                                                if ( arr[i] == arr[j] ){
                                                                arr.splice( j, 1);
                                                                j--;
                                                };
                                };
                };
                
}
// /按照ID获取页面元素
function getId ( ID ) {
                return document.getElementById ( ID );
}


