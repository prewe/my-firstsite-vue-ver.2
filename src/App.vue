<template>
  <div id="app">
    <preloader v-if="!isLoaded"></preloader>
    <transition name="main-menu">
      <div class="wrap" v-if="isLoaded">
        <nav class="menu-wrapper">
          <div class="menu__block-1" :class="{ 'open-menu-block-1': !isMenu }">
            <ul class="menu" :class="{ 'open-menu-fix': !isMenu }" >
              <li class="menu__item" @click="[isMenu = !isMenu, isHome()]" :class="{ 'active-menu': activeMenu == 'Home' }">
                <router-link to="/" >Home</router-link>
                <transition name="arrow">
                  <div class="arrow" v-if="activeMenu == 'Home'"></div>
                </transition>
              </li>
              <li class="menu__item" @click="[isMenu = !isMenu, isAbout()]" :class="{ 'active-menu': activeMenu == 'About' }">
                <router-link to="/About" >About</router-link>
                <transition name="arrow">
                  <div class="arrow" v-if="activeMenu == 'About'"></div>
                </transition>
              </li>
              <li class="menu__item" @click="[isMenu = !isMenu, isGallery()]" :class="{ 'active-menu': activeMenu == 'Gallery' }">
                <router-link to="/Gallery" >Gallery</router-link>
                <transition name="arrow">
                  <div class="arrow" v-if="activeMenu == 'Gallery'"></div>
                </transition>
              </li>
              <li class="menu__item" @click="[isMenu = !isMenu, isContacts()]" :class="{ 'active-menu': activeMenu == 'Contacts' }">
                <router-link to="/Contacts" >Contacts</router-link>
                <transition name="arrow">
                  <div class="arrow" v-if="activeMenu == 'Contacts'"></div>
                </transition>
              </li>
            </ul>
            <span class="menu__line" :class="{ 'menu__line-animate': !isMenu }"></span>
          </div>
          <div class="menu__block-2" :class="{ 'open-menu-block-2': !isMenu }"></div>
        </nav>
        <main class="main">
        
          <router-view></router-view>
        
        </main>
      </div>
    </transition>  
  </div>
</template>

<script>



export default {
  name: 'app',
  data() {
    return {
      isLoaded: false,
      isMenu: true,
      activeMenu: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 2000);
  },
  methods: {
    isHome() {
      (this.activeMenu.length > 1) ? this.activeMenu = '' : this.activeMenu = 'Home';
    },
    isAbout() {
      (this.activeMenu.length > 1) ? this.activeMenu = '' : this.activeMenu = 'About';
    },
    isGallery() {
      (this.activeMenu.length > 1) ? this.activeMenu = '' : this.activeMenu = 'Gallery';
    },
    isContacts() {
      (this.activeMenu.length > 1) ? this.activeMenu = '' : this.activeMenu = 'Contacts';
    }
  }
  
  
  
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  position: relative;
  width: 100%;
  height: 100vh;
  color: #fff;
  overflow: hidden;
}

.arrow {
  width: 100px;
  height: 102px;
  background: red url('assets/right-arrow.svg') no-repeat 95%;
  position: absolute;
  top: -1px;
  right: 0;
  transition: .5s;
  &:hover {
    transform: translateX(20px);
    transition: .5s;
  }
}

.wrap {
  width: 100%;
  height: 100%;
}

.menu-wrapper {
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  
}

.menu__block-1,
.menu__block-2 {
  width: 50%;
  height: 100%;
  background: #000;
  transition: 1s;
  transition-delay: .5s;
}

.menu__block-1 {
  position: relative;
  z-index: 2;
}

.menu__block-2 {
  z-index: 1;
}

.menu {
  position: absolute;
  width: 100%;
  height: 80%;
  max-width: 400px;
  min-width: 260px;
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transform: translateY(-50%) translateX(50%);
  list-style: none;
  transition: 1s;
}

.open-menu-fix {
  transform: translateX(0) translateY(-50%);
  transition: 1.5s;
  transition-delay: 1s;
}

.open-menu-block-1 {
  transform: translateX(-100%);
  transition: 1s ;
  transition-delay: 1s;
}

.open-menu-block-2 {
  transform: translateX(100%);
  transition: 1s;
  transition-delay: 1s;
}

.menu__line {
  width: 2px;
  height: 100%;
  display: block;
  background: #fff;
  z-index: 1;
  transition: 1s;
  transition-delay: 1.5s;
  position: absolute;
  top: 0;
  right: 1px;
  z-index: -1;
}

.menu__line-animate {
  height: 0;
  transition: 1s
}

.menu__item {
  width: 100%;
  height: 100px;
  position: relative;
  transition: 0.5s;
  
}

.menu__item a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  line-height: 100px;
  text-align: center;
  display: block;
  border: 3px solid #fff;
  background: #000;
  font-size: 36px;
  transition: .2s;
  &:hover {
    border-color: red;
    color: red;
    transition: .2s;
  }
}

.active-menu {
  transform: translateX(50px);
  transition: all 1s !important; 
  transition-delay: 3s !important;
  
}

.main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.arrow-enter-active {
  transition: all .5s;
  transition-delay: 2s;
}

.arrow-leave-active {
  transition: all 1s;
}

.arrow-enter, .arrow-leave-to  {
  opacity: 0;
}

.main-menu-enter-active {
    transition: all 1s;
}

.main-menu-preloader-leave-active {
    transition: all 1s;
    
}

.main-menu-enter, .main-menu-leave-to {
    opacity: 0;
}

</style>
