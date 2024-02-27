import svcImg from "./images/app-services.png";

export const dataResources = {
  title: "Create a resource",
  listTitle: "Categories",
  categories: [
    {
      id: 11,
      title: "Analytics",
      categSelected: false,
      items: [
        {
          section: 1,
          sectionTitle: "Popular Azure Services",
          services: [
            {
              image: { svcImg },
              title: "Virtual Machine",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "Docs", link: "http://www.google.com" },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
            {
              image: { svcImg },
              title: "Web App",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
            {
              image: { svcImg },
              title: "DataBase",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "Docs", link: "http://www.google.com" },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
          ],
        },
        {
          section: 2,
          sectionTitle: "Popular MarketPlace Products",
          services: [
            {
              image: { svcImg },
              title: "Windows Server",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "Learn More", link: "http://www.google.com" },
              ],
            },
            {
              image: { svcImg },
              title: "Essentials SDK",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "Learn More", link: "http://www.google.com" },
              ],
            },
            {
              image: { svcImg },
              title: "Standard",
              links: [
                {
                  linkTitle: "Subscribe",
                  link: "http://www.google.com",
                },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 12,
      title: "BlockChain",
      categSelected: false,
      items: [
        {
          section: 1,
          sectionTitle: "Popular Azure Services",
          services: [
            {
              image: { svcImg },
              title: "Virtual Machine",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "Docs", link: "http://www.google.com" },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
            {
              image: { svcImg },
              title: "DataBase",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "Docs", link: "http://www.google.com" },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
          ],
        },
        {
          section: 2,
          sectionTitle: "Popular MarketPlace Products",
          services: [
            {
              image: { svcImg },
              title: "Essentials SDK",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "Learn More", link: "http://www.google.com" },
              ],
            },
            {
              image: { svcImg },
              title: "Standard",
              links: [
                {
                  linkTitle: "Set up",
                  link: "http://www.google.com",
                },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 13,
      title: "Databases",
      categSelected: false,
      items: [
        {
          section: 1,
          sectionTitle: "Popular Azure Services",
          services: [
            {
              image: { svcImg },
              title: "Function Machine",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "Docs", link: "http://www.google.com" },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
            {
              image: { svcImg },
              title: "Key Vault",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
            {
              image: { svcImg },
              title: "Logic App",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "Docs", link: "http://www.google.com" },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
          ],
        },
        {
          section: 2,
          sectionTitle: "Popular MarketPlace Products",
          services: [
            {
              image: { svcImg },
              title: "Essentials Microsoft",
              links: [
                { linkTitle: "Create", link: "http://www.google.com" },
                { linkTitle: "Learn More", link: "http://www.google.com" },
              ],
            },
            {
              image: { svcImg },
              title: "Standard",
              links: [
                {
                  linkTitle: "Subscribe",
                  link: "http://www.google.com",
                },
                { linkTitle: "MS Learn", link: "http://www.google.com" },
              ],
            },
          ],
        },
      ],
    },
  ]
};

export const pagesContent = [
  { order: 0, name: 'Create a resource', src: 'add.png' },
  { order: 1, name: 'App Services', src: 'app-services.png' },
  { order: 2, name: 'SQL elastic pools', src: 'sql-elastic-pools.png' }
]

export const dataGrid = {
  columnDefs: [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }

  ],
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ]
};
