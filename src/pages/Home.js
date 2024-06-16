// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Closet Cleaner</h1>
      </header>
      <main>
        <Link to="/edit">洋服一覧</Link>
        <Link to="/add-new">新規登録</Link>
        <button>削除</button>
        <button>断捨離</button>
        <Link to="/analyze">分析結果</Link>
        <button>今日着た服を登録する</button>
      </main>
    </div>
  );
};

export default Home;
