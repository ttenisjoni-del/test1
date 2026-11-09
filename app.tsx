import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main dir="rtl">
      <h1>האפליקציה הראשונה שלי</h1>
      <p>לחצת על הכפתור {count} פעמים.</p>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        לחיצה
      </button>
    </main>
  );
}