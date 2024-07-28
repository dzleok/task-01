// store.test.ts

import { describe, it, expect } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import selectedReducer from '../features/selectedSlice';

describe('Redux Store', () => {
  it('should configure the store with the selectedReducer', () => {
    const store = configureStore({
      reducer: {
        selected: selectedReducer,
      },
    });

    const state = store.getState();

    expect(state.selected).toBeDefined();
  });

  it('should have the correct types for RootState and AppDispatch', () => {
    const store = configureStore({
      reducer: {
        selected: selectedReducer,
      },
    });

    type RootState = ReturnType<typeof store.getState>;
    type AppDispatch = typeof store.dispatch;

    const state: RootState = store.getState();
    expect(state).toBeDefined();

    const dispatch: AppDispatch = store.dispatch;
    expect(dispatch).toBeDefined();
  });
});
