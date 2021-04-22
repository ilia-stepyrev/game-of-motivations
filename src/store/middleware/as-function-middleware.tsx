export const asFunctionMiddleware = (store: any) => (next: any) => (action: any) => {
    if (typeof action !== 'function') {
        return next(action);
    }

    const a = action(store.getState());
    return next(a);
};
