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

  test('Tests double click in the right control', async() => {
    await rightControl.trigger('click');
    await rightControl.trigger('click');
    expect(containerNavigation.element.scrollLeft).toEqual(504);
  })

  test('The slide navigation slides to left on click inside the left control', async () => {
    await rightControl.trigger('click');
    await leftControl.trigger('click');

    expect(containerNavigation.element.scrollLeft).toEqual(0);
  });

  test('Tests double click in the left control', async () => {
    await rightControl.trigger('click');
    await rightControl.trigger('click');
    
    expect(containerNavigation.element.scrollLeft).toEqual(504);
    
    await leftControl.trigger('click');
    await leftControl.trigger('click');

    expect(containerNavigation.element.scrollLeft).toEqual(0);
  });
})

describe('Test SlideCard', () => {
  const wrapper = mount(SlideNavigation);
  
  test('Activate SlideCard on a click', async () => {
    const SlideCard = wrapper.getComponent('[data-test="slide-card"]');

    await SlideCard.trigger('click');
    expect(SlideCard.classes('card--active')).toBe(true);
  })

  test('Deactivated other ones', async () => {
    const ListSlideCards = wrapper.findAllComponents('[data-test="slide-card"]');
    const firstSlideCard = ListSlideCards[0];

    await firstSlideCard.trigger('click');
    expect(firstSlideCard.classes('card--active')).toBe(true);

    ListSlideCards.forEach((currentCard, index) => {
      if(index != 0) {
        expect(currentCard.classes('card--active')).toBe(false);
      }
    });
  })
})