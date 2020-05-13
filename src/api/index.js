import ajax from './ajax'
import mockAjax from './mockAjax'
/* 
请求获取3级分类列表
*/
export function reqBaseCategoryList() {
  return ajax({
    method: 'GET',
    url: '/product/getBaseCategoryList'
  })
}
export function reqLogin (mobile, password) {
  return ajax({
    method: 'POST',
    url: '/user/passport/login',
    data: {mobile, password}
  })
}
/* mock接口对应的接口请求函数 */
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')
/* 
根据搜索的条件参数对象获取商品列表数据
*/
export const reqProductList = (searchParams) => ajax({
  url: '/list',
  method: 'POST',
  data: searchParams
})
export const reqProduct = (skuId) => ajax(`/item/${skuId}`) 
export const reqAddToCart = (skuId, skuNumChange) => ajax.post(`/cart/addToCart/${skuId}/${skuNumChange}`)

/* 
获取购物车列表
/api/cart/cartList GET
*/
export const reqCartLit = () => ajax('/cart/cartList')
/* 
切换商品选中状态
*/
export const reqCheckCartItem = (skuId, isChecked) => ajax(`/cart/checkCart/${skuId}/${isChecked}`)
/* 
删除购物车商品
*/
export const reqDeleteCartItem = () => ajax.delete(`/cart/deleteCart/${skuId}`)



