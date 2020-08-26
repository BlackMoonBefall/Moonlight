import {request} from "./request"

export function getHomeMultidata(){
  return request({
    url:'public/home/multidata.json'
  })
}

export function getHomeGoodsData(page){
  return request({
    url:`public/home/malitem_${page}.json`
  })
}