import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = {
        id: action.payload.id,
        front: action.payload.front,
        back: action.payload.back
      }
    }
  }
});

export const cardSelector = (id) => (state) => state.cards.cards[id];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;