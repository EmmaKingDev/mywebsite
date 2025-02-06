import React, { useState } from "react";
import usePoem from "../hooks/usePoem";
import "./Poem.css";
import { usePageRefresh } from "../hooks/usePageRefresh";

export default function PoemDisplay() {
  const [poemData, loading] = usePoem();
  const refreshPage = usePageRefresh();

  if (loading) {
    return <div className="spinner" />;
  }

  if (poemData && Array.isArray(poemData)) {
    return (
      <>
        <ul className="poem">
          {poemData.map((line: string, index: number) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        <button onClick={refreshPage}>New</button>
      </>
    );
  }
  return <div>Error API oh no</div>;
}
