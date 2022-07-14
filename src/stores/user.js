import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { serverUrl } from "../config/server";

const initialState = {
    user: {},
    token: "",
    isLogged: false,
    userNotFound: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUserNotFound: (state, action) => {
            state.userNotFound = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(userAuthentication.pending, (state) => {
        //     state.loading = true;
        // });
        // builder.addCase(userAuthentication.fulfilled, (state, action) => {
        //     state.user = action.payload;
        //     state.token = action.payload.jwt;
        //     state.userNotFound = false;
        //     state.loading = false;
        // });
        // builder.addCase(userAuthentication.rejected, (state) => {
        //     state.loading = false;
        // });
    },
});

export const userAuthentication = createAsyncThunk(
    "user/authentication",
    async ({ username, password, navigation }, { dispatch }) => {
        try {
            await axios
                .post(`${serverUrl}/users/signin`, {
                    username,
                    password,
                })
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.data.jwt);
                        dispatch(setUserNotFound(false));
                        dispatch(setToken(res.data.jwt));
                        dispatch(setUser(res.data));
                        dispatch(setIsLogged(true));
                    }
                });
        } catch (e) {
            if (e.response.status === 401) {
                dispatch(setUserNotFound(true));
            }
            if (e.response.status === 403) {
                dispatch(setIsLogged(false));
            }
        }
    }
);

// Action creators are generated for each case reducer function
export const { setToken, setUser, setUserNotFound, setIsLogged } = userSlice.actions;

export default userSlice.reducer;
