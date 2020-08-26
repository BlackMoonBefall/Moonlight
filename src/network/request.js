import axios from 'axios'

export function request(config){  //
  const instance = axios.create({
    baseURL: 'http://192.168.1.101:3000',//到时候修改
    timeout: 5000
  })//设置完成


  //拦截器在这里写 instance.interceptors.response.use(res=>{},err=>{})
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log("加载失败了");
    return err
  })
  //开始发送网络请求
  return instance(config)
}         












//备用接口2
export function requestpass(){

}