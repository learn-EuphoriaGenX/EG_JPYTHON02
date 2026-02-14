import { createSlice } from '@reduxjs/toolkit';


const init = {
    email: "",
    password: "",
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState: init,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.password = action.payload.password
            state.isLoggedIn = true
            localStorage.setItem("user", JSON.stringify({
                email: action.payload.email,
                password: action.payload.password,
                isLoggedIn: true
            }))
        },
        unsetUser(state) {
            state.email = "";
            state.password = "";
            state.isLoggedIn = false
            localStorage.removeItem("user")
        }
    }
})
export const { setUser, unsetUser } = authSlice.actions
export default authSlice.reducer