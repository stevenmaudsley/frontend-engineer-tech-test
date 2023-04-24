<template>
    <div>
        <Article :article="article" />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { TileData } from "@/types/types"
import Article from "@/components/Article.vue"

export default Vue.extend({
  name: 'article',
  components: {
    Article
  },
  data() {
    return {
        article: {} as TileData,
    }
  },
  mounted () {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.article = await fetch(
        `https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles/${this.$route.params.id}`
      ).then(res => res.json());
    }
  }
});
</script>