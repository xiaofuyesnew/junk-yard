$(function () {
    //定义Map,用于记录分类位置
    var types = new Map(),
        showTypes = new Map(),
        showNum_a = 0,
        showNum_b = 0,
        showNum_c = 0
    for (var i = 0; i < 24; i++) {
        types.set($($('.u-uwarp ul li')[i]).html(), i)
    }

    //上传弹窗
    $('.m-upload').click(function () {
        $('.cm-mask').show(function () {
            $(this).animate({
                opacity: "1"
            }, 300)
        })
        $('.m-popup').show(function () {
            $(this).animate({
                left: "220px",
                opacity: "1"
            }, 300)
        })
    })

    $('.m-btns .u-btnc').click(function () {
        $('.cm-mask').animate({
            opacity: "0"
        }, 300, function () {
            $(this).hide()
        })
        $('.m-popup').animate({
            left: "200px",
            opacity: "0"
        }, 300, function () {
            $(this).hide()
        })
    })

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

    //详情描述字数处理
    for (var i = 0; i < $('.u-info p').length; i++) {
        if ($($('.u-info p')[i]).html().length > 160) {
            $($('.u-info p')[i]).html($($('.u-info p')[i]).html().substr(0, 160) + '...')
            $($('.u-info p')[i]).show()
        } else if (!$($('.u-info p')[i]).html().length) {
            $($('.u-info p')[i]).html('暂无详情')
            $($('.u-info p')[i]).show()
        } else {
            $($('.u-info p')[i]).show()
        }
    }

    //收藏样式效果
    $('.u-icons .favor').click(function () {
        if ($(this).hasClass('f')) {
            $(this).removeClass('f').addClass('c')
            $(this).html('取消收藏')
        } else {
            $(this).removeClass('c').addClass('f')
            $(this).html('收藏')
        }
    })

    //分页按钮样式
    var pages = $('.m-pages .u-num').length,
        re = /\d+/
    $('.m-pages .u-num').click(function () {
        if (!$(this).hasClass('z-nums')) {
            $('.m-pages .u-num').removeClass('z-nums')
            $(this).addClass('z-nums')
        }
    })
    $('.m-pages .u-next').click(function () {
        if (parseInt($('.m-pages .z-nums').html()) < pages) {
            $('.m-pages .z-nums').removeClass('z-nums').next('.u-num').addClass('z-nums')
        }
    })
    $('.m-pages .u-prev').click(function () {
        if (parseInt($('.m-pages .z-nums').html()) > 1) {
            $('.m-pages .z-nums').removeClass('z-nums').prev('.u-num').addClass('z-nums')
        }
    })
    $('.m-pages button').click(function () {
        if (!$('.m-pages input').val()) {
            alert('请输入页码...')
        } else if (parseInt($('.m-pages input').val()) > pages || parseInt($('.m-pages input').val()) <= 0) {
            alert('输入超出范围...')
        } else if (!re.test($('.m-pages input').val())){
            alert('请输入数字...')
        } else {
            $('.m-pages .u-num').removeClass('z-nums')
            $($($('.m-pages .u-num')[parseInt($('.m-pages input').val()) - 1])).addClass('z-nums')
        }
    })


    //资源类型切换
    $('input[name="ftype"]').click(function () {
        if ($(this).val() === "1") {
            if ($('.u-text').css('display') === 'none') {
                $('.u-text').show()
                $('.u-video').hide()
            }
        } else if ($(this).val() === "2") {
            if ($('.u-video').css('display') === 'none') {
                $('.u-text').hide()
                $('.u-video').show()
            }
        }
    })

    //使用上传的函数，资源封面上传从upload.js文件定义的函数
    imguploader('.m-cover input', '.u-photo', '.m-cover p')
    attuploader('.u-text input', '.u-text p', 'doc')
    attuploader('.u-video input', '.u-video p', 'video')
})