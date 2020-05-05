import ajax from './ajax'

export function reqBaseCategoryList(){
    return ajax({
        method:'Get',
        url:'/product/getBaseCategoryList'
    })
}

export function reLogin(mobile,password){
    return ajax({
        method:'POST',
        url:'/user/passport/login',
        data:{mobile,password}
    })
}