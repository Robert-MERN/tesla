import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars:[{
            title: "Model S",
            description: "Order Online for ",
            cursor: "Touchless Delivery",
            leftBtn: "Custom Order",
            rightBtn: "Existing Inventory",
            backGround: "model-s",
        },
        {
            title: "Model Y",
            description: "Order Online for ",
            cursor: "Touchless Delivery",
            leftBtn: "Custom Order",
            rightBtn: "Existing Inventory",
            backGround: "model-y",
        },
       {
            title: "Model 3",
            description: "Order Online for ",
            cursor: "Touchless Delivery",
            leftBtn: "Custom Order",
            rightBtn: "Existing Inventory",
            backGround: "model-3",
        },
        {
            title: "Model X",
            description: "Order Online for ",
            cursor: "Touchless Delivery",
            leftBtn: "Custom Order",
            rightBtn: "Existing Inventory",
            backGround: "model-x",
        },
       {
            title: "Solar panels",
            description: "Lowest Cost Solar Panels in America ",
            cursor: null,
            leftBtn: "Order now",
            rightBtn: "Learn more",
            backGround: "solar-panel",
                
        },
        {
            title: "Solar roofs",
            description: " Produce Clean Energy From Your Roof ",
            cursor: null,
            leftBtn: "Order now",
            rightBtn: "Learn more",
            backGround: "solar-roof",
        },
        {
            title: "Accessories",
            description: null,
            cursor: null,
            leftBtn: "Shop now",
            rightBtn: null,
            backGround: "accessories",
        },
    ],
    all:["Existing Inventory",
        "Used Inventory",
        "Test Drive",
        "Cybertruck",
        "Roadster",
        "Semi",
        "Charging",
        "Powerwall",
        "Commercial Energy",
        "Utilities",
        "Find Us",
        "Support",
        "Investor Relations",
        "Model S",
        "Model Y",
        "Model 3",
        "Model X",
        "Solar panels",
        "Solar roofs",
        "Accessories"
    ] 
}


const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers:{} 
})

export const selectCars = state=>state.car.cars;
export const selectMenu = state=>state.car.all;
export default carSlice.reducer 