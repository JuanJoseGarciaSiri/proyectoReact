import './ItemCountStyle.css';

const Counter=({counter,onAdd,onRemove,isValidCounter})=>{
    return(
        <div className="Contador">
            <div className="botonCount"> 
            <button type='button' className="botonContador" onClick={onAdd}><p> + </p> </button>
            <h1>{counter}</h1>
            <button type='button' className="botonContador" onClick={onRemove} disabled={(!isValidCounter)}><p> - </p></button>
            </div>
        </div>
    
    )
}
export default Counter;
