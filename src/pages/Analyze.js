// src/pages/Analyze.js
import React from "react";
import { Link } from "react-router-dom";

const Analyze = () => {
  return (
    <div>
      <header>
        <h1>分析結果</h1>
      </header>
      <main>
        <p>全体から何割断捨離したのか表示</p>
        <p>何着断捨離したのか表示</p>
        <Link to="/">TOPに戻る</Link>
      </main>
    </div>
  );
};

export default Analyze;
