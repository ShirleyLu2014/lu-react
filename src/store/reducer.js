import {
    CHANGE_NAME 
} from "./constants"
const defaultState = {
    name: "lulu"
}
// 定义reducer函数
const reducer = (state = defaultState, action) => {
    console.log("原来的数据", state, action)
    switch(action.type) {
        case CHANGE_NAME:
            return { 
                ...state, name: action.name
            }
        default:
            return { ...state }
        }   
    
}
export {
    reducer
}