import { shallowMount } from '@vue/test-utils';
import Article from '@/components/Article.vue';

describe('Tile', () => {
  test('Title', () => {
    const article = {
      createdAt: "2021-09-15T01:16:19.162Z",
      author: "Cheryl Dickinson",
      image: "http://placeimg.com/640/480",
      title: "facilis voluptatem repellat",
      intro: "Quis eligendi animi et esse. Aspernatur recusandae impedit porro dolor labore ab. Asperiores harum consectetur distinctio. Aliquam in eligendi. Nostrum et et ipsum possimus tempore quisquam dolore ipsa. Eum laudantium nulla ut molestiae qui ea.",
      text: "Maiores accusantium facere ea voluptatem. Corrupti aspernatur earum molestiae expedita at molestias laudantium eveniet sunt. Enim illum doloribus hic labore beatae dignissimos error dolorum.\n \rExpedita quo qui occaecati quo. Voluptatem accusantium voluptas. Consequuntur eaque inventore dolor molestiae suscipit.\n \rConsequatur consectetur et eos esse. Soluta cupiditate blanditiis qui ea. Vero dolores sit error sequi. Cupiditate aut eligendi.",
      id: 1
    };
    const wrapper = shallowMount(Article, {
      propsData: {
        article 
      }
    });
    const articleImage = wrapper.find('[data-testid="article-image"]');
    expect(articleImage.attributes('src')).toBe("http://placeimg.com/640/480");
  });
});