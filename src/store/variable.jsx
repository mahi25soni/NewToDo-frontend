import { atom } from "recoil";


export const taskList = atom({
    key : "taskList",
    default : [{}]
})

export const userToken = atom({
    key : "userToken",
    default : ""
})

export const newTaskVariable = atom({
    key : "newTaskVariable",
    default : []
})