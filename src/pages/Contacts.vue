<template>
  <div class="contacts">
    <h2 class="contacts__header">Contacts header</h2>
    <p class="contacts__content">
      Tomsk <br> Lenina, 1 <br> 8-800-8000-800
    </p>
  </div> 
</template>

<style lang="scss" scoped>

.contacts {
  width: 100%;
  height: 100%;
  background: #fff;
  color: #000;
  padding: 10% 60px 5% 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  -ms-overflow-style: none;  
  scrollbar-width: none; 
}

::-webkit-scrollbar { 
  width: 0px;  
  background: transparent;  
}


.contacts__header {
  margin-bottom: 50px;
  font-size: 80px;
  text-align: center;
  text-align: right;
}

.contacts__content {
  font-size: 30px;
  text-align: center;
}

@media screen and (max-width: 480px) {
  .contacts { padding-right: 30px; }
  .contacts__header { font-size: 60px; }
}

</style>