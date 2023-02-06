<template>
  <div class="home-page-deatail">
    <div class="glass">
      <span class="size_medium light_color">50 years Exprience</span>
      <p class="size_very_small light_color pt-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores beatae deleniti
        sapiente. Dicta, harum impedit optio quasi rem enim, animi autem error corrupti
        laboriosam dignissimos aspernatur laudantium. Quibusdam, dolore itaque Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Tempore, animi nulla exercitationem
        quibusdam nobis laborum nesciunt, non quam placeat blanditiis corrupti? Iste quae
        sequi adipisci illo, eaque aliquam veniam reiciendis Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Maiores beatae deleniti sapiente. Dicta, harum
        impedit optio quasi rem enim, animi autem error corrupti laboriosam dignissimos
        aspernatur laudantium. Quibusdam, dolore itaque Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempore, animi nulla exercitationem quibusdam nobis
        laborum nesciunt, non quam placeat blanditiis corrupti? Iste quae sequi adipisci
        illo, eaque aliquam veniam reiciendis
      </p>
      <div class="mt-1">
        <baseBtn name="About Us" color="light" />
      </div>
    </div>
  </div>
</template>

<script setup>
import baseBtn from "@/components/base/baseBtn";
</script>

<style lang="scss" scoped>
.home-page-deatail {
  width: 100%;
  height: 100vh;
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
    padding: 0px 50px;
    background: rgba(16, 16, 16, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
}
</style>
