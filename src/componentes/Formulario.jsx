import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [rol, setRol] = useState('');
  const [acepta, setAcepta] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [enlaceRol, setEnlaceRol] = useState('');
  const firmaRef = useRef();

  // Mapea cada rol a un enlace de Google Drive
  const enlacesPorRol = {
    Mantenimiento: "https://drive.google.com/drive/folders/1Ikl7SC5VigaoPQnJ4Azm_c0YtiUN-yOr?usp=sharing",
    Producción: "https://drive.google.com/drive/folders/1Ec867GKBIkjWp68SjHrZR9dPYsZiKQcv?usp=sharing",
    Calidad: "https://drive.google.com/drive/folders/1p4E6eeqMF0cLJIyYZoDjnIVTg6TkvVrW?usp=sharing",
    Logística: "https://drive.google.com/drive/folders/1u_r7w5NKe3MKd2B65gTP4ryRHzf8pTMr?usp=sharing",
    "I+D": "https://drive.google.com/drive/folders/16Ef6lV491WDbk8kEAPDE3s02nOWO9DQx?usp=drive_link",
    Marketing: "https://drive.google.com/drive/folders/1eXJg9MSQTgLcM1PTv3yJtWq0aXYA3dNw?usp=sharing",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acepta) {
      alert('Debes aceptar los documentos.');
      return;
    }

    const firmaURL = firmaRef.current.toDataURL();

    try {
      const response = await fetch("https://formsubmit.co/javipj27@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: nombre,
          Apellidos: apellidos,
          Rol: rol,
          Firma: firmaURL,
        }),
      });

      if (response.ok) {
        setEnviado(true);
        const enlace = enlacesPorRol[rol];
        setEnlaceRol(enlace);
        alert("Formulario enviado correctamente por email.");
      } else {
        alert("Error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error.");
    }
  };

  const limpiarFirma = () => {
    firmaRef.current.clear();
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-xl shadow-2xl mb-5">
      <h2 className="text-2xl font-bold mb-4">Formulario de Firma</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          className="input input-bordered w-full"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellidos"
          className="input input-bordered w-full"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
        />
        <select
          className="select select-bordered w-full"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          required
        >
          <option value="" disabled>Selecciona tu rol</option>
          <option value="Mantenimiento">Mantenimiento</option>
          <option value="Producción">Producción</option>
          <option value="Calidad">Calidad</option>
          <option value="Logística">Logística</option>
          <option value="I+D">I+D</option>
          <option value="Marketing">Marketing</option>
        </select>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">
              Acepto los términos y documentos recibidos
            </span>
            <input
              type="checkbox"
              className="checkbox"
              checked={acepta}
              onChange={() => setAcepta(!acepta)}
              required
            />
          </label>
        </div>
        <div>
          <p className="mb-2">Firma:</p>
          <div className="border border-gray-300 rounded bg-white">
            <SignatureCanvas
              penColor="black"
              canvasProps={{ width: 400, height: 150, className: 'signature-canvas' }}
              ref={firmaRef}
            />
          </div>
          <button
            type="button"
            onClick={limpiarFirma}
            className="btn btn-sm btn-warning mt-2"
          >
            Limpiar firma
          </button>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Enviar formulario
        </button>
        {enviado && (
          <div className="alert alert-success mt-4">
            <p>Formulario enviado correctamente.</p>
            {enlaceRol && (
              <p>
                Accede a los documentos de PRL para tu rol:&nbsp;
                <a href={enlaceRol} target="_blank" rel="noopener noreferrer" className="link link-primary underline">
                  Abrir carpeta de Google Drive
                </a>
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
