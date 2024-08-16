<template>
    <div class="logo">
        <img class="logo__image" src="@/assets/images/LogoImage.png" alt="logo-image" />
        <IconLogoText class="logo__text logo__text_desktop" alt="logo-text" :fontControlled="false" filled />
        <IconLogoTextMobile class="logo__text logo__text_mobile" alt="logo-text" :fontControlled="false" filled />
    </div>
</template>

<style lang="sass">
.logo
    display: flex
    align-items: flex-end
    justify-content: center
.logo__text
    margin-left: 4px
    padding-bottom: 5px
.logo__text_mobile
    display: none
@media (max-width: 768px)
    .logo
        max-height: 29px
    .logo__image
        height: 29px
    .logo__text_mobile
        display: block
        padding-bottom: 3px
    .logo__text_desktop
        display: none
@media (max-width: 425px)
    .logo__text_mobile
        display: none
</style>