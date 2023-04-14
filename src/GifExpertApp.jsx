import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['FC Barcelona'])

  const handleAddCategories = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => handleAddCategories(event)} />

      {
        categories.map(category => {
          return <GifGrid key={category} category={category} />
        })
      }
    </>
  )
}
