function CardDescripcion({titulo, descripcion}:{titulo:string, descripcion:string}){
    return (
        <div className="border-gray-600 border-2 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
            <p className="text-gray-600">{descripcion}</p>
        </div>
    )
}
export default CardDescripcion;