export const sortData = (sortBy,data = []) =>{
    if(sortBy === "rating"){
        return data.sort((a,b) => b.rating - a.rating);
    }else if(sortBy === "price"){
        return data.sort((a,b) => a.price - b.price);
    }else{
        return [...data];
    }
}


export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    debugger
    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1,size:[...cartItemToAdd.size],toppings:[...cartItemToAdd.toppings]}
                : cartItem
        )
    }

    return[...cartItems,{...cartItemToAdd,quantity: 1}]
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    //debugger
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ? 
        {...cartItem,quantity: cartItem.quantity - 1} 
        : cartItem   
    )

}