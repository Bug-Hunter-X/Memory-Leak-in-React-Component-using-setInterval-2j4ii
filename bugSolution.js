```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Use functional update for better performance
    }, 1000);

    return () => clearInterval(intervalId); // Correct cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```