export const navigation ={
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '/',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',

                },
                {
                    name: 'Basic Tees',
                    href: '/',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name:'Clothing',
                    items: [
                        { name: 'Tops', id:"top", href:`{women/clothing/tops}`},
                        { name: 'Dresses', id:"women_dress", href:"#"},
                        { name: 'Women Jeans', id:"women_jeans"},
                        { name: 'Lehnga Choli', id:"lehnga_choli"},
                        { name: 'Sweaters', id:"sweater"},
                        { name: 'T-Shirts', id:"t-shirt"},
                        { name: 'Jackets', id:"jacket"},
                        { name: 'Gouns', id:"gouns"},
                        { name: 'sarees', id:"saree"},
                        { name: 'Kurtas', id:"kurtas"},
                    ],
                },
                {
                    id: 'accessories',
                    name:'Accessories',
                    items: [
                        {name: 'Watches', id:'watch'},
                        {name: 'Wallets', id:'wallet'},
                        {name: 'Bags', id:'bag'},
                        {name: 'Sunglasses', id:'sunglasse'},
                        {name: 'Hats', id:'hat'},
                        {name: 'Belts', id:'belt'},
                    ],
                },
                {
                    id: 'brands',
                    name:'Brands',
                    items: [
                        {name: 'Full Nelson', id:'#'},
                        {name: 'My Way', id:'#'},
                        {name: 'Re-Arranged', id:'#'},
                        {name: 'Counterfeit', id:'#'},
                        {name: 'Significant Other', id:'#'},
                    ],
                }, 
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    id:'#',
                    imageSrc: 'https://www.thefashionisto.com/wp-content/uploads/2019/05/Mens-Fashion-Accessories.jpg', //issues maybe
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                name: 'Artwork Tees',
                    id:'#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of half.',//issues maybe
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        {name: 'Mens Kurtas', id:'mens_kurta'},
                        {name: 'Shirt', id:'shirt'},
                        {name: 'Men Jeans', id:'men_jeans'},
                        {name: 'Sweaters', id:'#'},
                        {name: 'T-Shirt', id:'t-shirt'},
                        {name: 'jackets', id:'#'},
                        {name: 'activewear', id:'#'},
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        {name: 'Watches', id:'#'},
                        {name: 'Wallets', id:'#'},
                        {name: 'Bags', id:'#'},
                        {name: 'Sunglasses', id:'#'},
                        {name: 'Hats', id:'#'},
                        {name: 'Belts', id:'#'},
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        {name: 'Re-Arranged', id:'#'},
                        {name: 'Counterfeit', id:'#'},
                        {name: 'Full Nelson', id:'#'},
                        {name: 'My Way', id:'#'},
                    ],
                },
            ],
        },
    ],
    pages:  [
        {name: 'Company', id:'/'},
        {name: 'Stores', id:'/'},
        
    ],
}