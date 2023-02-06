<template>
  <div class="sappurt-banner">
    <div class="glass">
      <span class="size_medium light_color">Best Support</span>
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
import baseBtn from '@/components/base/baseBtn'
</script>

<style lang="scss" scoped>
.sappurt-banner {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("https://www.qmul.ac.uk/welfare/media/advice-and-counselling-service/new-site-assets/wellbeing-support/iStock-909025844-2-700x350.jpg");
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
