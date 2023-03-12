import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getTask: (state, action) => {
            state.value = action.payload
        },
        checkTask: (state,action) => {
            const {id, checked} = action.payload
           state.value = state.value.map((item)=> {
                if(id !== item.id) return item
                return {
                    ...item,
                    checked
                }
            })
        },
        deleteTask: (state, action) => {
            const id = action.payload
            state.value = state.value.filter((item) => item.id !== id)
        },
        addTask: (state, action) => {
            const {label, id} = action.payload
            const arr = state.value
            arr.push({
                id,
                label,
                checked: false
            })
            state.value = arr
        }
    },
})

// Action creators are generated for each case reducer function
export const { getTask, checkTask, deleteTask, addTask } = tasks.actions

export default tasks.reducer