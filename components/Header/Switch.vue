<script setup>
const props = defineProps(["checked"]);
</script>

<template>
  <div class="wrapper__div">
    <!-- <svg
      class="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
    >
      preserveAspectRatio="xMaxYmax meet"
      <defs>
        <mask id="hole">
          <rect width="100%" height="100%" fill="white" />
          <svg
            width="41"
            height="44"
            viewBox="0 0 41 44"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYmax meet"
          >
            <path
              d="M14.1379 14.5C3.29885 13 0.157088 4.33333 0 0V28C0 36.8366 7.16344 44 16 44H41C31.9517 42.4 28.7471 34.3333 28.2759 30.5C27.3333 25.5 25.0373 16.0083 14.1379 14.5Z"
              fill="black"
            />
          </svg>
        </mask>
      </defs>
      <rect fill="red" width="100%" height="100%" mask="url(#hole)" />
    </svg> -->

    <div id="box">
        <mask id="hole" maskUnits="objectBoundingBox">
            <!-- <path d="M14.1379 14.5C3.29885 13 0.157088 4.33333 0 0V28C0 36.8366 7.16344 44 16 44H41C31.9517 42.4 28.7471 34.3333 28.2759 30.5C27.3333 25.5 25.0373 16.0083 14.1379 14.5Z" fill="black"/> -->
             <!-- <circle></circle> -->
        </mask>
      <div id="innerbox">
        Content
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.wrapper__div
    max-width: 600px
    height: 300px
.svg
    position: absolute
    height: 100%
    bottom: 0
    left: 0
#box
    mask: radial-gradient(ellipse 50% 50% at 0 0, transparent 100%, #000 0), linear-gradient(#fff, #fff)
    mask-composite: exclude
    mask-position: bottom left
    mask-repeat: no-repeat
    border-radius: 30px
    background-color: $white
    position: relative
    height: 206px
    width: 400px
</style>
