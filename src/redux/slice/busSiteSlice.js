import { createSlice } from '@reduxjs/toolkit';
import sit from '../../data/bus-sit.json';

export const busSitSlice = createSlice({
  name: 'busSit',
  initialState: {
    sits: sit
  },
  reducers: {
    updateSit: (state, actions) => {
      const currentSit = state.sits[actions.payload.index];
      currentSit.name = actions.payload.name;
      currentSit.booking = 'Yes';
    },
    resetSit: (state) => {
      state.sits = sit;
    }
  }
});

export const { updateSit, resetSit } = busSitSlice.actions;

export default busSitSlice.reducer;
