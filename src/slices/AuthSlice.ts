import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { TFieldType, TLoginData } from "../types";
import { Login } from "../api/Login";

type TAuthState = {
  form: TLoginData;
  error: string | null;
  sending: boolean;
  login: string | null;
};

const initialState: TAuthState = {
  form: {
    email: "",
    password: "",
  },
  error: null,
  sending: false,
  login: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: TLoginData) => {
    return Login(email, password);
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFormValue: (state, action: PayloadAction<TFieldType<TLoginData>>) => {
      state.form[action.payload.field] = action.payload.value;
    },
  },
  selectors: {
    sendingSelector: (state) => state.sending,
    sendErrorSelector: (state) => state.error,
    authSelector: (state) => state.form,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.error = null;
        state.sending = true;
        state.login = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.sending = false;
        state.error = action.error.message ?? null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.sending = false;
        state.login = action.payload;
      });
  },
});

export const { setFormValue } = authSlice.actions;

export const { sendingSelector, sendErrorSelector, authSelector } =
  authSlice.selectors;
