<template>
    <div class="related p-5 d-flex flex-column flex-lg-row justify-content-between">
        <h2
            class="px-5 pb-3 col-12 col-lg-3 text-center text-lg-right"
        >
            Related news articles
            <span class="text-success">:</span>
        </h2>
        <Tile
            data-testid="result-tile"
            v-for="(post, i) in relatedPosts"
            :key="i"
            :tile-info="post"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { TileData } from "@/types/types"
import Tile from "@/components/Tile.vue";

export default Vue.extend({
    name: 'Related',
    components: {
        Tile
    },
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            articles: [] as TileData[],
            relatedPosts: [] as TileData[],
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
            this.findRelatedPost();
        },
        findRelatedPost(): void {
            this.relatedPosts = [...this.articles]
                .filter((post: TileData) => post.title === this.title).slice(0, 3);
        }
    }
})
</script>

<style scoped>
    .related {
        background-color: #e8eff3;
    }
</style>