import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeSaintImage from '../src/components/HomeSaintImage.vue';

test('render a large or a small image', async () => {
  const wrapper = mount(HomeSaintImage, {
    props: {
      largeDisplayImage: '../../public/santa_maria_goretti_expand.jpg',
      smallDisplayImage: '../../public/santa_maria_goretti.jpg',
      largeScreen: true,
      acessibleDescription: "Imagem de Santa Maria Goretti, por..."
    }
  })

  expect(wrapper.find('[data-test="image-test"]').attributes('src')).toBe('../../public/santa_maria_goretti_expand.jpg')
 
  await wrapper.setProps({ largeScreen: false })

  expect(wrapper.find('[data-test="image-test"]').attributes('src')).toBe('../../public/santa_maria_goretti.jpg')
})