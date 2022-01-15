import items from "./items.json"
import { setupStore } from "./store"

let cartItems = []

items.forEach(item => {
    setupStore(item, cartItems);
})

document.querySelector("#cartButton").addEventListener("click", e => {
    
    document.querySelector("#cartBar").classList.toggle("invisible")
    console.log("LOL")
})

document.querySelector("#test").addEventListener("click", e => {
    console.log(cartItems)
})