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
        setToken(state, action) {
            state.token = action.payload;
        },
        setUserNotFound(state, action) {
            state.userNotFound = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
        setIsLogged(state, action) {
            state.isLogged = action.payload;
        },
        setUsers(state, action) {
            state.users = action.payload;
        },
        setCatergories(state, action) {
            state.categories = action.payload;
        },
        setRoles(state, action) {
            state.roles = action.payload;
        },
        setTasks(state, action) {
            state.tasks = action.payload;
        },
    },
    extraReducers: (builder) => {},
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
                    dispatch(setUsers(res.data));
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

export const createUser = createAsyncThunk(
    "user/createUser",
    async (user, { dispatch, getState }) => {
        const { token } = getState().user;
        try {
            console.log(user);
            await axios
                .post(
                    `${serverUrl}/users`,
                    {
                        username: user.username,
                        password: user.password,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        phone: user.phone,
                        email: user.email,
                        enable: true,
                        roles: [
                            {
                                id: user.role,
                            },
                        ],
                    },
                    { headers: { Authorization: `Bearer ${token}` } }
                )
                .then((res) => {
                    dispatch(getUsers());
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

export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async (userId, { dispatch, getState }) => {
        const { token } = getState().user;
        try {
            await axios
                .delete(`${serverUrl}/users/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    dispatch(getUsers());
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
                    dispatch(setRoles(res.data));
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
                    dispatch(setTasks(res.data));
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
                    dispatch(setCatergories(res.data));
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

export const signOut = createAsyncThunk("user/signOut", async (userId, { dispatch, getState }) => {
    try {
        dispatch(setToken(""));
        dispatch(setIsLogged(false));
    } catch (e) {}
});

// Action creators are generated for each case reducer function
export const {
    setToken,
    setUser,
    setUserNotFound,
    setIsLogged,
    setUsers,
    setRoles,
    setCatergories,
    setTasks,
} = userSlice.actions;

export default userSlice.reducer;
