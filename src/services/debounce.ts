export const debounce = (fn: () => any, ms: number) => {
    let timer: any;

    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn();
      }, ms)
    };
  }