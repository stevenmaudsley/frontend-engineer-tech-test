<template>
  <div
      class="d-flex"
      :class="[
          verticalLayout ? 'flex-column d-flex justify-content-center p-md-3' 
          : 'flex-column flex-lg-row align-items-center p-md-5'
      ]"
  >
      <img
          class="image col-lg-6 px-0 mw-100 align-self-center"
          :class="{ 'horizontal-image': verticalLayout }"
          :src="tileInfo.image"
          alt=""
      >
      <section class="py-5 px-0" :class="[verticalLayout ? '' : 'px-4 px-md-0 px-lg-4 col-lg-6']">
          <h4
            data-testid="tile-title" 
            class="text-truncate py-2">{{ tileInfo.title }}
          </h4>
          <p
            class="text my-3"
            :class="[verticalLayout ? 'text-black-50' : 'text-white']"
            data-testid="tile-text"
          >
            {{ tileInfo.text }}
          </p>
          <router-link class="text-success" :to="`/article/${tileInfo.id}`">Read more ...</router-link>
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
    },
    verticalLayout: {
        type: Boolean,
        default: true,
    }
  }
})
</script>

<style scoped>
.image {
  aspect-ratio: 16/9;
}

.horizontal-image {
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

@media only screen and (max-width: 600px) {
  .image {
    aspect-ratio: 1/1;
  }
}
</style>