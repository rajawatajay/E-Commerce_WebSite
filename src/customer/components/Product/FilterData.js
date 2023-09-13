export const color =[
    "White",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
]

export const filters =[
    {
        id: 'color',
        name: 'Color',
        options:[
            { value: "White", label: "White" },
            { value: "beige", label: "Beige" },
            { value: "blue", label: "Blue" },
            { value: "brown", label: "Brown" },
            { value: "green", label: "Green" },
            { value: "purple", label: "Purple" },
            { value: "yellow", label: "Yellow" },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            {value: "s", label:"S"},
            {value: "m", label:"M"},
            {value: "l", label:"L"},
            {value: "xl", label:"XL"},
            {value: "xxl", label:"XXL"},
            
        ],
    },
];
  
export const singleFilter=[
    {
        id: 'price',
        name: "Price",
        options:[
            {value: "159-399", label:"Rs-159 To Rs-399"},
            {value: "399-999", label:"Rs-399 To Rs-999"},
            {value: "999-1999", label:"Rs-999 To Rs-1999"},
            {value: "1999-2999", label:"Rs-1999 To Rs-2999"},
            {value: "3999-4999", label:"Rs-3999 To Rs-4999"},       
        ],
    },
    {
        id: 'discount',
        name: 'Discount Range',
        options:[
            {value:"10", label:"10% And Above"},
            {value:"20", label:"20% And Above"},
            {value:"30", label:"30% And Above"},
            {value:"40", label:"40% And Above"},
            {value:"50", label:"50% And Above"},
            {value:"60", label:"60% And Above"},
            {value:"70", label:"70% And Above"},
            {value:"80", label:"80% And Above"},
        ]
    },
    {
        id:'stock',
        name:'Availability',
        options:[
            {value:'in_stock',label:'In Stock'},
            {value:'out_of_stock', label: "Out Of Stock"},
        ],
    },
]
 export const sortOptions=[
    {
        name:"Price: Low to High", query:"price_low", current:false
    },
    {
        name:"Price: High to Low", query:"price_high", current:false
    },
 ];