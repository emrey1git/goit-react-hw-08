// redux/store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage kullanımı

import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import authReducer from "./auth/slice";

// 🔐 Sadece auth slice'ı persist edilecek (token saklamak için)
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"], // sadece token saklansın (istersen 'user' da eklenebilir)
};

// 🧠 Reducer'ları birleştir
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: persistReducer(authPersistConfig, authReducer), // auth reducer'ı persist'li
});

// 🏗️ Store kurulumu
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // persist'in bazı özel action'larını yoksay
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 🔄 Persistor oluştur
export const persistor = persistStore(store);
