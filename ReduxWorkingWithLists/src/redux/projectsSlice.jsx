import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    activeTabId: 'STATIC', // Set the default active tab
  },
  reducers: {
    setActiveTabId: (state, action) => {
      state.activeTabId = action.payload;
    },
  },   
});



export const { setActiveTabId } = projectsSlice.actions;
export const selectActiveTabId = (state) => state.projects.activeTabId;
export default projectsSlice.reducer;
