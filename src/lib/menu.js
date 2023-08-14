import img1 from '../assets/static/Factory.png';

export const Menu = [
    {
      "title": "Products",
      "url": "/products",
      "value": "Products",
      "imgUrl": `${img1}`,
      "submenu": [
        {
          "title": "All",
          "url": "/products/all-products",
          "value": "all"
        },
        {
          "title": "Add New",
          "url": "/products/add-product",
          "value": "add new"
        },
        {
          "title": "Categories",
          "url": "/products/categories",
          "value": "Categories"
        }
      ]
    }
  ];
  