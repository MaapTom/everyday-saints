import { beforeEach, describe, expect, it, test } from 'vitest';
import { useModalStore } from '../modal';
import { setActivePinia, createPinia } from 'pinia';

describe('test modal store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('set modal state true', () => {
    const modalStore = useModalStore();
    expect(modalStore.stateModal).toBe(false);

    modalStore.setOpenModal();
    expect(modalStore.stateModal).toBe(true);
  })

  test('set modal state false', () => {
    const modalStore = useModalStore();
    modalStore.setOpenModal();
    expect(modalStore.stateModal).toBe(true);

    modalStore.setCloseModal();
    expect(modalStore.stateModal).toBe(false);
  })
})

