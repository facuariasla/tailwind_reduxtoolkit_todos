import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  }
});

// Reducers -> funcion que actualiza un estado
