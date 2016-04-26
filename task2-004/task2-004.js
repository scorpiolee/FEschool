/**
 * Created by nanianxiaL on 2016/4/22.
 */


/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
                var oCity = document.getElementById('aqi-city-input').value;
                var oValue = document.getElementById('aqi-value-input').value;

                if ( !isNaN( oCity ) ) {
                                alert ( '要输入汉字或者英文哦~~' );
                }else if (isNaN( oValue)){
                                alert( '要整数哦~~' );
                }else{
                                aqiData[oCity] = oValue;
                }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
                var oList = document.getElementById('aqi-table');
                oList.innerHTML = '';

                for( var attr in  aqiData){
                                if ( oList.children.length === 0 ){
                                                oList.innerHTML = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
                                }
                                var oTr = document.createElement('tr');

                                var oTd1 = document.createElement('td');
                                oTd1.innerHTML = attr;
                                oTr.appendChild( oTd1 );

                                var oTd2 = document.createElement('td');
                                oTd2.innerHTML = aqiData[attr];
                                oTr.appendChild( oTd2 );

                                var oTd3 = document.createElement('td');
                                oTd3.innerHTML = '<button class="del">删除</button>';
                                oTr.appendChild( oTd3 );

                                oList.appendChild(oTr);
                }
}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
                addAqiData();
                renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle( target ) {
                var city = target.parentElement.parentElement.children[0].innerHTML;
                delete aqiData[city];
                renderAqiList();
 }
 function init() {
                 // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
                    var oBtn = document.getElementById('add-btn');
                    oBtn.addEventListener( 'click', addBtnHandle );

                  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
                 var oList = document.getElementById('aqi-table');
                 oList.addEventListener( 'click', function ( event ) {
                                 if ( event.target.className = 'del' ){
                                                 delBtnHandle( event.target );
                                 }
                 } )
 }

init();