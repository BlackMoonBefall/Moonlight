// import Scroll from 'better-scroll'

// export function Bscroll(config){
//   return new Scroll(config)
// }

export function debounce(func,delay){  // 暂时用不到
  let timer = null
  return function (...args){
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    },delay)
  }
}

