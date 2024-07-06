import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{greeting}</h1>
    </div>
  );
}

export default ItemListContainer;
