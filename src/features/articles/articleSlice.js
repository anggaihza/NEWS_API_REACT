import { createSlice } from '@reduxjs/toolkit';

const articleSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: [],
        selectedArticle: null,
    },
    reducers: {
        setArticles: (state, action) => {
            state.articles = action.payload;
        },
        setSelectedArticle: (state, action) => {
            state.selectedArticle = action.payload;
        },
    },
});

export const { setArticles, setSelectedArticle } = articleSlice.actions;
export default articleSlice.reducer;
