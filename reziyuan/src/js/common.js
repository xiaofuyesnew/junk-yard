/**
 * file name: common.js
 * function: 页面上都会有的效果
 */

$(function () {
    /**------------------------------------------------------------------
     * 效果一：不断向上滚动的列表
     * 
     * 说明：创建一个ListRoll对象，
     * 通过传入config对象来传入配置，
     * 调用相应的方法来实现效果
     */
    
    /**构造函数 */
    function ListRoll(config) {
        this.divName = config.nodeName
        this.ulName = config.nodeName + ' ul'
        this.liName = this.ulName +' li'
        this.length = $(this.liName).length
        this.listHeight = Number(
            $(this.liName).css("height").substring(
                0, $(this.liName).css("height").length - 2
            ))
        this.tolHeightStr = '-' + (this.listHeight * this.length) + 'px'
        this.stat = 1
        this.roll = function () {
            if (this.stat === this.length) {
                if (this.length > 1) {
                    //如果是最后一个li，clone<ul>并重置其位置
                    $(this.divName).append($(this.ulName).clone())
                    $(this.ulName + ':last').css({
                        top: "-" + (this.listHeight * (this.length - 1)) + 'px'
                    });
                    $(this.ulName + ':first').animate({ top: this.tolHeightStr })
                    $(this.ulName + ':last').animate({ top: "-" + (this.listHeight *    this.length) + "px" })
                    this.stat = 1;
                } else {
                    if ($(this.ulName).length === 1) {
                        $(this.divName).append($(this.ulName).clone())
                        $(this.ulName + ':last').css({
                            top: "-" + (this.listHeight * (this.length - 1)) + 'px'
                        });
                        $(this.ulName + ':first').animate({ top: this.tolHeightStr });
                        $(this.ulName + ':last').animate({ top: "-" + (this.listHeight *    this.length) + "px" })
                    } else {
                        $(this.ulName + ':first').remove()
                        $(this.ulName).css({ top: "0" })
                        $(this.divName).append($(this.ulName).clone())
                        $(this.ulName + ':last').css({
                            top: "-" + (this.listHeight * (this.length - 1)) + 'px'
                        });
                        $(this.ulName + ':first').animate({ top: this.tolHeightStr });
                        $(this.ulName + ':last').animate({ top: "-" + (this.listHeight *    this.length) + "px" })
                    }
                }
            } else {
                if ($(this.ulName).length === 2 && this.stat === 1) {
                    $(this.ulName + ':first').remove()
                    $(this.ulName).css({ top: "0" })
                }
                //一般情况，如果不是最后一个，直接向上滚动
                $(this.ulName).animate({ 
                    top: "-" + this.listHeight * this.stat + "px"
                });
                this.stat += 1
            }
        }
    }
    
    /**配置对象config */
    var configLR = {
        nodeName: ".cm-roll"//节点名称
    }
    /**实例化 */
    var listRoll = new ListRoll(configLR)
    /**重复执行 */
    var roll = self.setInterval(function () { listRoll.roll() }, 5000)

    /**--------------------------------------------------------------------------- */
})