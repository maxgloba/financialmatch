<template>
  <div class="video">
    <button class="video-close" @click="videoClose">+</button>
    <div class="video-container">
      <iframe v-if="name === 'terry'" src="https://player.vimeo.com/video/775714342?h=954dae0d7d&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Financial Match - video.mp4"></iframe>
      <iframe v-if="name === 'robert'" src="https://player.vimeo.com/video/778765213?h=1d35f8f12a&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Financial Match - video.mp4"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name'],
  methods: {
    videoClose(){
      this.$parent.video = false
    }
  }
}
</script>
<style lang="scss" scoped>
.video{
  position: fixed;
  left: 0; top: 0;
  width: 100%;
  height: 100vh;
  padding: 30px;
  z-index: 999;
  background: rgba(0,0,0, .85);
  &-container{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    display: block;
    padding-top: 49%;
    margin: 0 auto;
    @media(min-width:768px){
      width: 700px;
    }
    @media(min-width:1200px){
      width: 1200px;
    }
  }
  iframe{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  &-close{
    position: absolute;
    right: 10px;
    top: 10px;
    transform: rotate(45deg);
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    @media(min-width:768px){
      font-size: 30px;
    }
    @media(min-width:1200px){
      font-size: 60px;
    }
  }
}
</style>