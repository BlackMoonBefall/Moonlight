import {request} from "./request"

export function getDetailData(iid){
  return request({
    url:`public/home/${iid}.json`
  })
}