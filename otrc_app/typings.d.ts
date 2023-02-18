interface Category {
    _id: string;       // when we fetch [Category] we will get all the _id..._type, these are not seen on the frontend, only slug and title is seen
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: "category";
    slug: {
      _type: "slug";
      current: string;
    };
    title: string;
  }