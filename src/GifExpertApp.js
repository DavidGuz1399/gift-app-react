import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // const categories=['One Puch','Naruto','Dragon Ball'];
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr></hr>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
