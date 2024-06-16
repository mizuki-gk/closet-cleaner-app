// src/pages/AddNew.js
import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = () => {
  return (
    <div>
      <h2>新規登録</h2>
      <form>
        <label>
          アイテム名:
          <input type="text" name="name" />
        </label>
        <button type="submit">登録</button>
        <button>削除</button>
        <button>断捨離</button>
        <button>今日着た服を登録する</button>
      </form>
      <Link to="/">TOPに戻る</Link>
    </div>
  );
};

export default ItemList;
