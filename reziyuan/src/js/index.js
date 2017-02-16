/**
 * filename: index.js
 * 功能：首页上的特效
 * 
 */

$(function () {
    /**--------------------------------------------------------------------------
     * 效果二：图片展播，带导航点
     * 
     * 说明：更改配置项，两个项，图片轮播外围div和控制按钮的div即可。
     */

    /**构造函数 ---这部分不用动---*/
    function ImgChange (config) {
        this.divName = config.nodeName
        this.spotsName = config.spotsName
        this.ulName = config.nodeName + " ul"
        this.liName = config.nodeName + " li"
        this.length = $(this.liName).length
        this.chage = function () {
            for (var i = 0; i < this.length; i++) {
                if ($($(this.liName)[i]).css("opacity") === '1') {
                    $($(this.liName)[i]).animate({ opacity: "0" })
                    if (i === this.length - 1) {
                        $($(this.liName)[0]).animate({ opacity: "1" })
                        this.spotsChange(0)
                    } else {
                        $($(this.liName)[i + 1]).animate({ opacity: "1" })
                        this.spotsChange(i + 1)
                    }
                }
            }
        }
        this.mouseChange = function (id) {
            for (var i = 0; i < this.length; i++) {
                if ($($(this.liName)[i]).css("opacity") === '1' && i !== id) {
                    $($(this.liName)[i]).animate({ opacity: "0" })
                    $($(this.liName)[id]).animate({ opacity: "1" })
                }
            }
        }
        this.spots = function () {
            for (var i = 0; i < this.length; i++) {
                $(this.spotsName).append('<i id="i' + i + '"></i>')
            }
            $($(this.spotsName + ' i')[0]).css({ backgroundColor: "#8f000b" })
        }
        this.spotsChange = function (i) {
            $(this.spotsName + ' i').css({ backgroundColor: "#ccc" })
            $($(this.spotsName + ' i')[i]).css({ backgroundColor: "#8f000b" })
        }
    }

    /**配置变量 +++可更改配置+++*/
    var configIC = {
        nodeName: ".m-imgshow",
        spotsName: ".u-spots"
    }

    /**实例化 ---不用动---*/
    var imgChange = new ImgChange(configIC)
    
    /**执行程序事件函数 ---不用动---*/
    function runImgChange() {
        imgChange.spots()
        var change = self.setInterval(function () { imgChange.chage() }, 6000)
        $(imgChange.spotsName + ' i').mouseenter(function () {
            change = window.clearInterval(change)
            $(imgChange.spotsName + ' i').css({ backgroundColor: "#ccc" })
            $(this).css({ backgroundColor: "#8f000b" })
            imgChange.mouseChange(Number($(this).attr('id').substring(1)))
        })
        $(imgChange.spotsName + ' i').mouseout(function () {
            change = self.setInterval(function () { imgChange.chage() }, 6000)
        })
    }
    /**运行上述函数 */
    runImgChange()
    /**------------------------------------------------------------------------ */

    /**--------------------------------------------------------------------------
     * 效果三：走马灯
     * 
     * 说明：
     */

    /**构造函数 */
    function Rotate(config) {
        this.divName = config.divName
        this.arrLeft = this.divName + ' ' + config.arrLeft
        this.arrRight = this.divName + ' ' + config.arrRight
        this.center = this.divName + ' ' + config.center
        this.ulName = this.center + ' ul'
        this.liName = this.center + ' li'
        this.length = $(this.liName).length
        this.numTol = [1, 2, 3, 4, 5]
        this.layer_1 = 1
        this.layer_2 = [2, this.numTol[(this.numTol.length - 1)]]
        this.layer_3 = [3, this.numTol[(this.numTol.length - 2)]]
        this.init = function () {
            if (this.length < 5) {
                //补足空位
                for (var i = 0; i < 5 - this.length; i++) {
                    $(this.ulName).append('<li><img src="img/index/covers/default.png"><p>暂无电子杂志</p></li>')
                }
            } else {
                //装载数据
                if (this.length !== 5) {
                    for (var i = 0; i < this.length - 5; i++)
                    this.numTol.push(i + 6)
                }
            }
            console.log(this.numTol)
        }
    }

    /**配置参数 */
    var configRT = {
        divName: ".m-rotate",
        arrLeft: ".u-left",
        arrRight: ".u-right",
        center: ".u-center"
    }


    /**实例化走马灯 */
    var rotate = new Rotate(configRT)

    /**运行 */
    rotate.init()


    /**------------------------------------------------------------------------- */


    /**--------------------------------------------------------------------------
     * 功能：图片详情字数限制
     */
    /*
    if ($('.u-imginfo p').html().length > 40) {
        $('.u-imginfo p').html($('.u-imginfo p').html().substring(0, 48) + '...')
    }
    console.log($('.u-imginfo p').html().length)
    */

    /**-------------------------------------------------------------------------- */
})
