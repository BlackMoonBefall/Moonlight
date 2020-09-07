import {request} from "./request"


export function getRankData(page){
  return request({
    url:`public/home/malitem_${page}.json`
  })
}