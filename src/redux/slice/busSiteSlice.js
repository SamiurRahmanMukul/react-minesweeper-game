import { createSlice, current } from '@reduxjs/toolkit';
import sit from '../../data/bus-sit.json';

export const busSitSlice = createSlice({
  name: 'busSit',
  initialState: {
    sits: sit
  },
  reducers: {
    updateSit: (state, actions) => {
      const newArray = current(state.sits);
      let currentSit = newArray[actions.payload.index];
      currentSit = { ...currentSit, name: actions.payload.name, booking: 'Yes' };

      const newArray2 = newArray.map((value, index) => {
        if (index === actions.payload.index) {
          return currentSit;
        }
        return value;
      });

      return {
        ...state,
        sits: newArray2
      };
    }
  }
});

export const { updateSit } = busSitSlice.actions;

export default busSitSlice.reducer;
