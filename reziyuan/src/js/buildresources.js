$(function () {
    //定义一个Map,用于记录分类位置
    var types = new Map(),
        showTypes = new Map(),
        showNum_a = 0,
        showNum_b = 0,
        showNum_c = 0
    for (var i = 0; i < 24; i++) {
        types.set($($('.u-uwarp ul li')[i]).html(), i)
    }
    //根据URL所带的type参数改变页面样式
    var typeNum = window.location.search.substr(1)
    $($('.m-myresource li~li')[0]).children('a').addClass('u-ul')
    $($('.m-myresource li~li')[1]).children('a').addClass('u-dl')
    $($('.m-myresource li~li')[2]).children('a').addClass('u-mf')
    if (typeNum === 'type=1') {
        $($('.m-myresource li~li')[0]).children('a').removeClass('u-ul').addClass('z-selected u-ulr')
        $($('.m-myresource li~li')[0]).children('div').show()
    } else if (typeNum === 'type=2') {
        $($('.m-myresource li~li')[1]).children('a').removeClass('u-dl').addClass('z-selected u-dlr')
        $($('.m-myresource li~li')[1]).children('div').show()
    }else if (typeNum === 'type=3') {
        $($('.m-myresource li~li')[2]).children('a').removeClass('u-mf').addClass('z-selected u-mfr')
        $($('.m-myresource li~li')[2]).children('div').show()
    }

    //类型选择效果
    $('.u-uwarp .u-all').click(function () {
        if ($(this).hasClass('z-noselec')) {
            $(this).removeClass('z-noselec')
            $(this).next().children().removeClass('z-selec')
            if ($(this).prev().html() === '科目类别：') {
                for (var i = 0; i < 5; i++) {
                    if (showTypes.has($($(this).next().children()[i]).html())) {
                        showTypes.delete($($(this).next().children()[i]).html())
                        showNum_a--
                        for (var j = 0; j < $('.m-select li').length; j++) {
                            if ($($(this).next().children()[i]).html() === $($('.m-select li')[j]).html()) {
                                $($('.m-select li')[j]).remove()
                            }
                        }
                    }
                }
            } else if ($(this).prev().html() === '资源类型：') {
                for (var i = 0; i < 13; i++) {
                    if (showTypes.has($($(this).next().children()[i]).html())) {
                        showTypes.delete($($(this).next().children()[i]).html())
                        showNum_b--
                        for (var j = 0; j < $('.m-select li').length; j++) {
                            if ($($(this).next().children()[i]).html() === $($('.m-select li')[j]).html()) {
                                $($('.m-select li')[j]).remove()
                            }
                        }
                    }
                }
            } else if ($(this).prev().html() === '文件类型：') {
                for (var i = 0; i < 6; i++) {
                    if (showTypes.has($($(this).next().children()[i]).html())) {
                        showTypes.delete($($(this).next().children()[i]).html())
                        showNum_c--
                        for (var j = 0; j < $('.m-select li').length; j++) {
                            if ($($(this).next().children()[i]).html() === $($('.m-select li')[j]).html()) {
                                $($('.m-select li')[j]).remove()
                            }
                        }
                    }
                }
            }
        }
        //console.log(showTypes, showNum_a, showNum_b, showNum_c)
    })

    $('.u-uwarp ul li').click(function () {
        if (!showTypes.has($(this).html())) {
            $('.m-select ul').append('<li>' + $(this).html() + '</li>')
            showTypes.set($(this).html(), types.get($(this).html()))
            if (types.get($(this).html()) < 5){
                showNum_a++
            } else if (types.get($(this).html()) > 17) {
                showNum_c++
            } else {
                showNum_b++
            }
        }
        //console.log(showTypes, showNum_a, showNum_b, showNum_c)
        $(this).addClass('z-selec')
        $(this).parent().prev().addClass('z-noselec')
        $('.m-select li').unbind('click').click(function () {
            $($('.u-uwarp ul li')[types.get($(this).html())]).removeClass('z-selec')
            $(this).remove()
            if (showTypes.get($(this).html()) < 5){
                showNum_a--
            } else if (showTypes.get($(this).html()) > 17) {
                showNum_c--
            } else {
                showNum_b--
            }
            showTypes.delete($(this).html())
            //console.log(showTypes, showNum_a, showNum_b, showNum_c)
            if (!showNum_a) {
                $($('.u-uwarp .u-all')[0]).removeClass('z-noselec')
            }
            if (!showNum_b) {
                $($('.u-uwarp .u-all')[1]).removeClass('z-noselec')
            }
            if (!showNum_c) {
                $($('.u-uwarp .u-all')[2]).removeClass('z-noselec')
            }
        })
    })
})