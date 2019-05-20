<template>
  <div class="about">
    <h2 class="about__header">About header</h2>
    <p class="about__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem unde neque eos sed veritatis pariatur itaque? Iste, commodi ut. Obcaecati quis doloribus placeat accusamus, fugiat ducimus veritatis architecto amet culpa ipsum optio perspiciatis minima? Pariatur, mollitia obcaecati veniam officiis reiciendis recusandae est maiores sint, incidunt id ipsa magnam placeat, debitis reprehenderit totam fugiat voluptate. Officiis neque magni quas ea excepturi, voluptatem dolores totam aut? Nobis repellat cupiditate, quis voluptate ea, fugit, modi fuga veritatis quisquam libero provident. Impedit aliquam facere laboriosam quae soluta nostrum consequatur ratione cum quos provident at nam consequuntur ipsam optio quis voluptatem quam explicabo tempora odit, nemo voluptatibus ab ducimus. Maxime reiciendis saepe quod nostrum natus hic quia, doloribus illum! Ipsam rerum commodi placeat quis consequuntur, minus sapiente nihil corrupti maxime, recusandae totam velit nesciunt, eius consectetur voluptatem facilis? Ullam cupiditate impedit aperiam, eum optio magni quis dicta asperiores est dolore porro assumenda autem eveniet harum tenetur similique expedita minima et voluptatum aliquam doloremque labore! Animi eum dolorem fugiat reprehenderit minus alias nam laborum suscipit, quibusdam blanditiis, necessitatibus debitis architecto consectetur quasi nihil eveniet itaque! Modi, totam dolorem! Culpa praesentium repellendus, sunt accusamus vero illum tempora doloremque molestiae doloribus, unde officiis temporibus nihil deleniti molestias?</p>
  </div> 
</template>

<style lang="scss" scoped>

.about {
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


.about__header {
  margin-bottom: 50px;
  font-size: 80px;
  text-align: right;
}

.about__content {
  font-size: 30px;
  text-align: justify;
}

@media screen and (max-width: 480px) {
  .about { padding-right: 30px; }
  .about__header { font-size: 60px; }
  .about__content { font-size: 24px; }
}

</style>