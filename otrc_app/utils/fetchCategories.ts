export const fetchCategories = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`  //backend api routes inside next.js
    );
  
    const data = await res.json();  // The data will return in the form of json
    const categories: Category[] = data.categories;
  
    return categories;
  };