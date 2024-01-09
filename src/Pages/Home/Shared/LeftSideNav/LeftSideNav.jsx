import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-2">
      <div className="text-2xl">All Categories</div>
      {categories.map((category) => (
        <Link className="block  py-4  text-xl text-center font-semibold shadow-sm bg-gray-100"
         key={category.id}
         to={`/category/${category.id}`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;