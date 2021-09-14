const Basket = ({i, nm, count, price, addItem, removeItem, removeAll}) => {
    
    if (count === 0) {
        return (<></>)
    } else {
        
        return (
            <>
                <h3>{nm}</h3>
                <p>Count: {count} | Price: £{(count * price)/100}</p>
                <button onClick={() => addItem(i)}>Add another</button>
                <button onClick={() => removeItem(i)}>Remove one</button>
                <button onClick={() => removeAll(i)}>Remove all</button>
            </>
        )
    }
    
    
}

export default Basket;