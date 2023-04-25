<template>
  <div>
    <section class="pt-2 pt-md-5 text-white latest">
      <h3 class="py-3 py-md-0 px-3 px-md-5">Latest Article</h3>
      <Tile :tile-info="latestPost" :verticalLayout="false" />
    </section>
    <results class="py-5" :results="articles"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Results from "@/components/Results.vue";
import { TileData } from "@/types/types"

export default Vue.extend({
  name: 'Blog',
  components: {
    Results
  },
  data() {
    return {
        articles: [] as TileData[],
        latestPost: {} as TileData,
    }
  },
  created () {
    this.fetch();
  },
  methods: {
    async fetch(): Promise<void> {
      this.articles = await fetch(
        'https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles'
      ).then(res => res.json());
      this.findEarliestPost();
    },
    findEarliestPost(): void {
      this.latestPost = [...this.articles].sort(function compare(a, b) {
        return new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf();
      })[this.articles.length -1];
    },
  }
});
</script>

<style scoped>
.latest {
  background-color: #003e52;
}
</style>