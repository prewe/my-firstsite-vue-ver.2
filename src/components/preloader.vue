<template>
    <transition appear name="preloader">
        <div class="preloader">
            <div class="logo-wrapper">
                <div class="item-wrap">
                    <transition appear name="logo-animation">
                        <div class="logo__item">L</div>
                    </transition>
                </div>
                <div class="item-wrap">
                    <transition appear name="logo-animation">
                        <div class="logo__item">O</div>
                    </transition>
                </div>
                <div class="item-wrap">
                    <transition appear name="logo-animation">
                        <div class="logo__item">G</div>
                    </transition>
                </div>
                <div class="item-wrap">
                    <transition appear name="logo-animation">
                        <div class="logo__item">O</div>
                    </transition>
                </div>
                
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    
    
}
</script>

<style lang="scss" scoped>

.preloader {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-wrapper {
    height: 100px;
    display: flex;
}

.logo__item {
    width: 100px;
    height: 100px;
    font-size: 100px;
    text-align: center;
    line-height: 100px;
}

.item-wrap {
    overflow: hidden;
}

.logo-animation-enter-active {
    transition: all 2s;
}

.logo-animation-enter {
    opacity: 0;
    transform: translateX(-100%);
}

.preloader-enter-active {
    transition: all 1s;
}

.preloader-leave-active {
    transition: all 1s;
    
}

.preloader-enter, .preloader-leave-to {
    opacity: 0;
}

@media screen and (max-width: 480px) {
    .logo__item { font-size: 70px; width: 70px; height: 70px; }
}

</style>


