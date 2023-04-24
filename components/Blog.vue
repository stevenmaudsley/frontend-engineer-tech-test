<template>
  <div>
    <Tile v-for="(article, i) in articles" :key="i" :tile-info="article"/>
  </div>
</template>

<script type="ts">
import Vue from "vue"
import { Tile } from "@/components/Tile.vue";

export default Vue.extend({
  name: 'Blog',
  data() {
    return {
        articles: [],
    }
  },
  mounted () {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.articles = await fetch(
        'https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles'
      ).then(res => res.json());
    }
  }
});
</script>
