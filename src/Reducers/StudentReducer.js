import { createSlice } from '@reduxjs/toolkit'

export const studentSlice = createSlice({
  name: 'student',
  initialState: {
    score: 11,
    rank: 12890,
    percentile: 88 
  },
  reducers: {
    update: (state,action) => {
        if(action.payload.rank)  state.rank = action.payload.rank;
        if(action.payload.percentile) state.percentile = action.payload.percentile;
        if(action.payload.score) state.score = action.payload.score;
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = studentSlice.actions
export const getStudentData = (state) => {return {rank:state.student.rank,score:state.student.score,percentile:state.student.percentile};}

export default studentSlice.reducer