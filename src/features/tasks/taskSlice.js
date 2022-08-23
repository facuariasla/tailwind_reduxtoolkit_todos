import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

// Pueden haber distintos slices
export const taskSlice = createSlice({
  // Nombre del state
  name: "tasks",
  // Estado inicial
  initialState: initialState,
  // Multiples funciones que permiten actualizar el estado:
  reducers: {
    addTasks: (state, action) => {
      console.log(state, action.payload);
      // Lo unico que recibe de la UI es el 'action'
      // El state es el presente en este slice
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      // Lo unico que recibe de la UI es el action
      // El state es el presente en este slice
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        // Funcion que remueve el objeto con id que viene del state 
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    editTask: (state, action) => {
      const {id, title, description} = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if(foundTask){
        foundTask.title = title;
        foundTask.description = description;
      }
    },
  },
});

export const { addTasks, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
