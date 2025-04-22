const getStoredBook = () =>{
    const storedBookSTR = localStorage.getItem("readList");
    if(storedBookSTR)
    {
        const storedData = JSON.parse(storedBookSTR);
        return storedData;
    }
    else return [];
}

const addToLocalStorage = (id) =>{
    const storedData = getStoredBook();
    if(storedData.includes(id))
    {
        alert("this book already add as mark as read")
    }
    else{
        storedData.push(id);
        const data = JSON.stringify(storedData);
        localStorage.setItem("readList",data);
    }
}


export {addToLocalStorage,getStoredBook}