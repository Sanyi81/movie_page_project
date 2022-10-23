import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    currentMovie: null,
    loading: false,
    error: null,
    movieFromAPI: null
};

const getAll = createAsyncThunk (
    'movieSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk (
    'movieSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice ({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentMovie: (state, action) => {
            state.currentMovie = action.payload
        }
    },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload
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
                state.movieFromAPI = action.payload
            })
});

const {reducer: movieReducer, actions: {setCurrentMovie}} = movieSlice;

const movieActions = {
    getAll,
    setCurrentMovie,
    getById
};

export {
    movieActions,
    movieReducer
};