<script setup>
const router = useRoute();
</script>


<template>
    <div class="wrapper">
        <header class="header header_desktop">
            <div class="header__logo">
                <NuxtLink :to="'/'">
                    <ElementsLogo />
                </NuxtLink>
            </div>
            <div class="header__nav">
                <nav class="nav">
                    <NuxtLink :to="'/contacts'"><IconPhone class="nav__icon" alt="Phone" :fontControlled="false" filled /></NuxtLink>
                    <NuxtLink :to="'/services'"><IconCalculateWhite class="nav__icon" alt="CalculateWhite" :fontControlled="false" filled /></NuxtLink>
                </nav>
            </div>
        </header>
        <header class="header header_mobile">
            <nav class="nav">
                <NuxtLink v-if="router.name === 'contacts'" :to="'/'">
                    <HeaderSwitch :checked="true"/>
                </NuxtLink> 
                <NuxtLink v-else :to="'/contacts'">
                    <HeaderSwitch />
                </NuxtLink> 
            </nav>
        </header>
    </div>
</template>

<style lang="sass">
.header
    padding-top: 50px
    display: flex
    justify-content: space-between
    margin-bottom: 24px
    padding-bottom: 24px
    @include adaptive-padding
.nav
    display: flex
    gap: 16px
.header_mobile
    display: none
.nav__icon path
    @include fast-transition
.nav__icon:hover path
    stroke: $accent
    
.router-link-active .nav__icon path
    stroke: $accent

@media (max-width: 768px)
    .header_desktop
        display: none
    .header_mobile
        display: flex
        justify-content: center
</style>