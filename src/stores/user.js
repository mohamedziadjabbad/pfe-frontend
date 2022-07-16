import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { serverUrl } from "config/server";

const initialState = {
    user: {},
    token: "",
    users: [],
    roles: [],
    categories: [],
    tasks: [],
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
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });

        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
        });

        builder.addCase(getRoles.fulfilled, (state, action) => {
            state.roles = action.payload;
        });

        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        });

        // builder.addCase(getUsers.fulfilled, (state, action) => {
        //     state.users = action.payload;
        // });
    },
});

export const userAuthentication = createAsyncThunk(
    "user/authentication",
    async ({ username, password }, { dispatch }) => {
        try {
            await axios
                .post(`${serverUrl}/users/signin`, {
                    username,
                    password,
                })
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(setUserNotFound(false));
                        dispatch(setToken(res.data.jwt));
                        dispatch(setUser(res.data));
                        dispatch(setIsLogged(true));
                    }
                });
        } catch (e) {
            if (e.response.status === 401) {
                dispatch(setUserNotFound(true));
                dispatch(setIsLogged(false));
                dispatch(setToken(""));
            }
            if (e.response.status === 403) {
                dispatch(setIsLogged(false));
                dispatch(setToken(""));
            }
        }
    }
);

export const getUsers = createAsyncThunk(
    "user/getUsers",
    async (device, { dispatch, getState }) => {
        const { token } = getState().user;
        try {
            await axios
                .get(`${serverUrl}/users`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    return res.data;
                });
        } catch (e) {
            if (e.response.status === 401) {
                dispatch(setUserNotFound(true));
                dispatch(setIsLogged(false));
                dispatch(setToken(""));
            }
            if (e.response.status === 403) {
                dispatch(setToken(""));
                dispatch(setIsLogged(false));
            }
        }
    }
);

export const getRoles = createAsyncThunk(
    "user/getRoles",
    async (device, { dispatch, getState }) => {
        const { token } = getState().user;
        try {
            await axios
                .get(`${serverUrl}/roles`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    return res.data;
                });
        } catch (e) {
            if (e.response.status === 401) {
                dispatch(setUserNotFound(true));
                dispatch(setIsLogged(false));
                dispatch(setToken(""));
            }
            if (e.response.status === 403) {
                dispatch(setToken(""));
                dispatch(setIsLogged(false));
            }
        }
    }
);

export const getTasks = createAsyncThunk(
    "user/getTasks",
    async (device, { dispatch, getState }) => {
        const { token } = getState().user;
        try {
            await axios
                .get(`${serverUrl}/task`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    console.log(res.data);
                    return res.data;
                });
        } catch (e) {
            if (e.response.status === 401) {
                dispatch(setUserNotFound(true));
                dispatch(setIsLogged(false));
                dispatch(setToken(""));
            }
            if (e.response.status === 403) {
                dispatch(setToken(""));
                dispatch(setIsLogged(false));
            }
        }
    }
);

export const getCategories = createAsyncThunk(
    "user/getCategories",
    async (device, { dispatch, getState }) => {
        const { token } = getState().user;
        console.log(token);
        try {
            await axios
                .get(`${serverUrl}/categorie`, { headers: { Authorization: `Bearer ${token}` } })
                .then((res) => {
                    console.log(res.data);
                    return res.data;
                });
        } catch (e) {
            if (e.response.status === 401) {
                dispatch(setUserNotFound(true));
                dispatch(setIsLogged(false));
                dispatch(setToken(""));
            }
            if (e.response.status === 403) {
                dispatch(setToken(""));
                dispatch(setIsLogged(false));
            }
        }
    }
);

// Action creators are generated for each case reducer function
export const { setToken, setUser, setUserNotFound, setIsLogged } = userSlice.actions;

export default userSlice.reducer;
