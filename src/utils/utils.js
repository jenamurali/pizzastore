export const sortData = (sortBy,data = []) =>{
    if(sortBy === "rating"){
        return data.sort((a,b) => b.rating - a.rating);
    }else if(sortBy === "price"){
        return data.sort((a,b) => a.price - b.price);
    }else{
        return [...data];
    }
}