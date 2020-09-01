import Comment from './Comment'
const obj = {}

obj.install = function (Vue){
  //1.to create a comps creator
  const commentConstructor = Vue.extend(Comment)
  //2.to new a comps obj
  const comment = new commentConstructor()
  //3.mount the comps obj on a element
  comment.$mount(document.createElement('div'))
  //4.append the element to Dom
  document.body.appendChild(comment.$el)
  //5.append $comment to Vue obj
  Vue.prototype.$comment = comment

}



export default obj