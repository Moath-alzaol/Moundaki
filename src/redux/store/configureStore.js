import { persistReducer, persistStore } from "redux-persist";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import rootReducer from "../RootReducer";
import api from "../middleware/api";

const persistedReducer = persistReducer({ key: "Task", storage }, rootReducer);

const store = configureStore({ reducer: persistedReducer, middleware: [...getDefaultMiddleware({ serializableCheck: false }), api] });

const persistor = persistStore(store);

export { store, persistor };
