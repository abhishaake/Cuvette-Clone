import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './StudentReducer';
import modalReducer from './ModalReducer'
export default configureStore({
  reducer: {
    student: studentReducer,
    modal: modalReducer
  },
});
