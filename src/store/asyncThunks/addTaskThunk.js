import {createAsyncThunk} from '@reduxjs/toolkit'
import promiseAction from './promiseAction'

export const addTaskThunk = createAsyncThunk(
  'todos/addTodo',
  async (payload, thunkAPI)=>{
    thunkAPI.dispatch()
    return
  }
)