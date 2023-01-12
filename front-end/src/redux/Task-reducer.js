import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk("Tasks/getTasks", async ({id}) => {
    return axios
      .get(`http://localhost:9000/usertask/${id}`,)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.data.message;
      });
  });

  export const AddTask = createAsyncThunk("Tasks/Add", async ({task,id}) =>{
    return axios.post(`http://localhost:9000/newlist/${id}`, task)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })

  export const DLTtask = createAsyncThunk("Tasks/DLT", async ({id})=>{
    return axios.delete(`http://localhost:9000/dltlist/${id}`,)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })

  export const taskStatus = createAsyncThunk("Tasks/status", async ({id,status})=>{
    return axios.put(`http://localhost:9000/taskstatus/${id}`,status)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })
  const TaskSlice = createSlice({
    name: "Tasks",
    initialState: {
      task: [],
      taskHandler:[],

      status: "",
      Erreur: "",
    },
    
    reducers: {
    handletask(state){state.task=state.taskHandler},
    filtertask(state,action){
      state.task= state.task.filter((item)=>
       
         item.titre.includes(action.payload));
           
        },
  },
    extraReducers: {
      [getTasks.fulfilled]: (state, action) => {
        state.task = action.payload;
        state.taskHandler = action.payload;
        state.status = "Success";
      },
      [getTasks.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
      },
      [getTasks.pending] : (state)=>{
          state.status = "Pending"
      },
      [AddTask.fulfilled] : (state, action)=>{
        state.task = [...state.task, action.payload];
        state.taskHandler = [...state.taskHandler, action.payload];
          state.status = "Success"
      },
      [AddTask.rejected] : (state, action) =>{
        state.Erreur = action.payload
        state.status = "Rejected"
      },
      [AddTask.pending] : (state) =>{
         state.status = "Pending"
      },
      [DLTtask.fulfilled]: (state, action) => {
        state.task= [...state.task.filter(item=>item._id !== action.payload)];
        state.taskHandler= [...state.taskHandler.filter(item=>item._id !== action.payload)]
        state.status = "Success";
      },
      [DLTtask.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
      },
      [DLTtask.pending] : (state)=>{
          state.status = "Pending"
      },
      [taskStatus.fulfilled]: (state, action) => {
        state.task = [...state.task.map((item)=>
          item._id ===action.payload ? {...item,status : !item.status} : item
          
         
        )];
        
         /* state.taskHandler = [...state.taskHandler.map((item)=>{
            if (item._id ===action.payload) {
              
            }
           
          })];*/
        
        state.status = "Success";
      },
      [taskStatus.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
      },
      [taskStatus.pending] : (state)=>{
          state.status = "Pending"
      },
    },
  });
  export const {filtertask,handletask}=TaskSlice.actions
  export default TaskSlice.reducer;