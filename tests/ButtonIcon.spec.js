import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonIcon from '../src/components/ButtonIcon.vue'

test('render text value', () => {
  const wrapper = mount(ButtonIcon, {
    props: {
      textValue: 'Test button',
      iconName: 'Icon',
      backgroundColor: '#DDD',
      backgroundHover: 'tomato',
      largeButton: true
    }
  })

  const buttonIcon = wrapper.get('[data-test="button"]')

  expect(buttonIcon.text()).toBe('Test button')
})

test('render a large or a small wrapper class', async () => {
  const wrapper = mount(ButtonIcon, {
    props: {
      textValue: 'Test button',
      iconName: 'Icon',
      backgroundColor: '#DDD',
      backgroundHover: 'tomato',
      largeButton: true
    }
  })

  expect(wrapper.get('[data-test="button"]').classes()).toContain('button--large')

  await wrapper.setProps({largeButton: false})

  expect(wrapper.get('[data-test="button"]').classes()).toContain('button--small')
})

test('check slots are being rendered', () => {
  const wrapper = mount(ButtonIcon, {
    props: {
      textValue: 'Test button',
      iconName: 'Icon',
      backgroundColor: '#DDD',
      backgroundHover: 'tomato',
      largeButton: true
    },
    slots: {
      default: 'Test icon slot'
    }
  })
  expect(wrapper.html()).toContain('Test icon slot')
})
