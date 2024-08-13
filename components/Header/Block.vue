<template>
    <div class="wrapper">
        <header class="header">
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
                 <HeaderSwitch />
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
.nav
    display: flex
    gap: 16px
.header_mobile
    display: none
    // display: flex
    // justify-content: center
.nav__icon path
    @include fast-transition
.nav__icon:hover path
    stroke: $accent
    
.router-link-active .nav__icon path
    stroke: $accent
</style>