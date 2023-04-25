<template>
  <div>
    <header-component class="py-2 px-md-1" @searched="blogSearched" />
    <section class="pt-2 pt-md-5 text-white latest">
      <h3 class="py-3 py-md-0 px-3 px-md-5">Latest Article</h3>
      <Tile :tile-info="latestPost" :verticalLayout="false" />
    </section>
    <results class="py-5" :results="showResults"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Results from "@/components/Results.vue";
import HeaderComponent from "@/components/Header.vue"
import { TileData } from "@/types/types"

export default Vue.extend({
  name: 'Blog',
  components: {
    HeaderComponent,
    Results
  },
  data() {
    return {
        articles: [] as TileData[],
        latestPost: {} as TileData,
        searchResults: [] as TileData[],
    }
  },
  created () {
    this.fetch();
  },
  computed: {
    showResults(): TileData[] {
      return this.searchResults.length ? this.searchResults : this.articles;
    }
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
    blogSearched(payload: TileData[]): void {
      payload.length === 0 ? this.searchResults = [] : this.searchResults = payload;
    }
  }
});
</script>

<style scoped>
.latest {
  background-color: #003e52;
}
</style>