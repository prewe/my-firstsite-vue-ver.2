<template>
  <div class="gallery">
    <h2 class="gallery__header">Gallery header</h2>
    <div class="gallery__content">
      <div class="work work-1"></div>
      <div class="work work-2"></div>
      <div class="work work-3"></div>
      <div class="work work-4"></div>
      <div class="work work-5"></div>
      <div class="work work-6"></div>
    </div>
  </div> 
</template>




<style lang="scss" scoped>

.gallery {
  width: 100%;
  height: 100%;
  background: #fff;
  color: #000;
  padding: 60px 60px 5% 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -ms-overflow-style: none;  
  scrollbar-width: none; 
  overflow-y: auto;
}

::-webkit-scrollbar { 
  width: 0px;  
  background: transparent;  
}

.gallery__header {
  margin-bottom: 50px;
  font-size: 80px;
  text-align: center;
  text-align: right;
}

.gallery__content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}

.work {
  max-width: 900px;
  width: 32%;
  height: 400px;
  background: url('../assets/cat1.jpg') no-repeat center;
  margin: 10px;
}

@media screen and (max-width: 1400px) {
  .work { width: 45%; }
}

@media screen and (max-width: 1000px) {
  .work { width: 90%; }
}

@media screen and (max-width: 480px) {
  .gallery { padding: 30px; }
  .gallery__header { font-size: 60px; }
  .work { margin: 10px 0; width: 100%; height: 260px; }
}




</style>