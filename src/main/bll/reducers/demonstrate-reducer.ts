const initState = {

}
type InitialStateType = typeof initState
export const demonstrateReducer = (state: InitialStateType = initState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}
