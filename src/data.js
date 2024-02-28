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
  ],
};

export const pagesContent = [
  { order: 0, id: 0, name: "Create a resource", src: "add.png" },
  { order: 1, id: 33, name: "App Services", src: "app-services.png" },
  { order: 2, id: 34, name: "SQL elastic pools", src: "sql-elastic-pools.png" },
];

export const dataGrid = [
  {
    id: 33,
    title: "SQL Data Grid",
    buttons: [
      {
        title: "Create",
        icon: "plus",
        class: "fas fa-plus",
        hidden: false,
        disabled: false,
      },
      {
        title: "Switch",
        icon: "arrows",
        class: "fas fa-arrows",
        hidden: false,
        disabled: false,
      },
      {
        title: "Reservation",
        icon: "clock",
        class: "fas fa-clock",
        hidden: false,
        disabled: false,
      },
      {
        title: "Manage",
        icon: "settings",
        class: "fas fa-settings",
        hidden: false,
        disabled: false,
      },
    ],
    columnDefs: [
      { headerName: "Name", field: "name" },
      { headerName: "Type", field: "type" },
      { headerName: "Subscription", field: "subscription" },
      { headerName: "Resource group", field: "resourceGroup" },
      { headerName: "Location", field: "location" },
      { headerName: "Status", field: "status" },
      { headerName: "Operating System", field: "operatingSystem" },
      { headerName: "Size", field: "size" },
      { headerName: "Public IP Address", field: "publicIpAddress" },
      { headerName: "Disks", field: "disks" },
    ],
    rowData: [
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
    ],
  },
  {
    id: 34,
    title: "App Services",
    buttons: [
      {
        title: "Create",
        icon: "plus",
        class: "fas fa-plus",
        hidden: false,
        disabled: false,
      },
      {
        title: "Switch",
        icon: "arrows",
        class: "fas fa-arrows",
        hidden: false,
        disabled: false,
      },
      {
        title: "Reservation",
        icon: "clock",
        class: "fas fa-clock",
        hidden: false,
        disabled: true,
      },
      {
        title: "Manage",
        icon: "settings",
        class: "fas fa-settings",
        hidden: true,
        disabled: false,
      },
    ],
    columnDefs: [
      { headerName: "Name", field: "name" },
      { headerName: "Type", field: "type" },
      { headerName: "Subscription", field: "subscription" },
      { headerName: "Resource group", field: "resourceGroup" },
      { headerName: "Location", field: "location" },
      { headerName: "Status", field: "status" },
      { headerName: "Operating System", field: "operatingSystem" },
      { headerName: "Size", field: "size" },
      { headerName: "Public IP Address", field: "publicIpAddress" },
      { headerName: "Disks", field: "disks" },
    ],
    rowData: [
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
      {
        name: "CEREBRO",
        type: "Virtual Machine",
        subscription: "CEREBRO SUB",
        resourceGroup: "CEREBRO 360 RG",
        location: "East US",
        status: "Running",
        operatingSystem: "Windows",
        size: "Standard",
        publicIpAddress: "1.1.1.1",
        disks: "2",
      },
    ]
  }
];
