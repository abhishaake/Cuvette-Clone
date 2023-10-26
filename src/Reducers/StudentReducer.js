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
        if(action.payload.rank){  
            let val = parseInt(action.payload.rank);
            if(val!==NaN) state.rank = val;
        }
        if(action.payload.percentile) {
            let val = parseInt(action.payload.percentile);
            if(val!==NaN) state.percentile = val;
        }
        if(action.payload.score) {
            let val = parseInt(action.payload.score);
            if(val!==NaN) state.score = val;
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = studentSlice.actions
export const getStudentData = (state) => {return {rank:state.student.rank,score:state.student.score,percentile:state.student.percentile};}

export default studentSlice.reducer