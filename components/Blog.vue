<template>
  <div class="px-md-5">
    <results :results="articles"/>
  </div>
</template>

<script type="ts">
import Vue from "vue"
import Results from "@/components/Results.vue";

export default Vue.extend({
  name: 'Blog',
  components: {
    Results
  },
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
