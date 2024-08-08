<template>
    <div class="wrapper">
        <header class="header">
            <div class="header__logo">
                <NuxtLink :to="'#'">
                    <ElementsLogo />
                </NuxtLink>
            </div>
            <div class="header__nav">
                <nav class="nav">
                    <NuxtLink :to="'#'"><IconPhone alt="Phone" :fontControlled="false" filled /></NuxtLink>
                    <NuxtLink :to="'#'"><IconCalculateWhite alt="CalculateWhite" :fontControlled="false" filled /></NuxtLink>
                </nav>
            </div>
        </header>
        <header class="header header_mobile">
            <nav class="nav">
                <!-- <IconLogoText alt="CalculateWhite" :fontControlled="false" filled/> -->
                 <HeaderSwitch />
            </nav>
        </header>
    </div>
</template>

<style lang="sass">
.header
    display: flex
    justify-content: space-between
.nav
    display: flex
    gap: 16px
.header_mobile
    display: none
    // display: flex
    // justify-content: center

</style>