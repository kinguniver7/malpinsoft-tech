export const initialState = {
    mainMenu:{
        items:[
            {order: 100, name:"Tests", patch:"tests"},
            {order: 1, name:"C# / .NET", patch:"c-sharp"}
        ],
        selectedPatch:"tests"
    }
}

export default function navigationReducer(state = initialState, action) {
  return state;
}