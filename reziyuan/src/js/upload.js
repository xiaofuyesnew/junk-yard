function imguploader(imgupload, showimg, info) {
    $(imgupload).change(function () {
        $(showimg).css({
            backgroundImage: "none"
        })
        if (!$(this).val()) {
            $(info).html('没有选择文件...')
            return
        }
        
        var file = $(this).prop('files')[0],
            size = (file.size / 1024).toFixed(1)
        $(info).html(
            '文件名称: ' + file.name + '<br>' +
            '文件大小: ' + size + 'kb'
        )
        if (file.type !== 'image/jpeg' &&
            file.type !== 'image/png' &&
            file.type !== 'image/gif' &&
            file.type !== 'image/jpg') {
            $(info).html('不是有效的图片文件...')
            return
        }
        
        var reader = new FileReader()
        reader.onload = function (e) {
            var data = e.target.result
            $(showimg).css({
                backgroundImage: "url(" + data + ")",
                backgroundSize: "100px 100px"
            })
        }
        reader.readAsDataURL(file)
    })
}

function attuploader(attupload, info, rtype) {
    $(attupload).change(function () {
        if (!$(this).val()) {
            $(info).html('没有选择文件...')
            return
        }
        
        var file = $(this).prop('files')[0],
            size = (file.size / 1024).toFixed(1)
        $(info).html(
            '文件名称: ' + file.name + '<br>' +
            '文件大小: ' + size + 'kb'
        )
        if (rtype === 'video') {
            if (file.type !== 'video/mp4') {
                $(info).html('不是有效的资源文件...')
                return
            }
        } else if (rtype === 'doc') {
            if (file.type !== 'text/plain' &&
                file.type !== 'application/pdf' &&
                file.type !== 'application/msword' &&
                file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&
                file.type !== 'application/vnd.ms-excel' &&
                file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' &&
                file.type !== 'application/vnd.ms-powerpoint' &&
                file.type !== 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
                $(info).html('不是有效的资源文件...')
                return
            }
        }
        
    })
}