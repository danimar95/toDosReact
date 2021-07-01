import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});

export const addTodoAsync = createAsyncThunk("todos/addTodoAsync", async (payload) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: payload.title, completed: payload.completed, id: payload.id }),
  });

  if (response.ok) {
    const todo = await response.json();
    return { todo };
  }
});

export const deleteTodoAsync = createAsyncThunk("todos/deleteTodoAsync", async (payload) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${payload.id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    return { id: payload.id };
  }
});

export const editTodoAsync = createAsyncThunk("todos/editTodoAsync", async (payload) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${payload.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: payload.title, completed: payload.completed }),
  });
  if (response.ok) {
    const todo = await response.json();
    return { id: todo.id, title: todo.title, completed: todo.completed };
  }
});

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: action.payload.completed,
      };
      state.unshift(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].title = action.payload.title;
      state[index].completed = action.payload.completed;
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos.reverse();
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.unshift(action.payload.todo);
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    [editTodoAsync.fulfilled]: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].title = action.payload.title;
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
