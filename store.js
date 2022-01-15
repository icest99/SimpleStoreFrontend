import { cartItemcount } from "./countItem"
export function setupStore(item, cartItems) {
const itemsListHTML = document.querySelector(".items-list")
const divItem = document.createElement("div")
const divItemChild1 = document.createElement("div")
const divItemChild2 = document.createElement("div")
const divItemChild3 = document.createElement("div")
const divItemChildimg = document.createElement("img")
const divItemChildButton = document.createElement("button")
const divItemChildH3 = document.createElement("h3")
const divItemChildH2 = document.createElement("h2")
const divItemChildP = document.createElement("p")

divItem.className = "lg:w-1/4 md:w-1/2 p-4 w-full TEST"
divItemChild1.className = "block relative h-48 rounded overflow-hidden"

divItemChildimg.alt = "ecommerce"
divItemChildimg.classList = "object-cover object-center w-full h-full block"
divItemChildimg.src = "https://dummyimage.com/420x260/" + item.imageColor + "/" + item.imageColor

divItemChild2.className = "mt-4 flex items-end justify-between"
divItemChildH3.className = "text-gray-500 text-xs tracking-widest title-font uppercase mb-1"
divItemChildH3.textContent = item.category
divItemChildH2.className = "text-gray-900 title-font text-lg font-medium"
divItemChildH2.textContent = item.name
divItemChildP.className = "mt-1"
divItemChildP.textContent = item.priceCents

divItemChildButton.className = "text-white py-2 px-4 text-xl bg-blue-500 rounded hover:bg-blue-700"
divItemChildButton.textContent = "Add To Cart"
divItemChildButton.id = item.id

divItemChild3.appendChild(divItemChildH3)
divItemChild3.appendChild(divItemChildH2)
divItemChild3.appendChild(divItemChildP)
divItemChild1.appendChild(divItemChildimg)

divItem.appendChild(divItemChild1)
divItem.appendChild(divItemChild2)
divItemChild2.appendChild(divItemChild3)
divItemChild2.appendChild(divItemChildButton)

itemsListHTML.appendChild(divItem)

const cartDiv1 = document.createElement("div")
const cartDiv2 = document.createElement("div")
const cartDiv3 = document.createElement("div")
const cartDiv4 = document.createElement("div")
const cartDiv5 = document.createElement("div")
const cartDivimg = document.createElement("img")
const cartButton = document.createElement("button")
const cartDivh2 = document.createElement("h2")
const cartDivspan = document.createElement("span")

    cartDiv1.className = "mb-6"
    cartDiv2.className = "block relative h-24 rounded overflow-hidden"
    cartDiv3.className = "mt-2 flex justify-between"
    cartDiv4.className = "flex items-center title-font"
    cartDivimg.alt = "ecommerce"
    cartDivimg.className = "object-cover object-center w-full h-full block rounded"
    cartDivimg.src = "https://dummyimage.com/420x260/" + item.imageColor + "/" + item.imageColor
    cartButton.className = "absolute top-0 right-0 bg-black rounded-tr text-white w-6 h-6 text-lg flex justify-center items-center"
    cartButton.innerHTML = "&times;"
    cartDivh2.textContent = item.name
    cartDiv5.textContent = item.priceCents
    cartButton.dataset.data-remove-from-cart-button
    cartDivspan.className = "text-gray-600 text-sm font-bold ml-1"


divItemChildButton.addEventListener("click", e => {

    if (!cartItems.find(e => e === item.id)) {
        cartDiv1.appendChild(cartDiv2)
        cartDiv1.appendChild(cartDiv3)
        cartDiv2.appendChild(cartDivimg)
        cartDiv2.appendChild(cartDivspan)
        cartDiv3.appendChild(cartDiv4)
        cartDiv4.appendChild(cartDivh2)
        cartDiv4.appendChild(cartDivspan)
        cartDiv3.appendChild(cartDiv5)
        document.querySelector("#cart").appendChild(cartDiv1)
    }

    cartItems.push(item.id)
    console.log("workwhat")
    let counts = cartItemcount(cartItems)
    console.log(Boolean(cartDivspan.textContent))
    cartDivspan.textContent = 0

    cartDivspan.textContent? 
    cartDivspan.textContent = "x" + counts[item.id] :
    cartDivspan.textContent = "x1"

    cartDiv4.appendChild(cartDivspan)
    // document.querySelector("#cartItemNumber").textContent =
    console.log()
    
})

}

