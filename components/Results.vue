<template>
    <div class="d-flex row px-5">
        <Tile
            data-testid="result-tile"
            class="col-12 col-md-4 col-lg-3 px-0" v-for="(result, i) in results"
            :key="i"
            :tile-info="result"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { TileData } from "@/types/types"
import Tile from "@/components/Tile.vue"

export default Vue.extend({
  name: 'Results',
  components: {
    Tile
  },
  props: {
    results: {
        type: Array as () => TileData[],
    }
  }
})
</script>