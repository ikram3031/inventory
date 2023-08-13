import img1 from '../assets/static/Factory.png';

export const Menu = [
    {
      "title": "Products",
      "url": "/products",
      "value": "Products",
      "imgUrl": `${img1}`,
      "submenu": [
        {
          "title": "Add New",
          "url": "/products/add-new",
          "value": "add new"
        }
      ]
    }
  ];
  