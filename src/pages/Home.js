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
        <Link to="/ItemList">洋服一覧</Link>
        <Link to="/analyze">分析結果</Link>
      </main>
    </div>
  );
};

export default Home;
