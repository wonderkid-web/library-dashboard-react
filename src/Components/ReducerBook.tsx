import { useReducer } from "react"


const ReducerBook = () => {
    const reducer = (state, action) => {
        if (action.type === "increment") {
            return {
                ...state,
                data: state.data + action.tambah
            }
        }else if(action.type === "decrement"){
            return{
                ...state,
                data: state.data - action.kurang
            }
        }
    }

    let initialState = {
        data: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={()=>{
                dispatch({
                    type: "decrement",
                    kurang: 3
                })
            }}>-</button>
            <h1>Data: {state.data}</h1>
            <button onClick={()=>{
                dispatch({
                    type: "increment",
                    tambah: 5
                })
            }}>+</button>
        </div>
    )
}

export default ReducerBook