import { storage } from "@/utils/storage";

export const localStorageMiddleware =
  (store: any) => (next: any) => (action: any) => {
    const result = next(action);

    // Handle auth state
    if (action.type.startsWith("auth/")) {
      const authState = store.getState().auth;
      if (authState.user) {
        storage.set("user", JSON.stringify(authState.user));
      }
    }

    return result;
  };
