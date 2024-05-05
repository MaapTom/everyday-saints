import { beforeEach, describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import SlideNavigation from '../src/components/SlideNavigation.vue';

describe('Test slide controls', () => {
  let wrapper;
  let rightControl;
  let leftControl;
  let containerNavigation;
  beforeEach(() => {
    wrapper = mount(SlideNavigation);
    leftControl = wrapper.get('[data-test="leftControl"]');
    rightControl = wrapper.get('[data-test="rightControl"]');
    containerNavigation = wrapper.get('[data-test="containerNavigation"]');
  });

  test('The slide navigation slides to right on click inside the right control', async () => {
    await rightControl.trigger('click');

    expect(containerNavigation.element.scrollLeft).toEqual(252);
  });

  test('The slide navigation slides to left on click inside the left control', async () => {
    await rightControl.trigger('click');
    await leftControl.trigger('click');

    expect(containerNavigation.element.scrollLeft).toEqual(0);
  });
})

