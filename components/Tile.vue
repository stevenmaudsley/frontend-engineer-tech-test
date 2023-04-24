<template>
    <div>
        <img :src="tileInfo.image" alt="">
        <section>
            <h2  data-testid="tile-title">{{ tileInfo.title }}</h2>
            <p>{{ tileInfo.text }}</p>
            <router-link :to="`/`">Read more ...</router-link>
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