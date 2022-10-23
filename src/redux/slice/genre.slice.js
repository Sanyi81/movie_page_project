import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genres: [],
    currentGenre: null,
    loading: false,
    error: null,
    genreFromAPI: null
};

const getAll = createAsyncThunk (
    'genreSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk (
    'genreSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await genreService.getById(id);
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const genreSlice = createSlice ({
    name: 'genreSlice',
    initialState,
    reducers: {
        setCurrentGenre: (state, action) => {
            state.currentGenre = action.payload
        }
    },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.genreFromAPI = action.payload
            })
});

const {reducer: genreReducer, actions: {setCurrentGenre}} = genreSlice;

const genreActions = {
    getAll,
    setCurrentGenre,
    getById
};

export {
    genreActions,
    genreReducer
};