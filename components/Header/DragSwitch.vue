<script setup>
const props = defineProps(['checked'])

const makeDragable = (element) => {
  const position = reactive({
    init: false,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    isDragging: false,
    dragStartX: null,
    dragStartY: null,
  });
  // compute style
  const style = computed(() => {
    if (position.init) {
        return {
          left: position.x + "px",
          cursor: position.isDragging ? "grab" : "pointer"
        };
    }
    return {};
  });
  // create  mouse interaction functions
  const onMouseDown = (e) => {
    e.stopPropagation();
    let { clientX } = e.touches ? e.touches[0] : e;
    el.value.classList.remove('toggle__switch_animate')
    position.dragStartX = clientX - position.x;

    position.isDragging = true;

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("touchmove", onMouseMove);
  };
  const onMouseMove = (e) => {
    e.stopPropagation();
    let maxLeft = elParent.value.getBoundingClientRect(elParent).width - position.width;
    let { clientX } = e.touches ? e.touches[0] : e;
    if((clientX - position.dragStartX) > 2){
      if((clientX - position.dragStartX) <= maxLeft - 2)
        position.x = clientX - position.dragStartX;
      else
        position.x = maxLeft-2;
    } else if ((clientX - position.dragStartX) <= 2){
      position.x = 2;
    }
  };
  const onMouseUp = (e) => {
    e.stopPropagation();
    let { clientX } = e.changedTouches ? e.changedTouches[0] : e;
    let maxLeft = elParent.value.getBoundingClientRect(elParent).width - position.width;
    if((clientX - position.dragStartX) > Math.round(maxLeft / 2)){
      el.value.classList.add('toggle__switch_animate')
      position.x = maxLeft-2;
      navigateTo('/contacts')
    }
    else if((clientX - position.dragStartX) <= Math.round(maxLeft / 2)){
      el.value.classList.add('toggle__switch_animate')
      position.x = 2;
      navigateTo('/')
    }
    position.isDragging = false;
    position.dragStartX = null;

    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("touchend", onMouseUp);
    document.removeEventListener("touchmove", onMouseMove);
  };
  // assign mousedown listener
  watch(element, element => {
    if (!element instanceof HTMLElement) return;
    let rect = element.getBoundingClientRect(element);

    position.init = true;
    position.y = Math.round(rect.y);
    position.width = Math.round(rect.width);
    position.height = Math.round(rect.height);
    
    if(props.checked){
      let maxLeft = elParent.value.getBoundingClientRect(elParent).width - position.width;
      position.x = maxLeft - 2;
    } else {
      position.x = 2;
    }

    element.addEventListener("mousedown", onMouseDown);
    element.addEventListener("touchstart", onMouseDown);
  });
  // return objects
  return { position, style };
};
const el = ref(null);
const elParent = ref(null)
const { position, style } = makeDragable(el);
</script>

<template>
  <div ref="elParent" class="toggle">
    <div ref="el" :style="style" class="toggle__switch"><img src="/images/LogoImage.png" alt="LogoImage"></div>
  </div>
</template>

<style lang="sass">
.toggle
    position: relative
    height: 54px
    width: 169px
    background-color: $card
    border-radius: 32px
    box-sizing: border-box
    padding: 2px
    overflow: hidden

.toggle__switch
    position: absolute
    cursor: pointer
    height: 50px
    aspect-ratio: 1
    background-color: $white
    border-radius: 32px
    display: flex
    align-items: center
    justify-content: center
.toggle__switch::before, .toggle__switch::after
    position: absolute
    top: 50%
    transform: translateY(-50%)
    @include font-styles(14px, 400, normal, 0, $gray200)
.toggle__switch::before
    content: 'главная'
    left: -85px
.toggle__switch::after
    content: 'контакты'
    right: -85px

.toggle__switch_animate
    @include fast-transition
</style>
