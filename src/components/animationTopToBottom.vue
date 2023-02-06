<template>
  <div class="animationTopToBottom">
    <div class="glass"></div>
  </div>
</template>

<style lang="scss" scoped>
.animationTopToBottom {
  width: 100;
  height: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 3s animationTopToBottom;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("https://fullsuitcase.com/wp-content/uploads/2020/10/Best-roads-in-the-world-Lamar-Valley-in-Yellowstone-National-Park.jpg.webp");
  .glass {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 50px;
    background: rgba(16, 16, 16, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
}
@keyframes animationTopToBottom {
  0% {
    height: 0;
  }
  50% {
    height: 100vh;
  }
  100% {
    height: 0px;
  }
}
</style>
