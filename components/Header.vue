<template>
    <div class="header d-flex flex-column flex-md-row justify-content-between align-items-center">
        <img src="@/assets/logo.png" alt="">
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