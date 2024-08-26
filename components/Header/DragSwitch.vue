<script setup>
const makeDragable = (element) => {
//   const elParentDiv = elParent.value
//   const maxLeft = elParent.value.getBoundingClientRect(elParent)
//   console.log(maxLeft);
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
        position: "absolute",
        left: position.x + "px",
        // top: position.y + "px",
        // width: position.width + "px",
        // height: position.height + "px",
        // "box-shadow": position.isDragging
        //   ? "3px 6px 16px rgba(0, 0, 0, 0.15)"
        //   : "",
        cursor: position.isDragging ? "grab" : "pointer"
      };
    }
    return {};
  });

  // create  mouse interaction functions
  const onMouseDown = (e) => {
    e.stopPropagation();
    let { clientX, clientY } = e;
    position.dragStartX = clientX - position.x;
    position.dragStartY = clientY - position.y;

    position.isDragging = true;

    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
  };
  const onMouseMove = (e) => {
    e.stopPropagation();
    // let maxLeft = elParent.value.getBoundingClientRect(elParent).width;
    let maxLeft = elParent.value.getBoundingClientRect(elParent).width - position.width;
    // console.log(maxLeft);
    let { clientX, clientY } = e;
    console.log(clientX - position.dragStartX);
    if((clientX - position.dragStartX) > 0){
        if((clientX - position.dragStartX) <= maxLeft)
            position.x = clientX - position.dragStartX;
        else
            position.x = maxLeft;
    } else if ((clientX - position.dragStartX) < 0){
        position.x = 0;
    }


    position.y = clientY - position.dragStartY;
  };
  const onMouseUp = (e) => {
    e.stopPropagation();
    let { clientX, clientY } = e;
    position.isDragging = false;
    position.dragStartX = null;
    position.dragStartY = null;
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  };

  // assign mousedown listener
  watch(element, element => {
    if (!element instanceof HTMLElement) return;
    let rect = element.getBoundingClientRect(element);

    position.init = true;
    // position.x = Math.round(rect.x);
    position.x = 0;
    position.y = Math.round(rect.y);
    position.width = Math.round(rect.width);
    position.height = Math.round(rect.height);

    element.addEventListener("mousedown", onMouseDown);
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
    <div ref="el" :style="style" class="toggle__switch"></div>
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

.toggle__switch
    cursor: pointer
    height: 50px
    aspect-ratio: 1
    background-color: $white
    border-radius: 32px
</style>
