const Product= ({i, nm, price, addItem, deleteProduct}) => {

    return (
        <>
            <h3>{nm}</h3>
            <p>Price: £{price/100}</p>
            <button onClick={() => addItem(i)}>Add 1 helping of {nm.toLowerCase()} to basket</button>
            <br/>
            <button onClick={() => deleteProduct(i)}>I don't like {nm.toLowerCase()}; please don't stock them</button>
            
        </>
    )
}

export default Product;