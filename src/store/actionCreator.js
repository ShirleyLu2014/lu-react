import {
    CHANGE_NAME 
} from "./constants"
function changeName(name) {
    console.log("hahaha")
    return {
        type: CHANGE_NAME,
        name
    }
}
export {
    changeName
}