/**
 * Created by lusha on 2018/7/25.
 */

Function.prototype.bind = Function.prototype.bind || function (context) {
    var aArgs = Array.prototype.slice.call(arguments, 1),  //获取绑定方法时传入的参数
        fun = this;

    var ToBound = function () {
        //被绑定后的方法也可能会传入参数
        //因此aArgs与ToBound中传入的参数进行合并
        fun.apply(context, aArgs.concat(Array.prototype.slice.call(arguments, 0)));
    }
    //考虑到原型
        // 通过new一个新function的方法来避免直接赋值后（ToBound.prototype=fun.prototype），修改ToBound的原型会影响原方法原型
    var F = function () {}
    F.prototype = fun.prototype;
    ToBound.prototype = new F();

    return ToBound;
}
