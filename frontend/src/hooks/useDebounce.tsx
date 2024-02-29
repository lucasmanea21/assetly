import { useState, useEffect } from "react";

/**
 * useDebounce Hook
 *
 * This hook returns a debounced value that only updates after a specified delay
 * has passed without any new changes. It's useful for delaying operations like
 * search queries until the user has stopped typing.
 *
 * @param {any} value The value to debounce.
 * @param {number} delay The delay in milliseconds to wait before updating the debounced value.
 * @returns The debounced value.
 */
function useDebounce(value: any, delay: any) {
  // State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timeout to update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timeout if the component is unmounted or the value changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run if value or delay changes

  return debouncedValue;
}

export default useDebounce;
