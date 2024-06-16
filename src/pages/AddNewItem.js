// src/pages/AddNew.js
import React from 'react';
import { Link } from 'react-router-dom';

const AddNew = () => {
  return (
    <div>
      <h2>新規登録</h2>
      <form>
        <label>
          アイテム名:
          <input type="text" name="name" />
        </label>
        <button type="submit">登録</button>
      </form>
      <Link to="/">TOPに戻る</Link>
    </div>
  );
};

export default AddNew;
