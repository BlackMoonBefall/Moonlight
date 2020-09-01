import Toast from './Toast'
const obj = {}

obj.install = function (Vue){
  //1.to create a comps creator
  const toastConstructor = Vue.extend(Toast)
  //2.to new a comps obj
  const toast = new toastConstructor()
  //3.mount the comps obj on a element
  toast.$mount(document.createElement('div'))
  //4.append the element to Dom
  document.body.appendChild(toast.$el)
  //5.append $toast to Vue obj
  Vue.prototype.$toast = toast

}



export default obj