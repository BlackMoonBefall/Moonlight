import {request} from "./request"

export function getBookData(iid){
  return request({
    url:`public/home/${iid}.json`
  })
}

export function getBookContent(content){
  return request({
    url: content
  })
}