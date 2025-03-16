import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from "./Courses/enrollmentReducer";
import coursesReducer from "./Courses/enrollmentReducer";
import assignmentsReducer from "./Courses/enrollmentReducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    coursesReducer,
    accountReducer,
    enrollmentReducer,
  },
});
export default store;