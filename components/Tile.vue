<template>
  <div
      class="d-flex p-md-3 flex-column d-flex justify-content-center"
  >
      <img
          class="pic mw-100 align-self-center"
          :src="tileInfo.image"
          alt=""
      >
      <section class="py-5">
          <h5
            data-testid="tile-title" 
            class="py-2">{{ tileInfo.title }}
          </h5>
          <p class="text text-black-50 my-3">{{ tileInfo.text }}</p>
          <router-link class="text-success" :to="`/`">Read more ...</router-link>
      </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { TileData } from "@/types/types"

export default Vue.extend({
name: 'Tile',
props: {
  tileInfo: {
      type: Object as () => TileData,
      required: true
  }
}
})
</script>

<style scoped>
.pic {
  aspect-ratio: 1/1;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
}
</style>