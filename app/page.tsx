"use client";
import { useEffect, useState } from "react";
import { fetchTest } from "./services/api";

export default function Home() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetchTest().then(data => setMessage(data.message));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">📚 Nihongo App learning</h1>
      <p className="text-green-600 mt-4">Backend nói: {message}</p>
    </main>
  );
}

