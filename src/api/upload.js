import request from '@/utils/request'
export function upload(forData) {
    return request({
        url:'/fastdfs/upload',
        method:'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: forData

    })
}
