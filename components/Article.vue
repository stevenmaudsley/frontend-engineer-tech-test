<template>
    <div class="position-relative d-flex align-items-center flex-column">
        <h2
            class="py-3 py-lg-5 px-5 px-lg-0"
            data-testid="article-title"
        >
            {{ article.title }}
        </h2>
        <section
            class="info-section"
            :class="[
                'border border-success border-left-0 border-right-0 border-bottom-0',
                'd-flex align-items-center flex-column',
                'p-3'
            ]"
        >
            <p class="text-black-50 py-3">{{ formattedDate }} | {{ article.author }}</p>
            <p class="text-center font-weight-bold py-3 px-5">{{ article.intro }}</p>
        </section>
        <img
            class="pic position-absolute w-75"
            data-testid="article-image"
            :src="article.image"
            alt=""
        >
        <p class="article-text px-5 px-lg-0 py-5">{{ article.text }}</p>
        <related :title="title" />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { TileData } from "@/types/types"
import Related from "@/components/Related.vue"

export default Vue.extend({
  name: 'Article',
  components: {
    Related
  },
  props: {
    article: {
        type: Object as () => TileData,
        required: true
    }
  },
  computed: {
    formattedDate(): string {
        const dateConverted = new Date(this.article.createdAt);
        const date = dateConverted.getDate();
        const month = dateConverted.toLocaleString('default', { month: 'long' });
        const year = dateConverted.getFullYear();
        return `${date}th ${month} ${year}`;
    },
    title(): string {
        return this.article.title;
    }
  },
});
</script>

<style scoped>
.pic {
    aspect-ratio: 16/9;
    z-index: 10;
    top: 350px;
}

.info-section {
    height: 650px;
    background-color: #e8eff3;
}

.article-text {
    width: 100vw;
    text-align: justify;
}

@media only screen and (max-width: 600px) {
    .info-section {
        height: 500px;
        width: 100vw;
    }

    .pic {
        z-index: 10;
        top: 375px;
    }

    .article-text {
        width: 100vw;
    }
}

@media only screen and (min-width: 1020px) {
    .info-section {
        height: 1000px;
        width: 50vw;
    }

    .pic {
        z-index: 10;
        top: 350px;
    }

    .article-text {
        width: 50vw;
    }
}
</style>