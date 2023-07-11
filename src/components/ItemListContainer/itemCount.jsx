const Counter=({counter,onAdd,onRemove,isValidCounter})=>{
    return(
        <div className="Contador">
            <div>
            <button type='button' className="botonContador" onClick={onAdd}>+</button>
            <h1>{counter}</h1>
            <button type='button' className="botonContador" onClick={onRemove} disabled={(!isValidCounter)}>-</button>
            </div>
        </div>
    
    )
}
export default Counter;
