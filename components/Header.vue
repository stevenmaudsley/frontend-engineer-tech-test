<template>
    <div class="header d-flex flex-column flex-md-row justify-content-between align-items-center">
        <router-link class="tile-link" :to="`/`">
            <img src="@/assets/logo.png" alt="">
        </router-link>
        <search @searched="blogSearched"/>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import Search from "@/components/Search.vue"
import { TileData } from "@/types/types";

export default Vue.extend({
    name: 'Header',
    components: {
        Search
    },
    methods: {
        blogSearched(payload: TileData): void {
            this.$emit('searched', payload);
        }
    }
})
</script>

<style scoped>
.header {
    background-color: #101921;
}
</style>