/**
 * Created by nanianxiaL on 2016/4/24.
 */

/*    思路分析：  遍历二叉树：

                                首先将以root为根节点的整个二叉树放进数组，然后找到root点的左孩子（第一项）和右孩子（最后一项）；
                                                然后将这两项分别作为参数递归调用自身函数，找到这两项放到数组，再将这两项的左右孩子为参数递归；

                            先序：根节点-------左孩子-------右孩子
                            中序：左孩子-------根节点-------右孩子
                            后序：左孩子-------右孩子-------根节点

                            颜色显示：因为数组中为遍历之后的顺序存放的；定义一个定时器，分别将每一项的背景显示出来即可

                          给按钮添加点击事件：执行遍历和颜色显示，（每个点击事件都得重新将数组归0）

                     改进：三个按钮点击事件之后进行的内容有些重复，可以另外写一个  重置函数，将遍历函数执行所需的变量定时器重置

  */


var treeRoot = document.getElementsByClassName('root')[0];
var divList = [];

var oBtn1 = document.getElementById('btn1');
var oBtn2 = document.getElementById('btn2');
var oBtn3 = document.getElementById('btn3');


oBtn1.onclick = function (  ) {
                divList = [];
                preOrder( treeRoot );
                colorChange();
}
oBtn2.onclick = function (  ) {
                divList = [];
                inOrder( treeRoot );
                colorChange();
}
oBtn3.onclick = function (  ) {
                divList = [];
                postOrder( treeRoot );
                colorChange();
}

function colorChange (  ) {
                var i = 0;
                divList[i].style.backgroundColor = 'pink';
                timer = setInterval(function (  ) {
                                i++;
                                if ( i<divList.length ){
                                                divList[i-1].style.backgroundColor = '#ffffff';
                                                divList[i].style.backgroundColor = 'pink';
                                }else {
                                                clearInterval( timer );
                                                divList[divList.length-1].style.backgroundColor = '#ffffff';
                                }
                },500)
}


//前序遍历
function preOrder ( node ) {
                if ( !(node == null) ){
                                divList.push( node );
                                preOrder( node.firstElementChild );
                                preOrder(  node.lastElementChild );
                }
}

//后序遍历
function postOrder ( node ) {
                if ( !(node == null) ){
                                preOrder( node.firstElementChild );
                                preOrder(  node.lastElementChild );
                                divList.push( node );
                }
}

//中序遍历
function inOrder ( node ) {
                if ( !(node == null) ){
                                preOrder( node.firstElementChild );
                                divList.push( node );
                                preOrder(  node.lastElementChild );
                }
}
