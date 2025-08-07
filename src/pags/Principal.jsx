import Cabecera from "../componentes/Cabecera"
import Pie from "../componentes/Pie"
import Formulario from "../componentes/Formulario"

export default function Principal() {
return (
    <div className="bg-gray-900">
        <Cabecera />
        <Formulario/>
        <Pie/>
    </div>
)};