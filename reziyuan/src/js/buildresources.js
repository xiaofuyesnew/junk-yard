$(function () {
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

    console.log($($('.m-myresource li~li')[0]).children('a'))
})