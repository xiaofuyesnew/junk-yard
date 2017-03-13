$(function () {
    //根据URL所带的type参数改变页面样式
    var typeNum = window.location.search.substr(1)
    if (typeNum === 'type=1') {
        $('.m-bar li~li').children('a').removeClass('u-select')
        $($('.m-bar li~li')[0]).children('a').addClass('u-select')
    } else if (typeNum === 'type=2') {
        $('.m-bar li~li').children('a').removeClass('u-select')
        $($('.m-bar li~li')[1]).children('a').addClass('u-select')
    }else if (typeNum === 'type=3') {
        $('.m-bar li~li').children('a').removeClass('u-select')
        $($('.m-bar li~li')[2]).children('a').addClass('u-select')
    }else if (typeNum === 'type=4') {
        $('.m-bar li~li').children('a').removeClass('u-select')
        $($('.m-bar li~li')[3]).children('a').addClass('u-select')
    }else if (typeNum === 'type=5') {
        $('.m-bar li~li').children('a').removeClass('u-select')
        $($('.m-bar li~li')[4]).children('a').addClass('u-select')
    }

    //标签页移动效果
    $('.m-cgheader li').hover(function () {
        //标签样式更改
        if (!$(this).hasClass('z-hover')) {
            $('.m-cgheader li').removeClass('z-hover')
            $(this).addClass('z-hover')
        }
        //内容切换
        if ($(this).html() === '全部') {
            $('.m-all').show()
            $('.m-new').hide()
            $('.m-hot').hide()
        } else if ($(this).html() === '最新') {
            $('.m-all').hide()
            $('.m-new').show()
            $('.m-hot').hide()
        } else if ($(this).html() === '最热') {
            $('.m-all').hide()
            $('.m-new').hide()
            $('.m-hot').show()
        }
    })

    function listPut(element) {
        if ($(element).length < 4) {
            $(element).css({
                marginRight: "15px"
            })
            $(element).parent().css({
                justifyContent: "flex-start"
            })

        }
    }

    listPut('.m-all li')
    listPut('.m-new li')
    listPut('.m-hot li')
})