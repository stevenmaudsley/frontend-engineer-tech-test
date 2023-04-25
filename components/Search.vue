<template>
    <div class="d-flex flex-row py-2">
        <input type="text" v-model="input" :keyup="filteredList" placeholder="Enter a search term" />
        <button class="search-button border-0" @click="searchClicked">Search</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { TileData } from "@/types/types"

export default Vue.extend({
  name: 'search',
  data() {
        return {
            articles: [] as TileData[],
            filteredData: [] as TileData[],
            input: "",
        }
  },
  created () {
        this.fetch();
  },
  computed: {
    filteredList(): void {
        this.filteredData = this.articles.filter((post) =>
            post.title.toLowerCase().includes(this.input.toLowerCase())
        );
    }
  },
  methods: {
    async fetch(): Promise<void> {
      this.articles = await fetch(
        'https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles'
      ).then(res => res.json());
    },
    searchClicked() {
        this.$emit('searched', this.filteredData);
        this.input = "";
    }
  }
})
</script>

<style scoped>
.search-button {
    background-color: #2dc98a;
}
</style>