import { configureStore } from '@reduxjs/toolkit'
import currentSlice from '../config/currentSlice'
export const store = configureStore({
  reducer: {
    currency: currentSlice, 

  },
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch