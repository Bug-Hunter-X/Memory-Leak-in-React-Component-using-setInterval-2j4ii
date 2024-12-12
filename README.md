# React setInterval Memory Leak

This repository demonstrates a common error in React applications: memory leaks caused by improper use of `setInterval` within the `useEffect` hook.  The example shows how failing to clear the interval results in the component's state continuing to update even after the component is unmounted from the DOM, causing a memory leak.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.  The solution demonstrates how to properly manage the interval and prevent the memory leak by using `clearInterval` in the cleanup function.