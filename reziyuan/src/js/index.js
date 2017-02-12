/**
 * filename: index.js
 * 功能：首页上的特效
 * 
 */


$(function () {
    /**--------------------------------------------------------------------------
     * 效果二：图片展播，带导航点
     * 
     * 说明：
     */

    /**构造函数 */
    function ImgChange (config) {
        this.divName = config.nodeName
        this.spotsName = config.spotsName
        this.ulName = config.nodeName + " ul"
        this.liName = config.nodeName + " li"
        this.length = $(this.liName).length
        this.chage = function (now, next) {

        }
        this.spots = function () {
            for (var i = 0; i < this.length; i++) {
                $(this.spotsName).append('<i></i>')
            }
        }
        this.spotsChange = function () {
            
        }
        this.nowItem = function () {
            return 
        }
        this.nextItem = function () {
            return
        }
    }

    /**配置变量 */
    var configIC = {
        nodeName: ".m-imgshow",
        spotsName: ".u-spots"
    }

    /**实例化 */
    var imgChange = new ImgChange(configIC)

    /**执行程序 */
    imgChange.spots()

    /**------------------------------------------------------------------------ */

    /**-----------------------------------------------------------
     * 效果三：走马灯
     * 
     * 说明：
     */


})
