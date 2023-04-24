import { shallowMount } from '@vue/test-utils';
import Results from '@/components/Results.vue';

const results = [
    {
      createdAt: "2021-09-15T02:16:19.162Z",
      author: "David Dickinson",
      image: "http://placeimg.com/640/480",
      title: "Test Title",
      intro: "Quis eligendi animi et esse. Aspernatur recusandae impedit porro dolor labore ab. Asperiores harum consectetur distinctio. Aliquam in eligendi. Nostrum et et ipsum possimus tempore quisquam dolore ipsa. Eum laudantium nulla ut molestiae qui ea.",
      text: "Maiores accusantium facere ea voluptatem. Corrupti aspernatur earum molestiae expedita at molestias laudantium eveniet sunt. Enim illum doloribus hic labore beatae dignissimos error dolorum.\n \rExpedita quo qui occaecati quo. Voluptatem accusantium voluptas. Consequuntur eaque inventore dolor molestiae suscipit.\n \rConsequatur consectetur et eos esse. Soluta cupiditate blanditiis qui ea. Vero dolores sit error sequi. Cupiditate aut eligendi.",
      id: 1
    },
    {
      createdAt: "2021-09-15T03:16:19.162Z",
      author: "Cheryl Dickinson",
      image: "http://placeimg.com/640/480",
      title: "Test Title 1",
      intro: "Quis eligendi animi et esse. Aspernatur recusandae impedit porro dolor labore ab. Asperiores harum consectetur distinctio. Aliquam in eligendi. Nostrum et et ipsum possimus tempore quisquam dolore ipsa. Eum laudantium nulla ut molestiae qui ea.",
      text: "Maiores accusantium facere ea voluptatem. Corrupti aspernatur earum molestiae expedita at molestias laudantium eveniet sunt. Enim illum doloribus hic labore beatae dignissimos error dolorum.\n \rExpedita quo qui occaecati quo. Voluptatem accusantium voluptas. Consequuntur eaque inventore dolor molestiae suscipit.\n \rConsequatur consectetur et eos esse. Soluta cupiditate blanditiis qui ea. Vero dolores sit error sequi. Cupiditate aut eligendi.",
      id: 2
    },
    {
      createdAt: "2021-09-15T01:16:19.162Z",
      author: "David Dickinson",
      image: "http://placeimg.com/640/480",
      title: "Test Title 2",
      intro: "Quis eligendi animi et esse. Aspernatur recusandae impedit porro dolor labore ab. Asperiores harum consectetur distinctio. Aliquam in eligendi. Nostrum et et ipsum possimus tempore quisquam dolore ipsa. Eum laudantium nulla ut molestiae qui ea.",
      text: "Maiores accusantium facere ea voluptatem. Corrupti aspernatur earum molestiae expedita at molestias laudantium eveniet sunt. Enim illum doloribus hic labore beatae dignissimos error dolorum.\n \rExpedita quo qui occaecati quo. Voluptatem accusantium voluptas. Consequuntur eaque inventore dolor molestiae suscipit.\n \rConsequatur consectetur et eos esse. Soluta cupiditate blanditiis qui ea. Vero dolores sit error sequi. Cupiditate aut eligendi.",
      id: 3
    },
    {
      createdAt: "2021-09-15T04:16:19.162Z",
      author: "Cheryl Dickinson",
      image: "http://placeimg.com/640/480",
      title: "Test Title 3",
      intro: "Quis eligendi animi et esse. Aspernatur recusandae impedit porro dolor labore ab. Asperiores harum consectetur distinctio. Aliquam in eligendi. Nostrum et et ipsum possimus tempore quisquam dolore ipsa. Eum laudantium nulla ut molestiae qui ea.",
      text: "Maiores accusantium facere ea voluptatem. Corrupti aspernatur earum molestiae expedita at molestias laudantium eveniet sunt. Enim illum doloribus hic labore beatae dignissimos error dolorum.\n \rExpedita quo qui occaecati quo. Voluptatem accusantium voluptas. Consequuntur eaque inventore dolor molestiae suscipit.\n \rConsequatur consectetur et eos esse. Soluta cupiditate blanditiis qui ea. Vero dolores sit error sequi. Cupiditate aut eligendi.",
      id: 4
    }
  ];

describe('Results', () => {
  test('img', () => {
    const wrapper = shallowMount(Results, {
      propsData: {
        results 
      },
    });
    const resultTile = wrapper.findAll('[data-testid="result-tile"]')
    console.log(resultTile.length);
    expect(resultTile.length).toBe(results.length);
  });
});