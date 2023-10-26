import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false
  },
  reducers: {
    updateModal: (state) => {
        state.value = !state.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateModal } = modalSlice.actions
export const getModalData = (state) => {return state.modal.value}

export default modalSlice.reducer