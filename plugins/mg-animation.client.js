export default ({ app }, inject) => {
  inject('mgAnimation', () => {
    setTimeout(()=>{
      const offset = ( window.scrollY + window.innerHeight * .6 ).toFixed()
      const animBlocks = document.querySelectorAll('[data-anim]')
      const animation = el => {
        el.classList.add(`animate__${el.dataset.anim}`)
        if(el.dataset.delay) el.style.animationDelay = `${el.dataset.delay}ms`
        if(el.dataset.duration) el.style.animationDuration = `${el.dataset.duration}ms`
        el.removeAttribute('data-anim')
      }
      if(animBlocks.length > 0){
        animBlocks.forEach(item => {
          let itemOffset = item
          for (let i = 0; i < Number(item.dataset.parent); i++) {
            itemOffset = itemOffset.parentNode
          }
          if(offset > itemOffset.offsetTop) animation(item)
        })
      }
    }, 50)
  })
}