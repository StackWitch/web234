import React from 'react';
import Picture1Image from './Images/ep1.jpg';
import Picture2Image from './Images/ep2.jpg';
import Picture3Image from './Images/ep3.jpg';

export function Picture2() {
  return (
    <div>
      <h2>Orange Gremlin 2</h2>
      <img src={require('./Images/ep2.jpg')} alt="Orange Gremlin 2" />
    </div>
  );
}

export function Picture3() {
  return (
    <div>
      <h2>Orange Gremlin 3</h2>
      <img src={Picture3Image} alt="Orange Gremlin 3" />
    </div>
  );
}

export default function AllThePictures({ Picture1Component, Picture3Component }) {
  return (
    <div className="all-pictures-container">
      <h2>All Orange Gremlins Together</h2>
      <Picture1Component />
      <Picture3Component />
    </div>
  );
}