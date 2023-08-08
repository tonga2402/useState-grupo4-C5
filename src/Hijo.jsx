function Hijo({producto , setProducto} ) {
    
  return (
    <div>   
        <button onClick={ () => setProducto(producto = '✅')  }>Comprar Producto</button>
        <h1>Smart Tv {producto}</h1>
    </div>
  )
}

export default Hijo;

