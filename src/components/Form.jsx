
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Importar Axios
// import "../styles/Form.css";


// const Form = () => {
//   const [data, setData] = useState(null);
//   const [selectedProperty, setSelectedProperty] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('');

//   useEffect(() => {
//     // Realizar la solicitud con Axios
//     axios.get("data.json") // Ajusta la ruta según la ubicación real del archivo JSON
//       .then((response) => {
//         setData(response.data); // Almacenar los datos en el estado local
//       })
//       .catch((error) => {
//         console.error('Error al cargar los datos:', error);
//       });
//   }, []);

//   const handlePropertyChange = (event) => {
//     setSelectedProperty(event.target.value);
//   };

//   const handleLocationChange = (event) => {
//     setSelectedLocation(event.target.value);
//   };


//   const calcularPrecioEstimado = () => {
//     // Obtener el valor del tipo de propiedad, ubicación y metros cuadrados desde el estado local
//     const selectedProperty = selectedProperty; // Reemplaza con el valor correcto desde tu estado local
//     const selectedLocation = selectedLocation; // Reemplaza con el valor correcto desde tu estado local
//     const metrosCuadrados = parseInt(document.getElementById("metros2").value, 10); // Obtener los metros cuadrados del input
  
//     // Buscar los factores de propiedad y ubicación en los datos
//     const propiedadFactor = data.find(item => item.categoria === "propiedad" && item.tipo === selectedProperty)?.factor;
//     const ubicacionFactor = data.find(item => item.categoria === "ubicacion" && item.tipo === selectedLocation)?.factor;
  
//     // Realizar el cálculo
//     if (propiedadFactor && ubicacionFactor) {
//       const precioEstimado = metrosCuadrados * propiedadFactor * ubicacionFactor;
//       // Actualizar el valor en el span del precio estimado
//       document.getElementById("valorPoliza").textContent = precioEstimado.toFixed(2);
//     } else {
//       // Manejar un caso en el que no se encuentren los factores
//       alert("No se encontraron factores para el tipo de propiedad o ubicación seleccionada");
//     }
//   };
  



//   return (
//     <div>
//       {data && (
//         <div className="center div-cotizador">
//           <h2 className="center separador">Completa los datos solicitados</h2>

//           <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
//           <select id="propiedad" value={selectedProperty} onChange={handlePropertyChange}>
//             <option value="" disabled>Seleccione una opción...</option>
//             {data
//               .filter((item) => item.categoria === 'propiedad')
//               .map((item, index) => (
//                 <option key={index} value={item.tipo}>
//                   {item.tipo}
//                 </option>
//               ))}
//           </select>

//           <label htmlFor="ubicacion">Selecciona su ubicación</label>
//           <select id="ubicacion" value={selectedLocation} onChange={handleLocationChange}>
//             <option value="" disabled>Seleccione una opción...</option>
//             {data
//               .filter((item) => item.categoria === 'ubicacion')
//               .map((item, index) => (
//                 <option key={index} value={item.tipo}>
//                   {item.tipo}
//                 </option>
//               ))}
//           </select>

//           <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
//           <input type="number" id="metros2" min="20" max="500" required />

//           <div className="center separador">
//             <button onClick={calcularPrecioEstimado}>Cotizar</button>
//           </div>

//           <div className="center separador">
//             <p className="importe">
//               Precio estimado: $ <span id="valorPoliza">0.00</span>
//               <span className="guardar ocultar" title="Guardar en historial">
//                 💾
//               </span>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
  const [data, setData] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(''); // Inicialmente, no se selecciona nada
  const [selectedLocation, setSelectedLocation] = useState('');
  const [precioEstimado, setPrecioEstimado] = useState(0);

  useEffect(() => {
    // Realizar la solicitud con Axios
    axios.get('data.json') // Ajusta la ruta según la ubicación real del archivo JSON
      .then((response) => {
        setData(response.data); // Almacenar los datos en el estado local
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  // Manejar cambios en el selector de tipo de propiedad
  const handlePropertyChange = (event) => {
    setSelectedProperty(event.target.value); // Actualizar el estado con el valor seleccionado
  };

  // Manejar cambios en el selector de ubicación
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const calcularPrecioEstimado = () => {
    // Obtener el valor del tipo de propiedad, ubicación y metros cuadrados
    const costoM2 = 35.86;
    const metrosCuadrados = parseInt(document.getElementById("metros2").value, 10);
    const propiedadFactor = data.find(item => item.categoria === 'propiedad' && item.tipo === selectedProperty)?.factor;
    const ubicacionFactor = data.find(item => item.categoria === 'ubicacion' && item.tipo === selectedLocation)?.factor;

    if (propiedadFactor && ubicacionFactor) {
      const precioEstimado = costoM2 * metrosCuadrados * propiedadFactor * ubicacionFactor;
      setPrecioEstimado(precioEstimado);
    } else {
      alert("¡Debes completar los datos solicitados!");
    }
  };

  return (
    <div>
      {data && (
        <div>
          <h2 className="center separador">Completa los datos solicitados</h2>

          {/* Selector de tipo de propiedad */}
          <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
          <select id="propiedad" value={selectedProperty} onChange={handlePropertyChange}>
            <option value="" disabled>Seleccione una opción...</option>
            {data
              .filter((item) => item.categoria === 'propiedad')
              .map((item, index) => (
                <option key={index} value={item.tipo}>
                  {item.tipo}
                </option>
              ))}
          </select>

          {/* Selector de ubicación */}
          <label htmlFor="ubicacion">Selecciona su ubicación</label>
          <select id="ubicacion" value={selectedLocation} onChange={handleLocationChange}>
            <option value="" disabled>Seleccione una opción...</option>
            {data
              .filter((item) => item.categoria === 'ubicacion')
              .map((item, index) => (
                <option key={index} value={item.tipo}>
                  {item.tipo}
                </option>
              ))}
          </select>

          <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
          <input type="number" id="metros2" min="20" max="500" required />

          <div className="center separador">
            <button onClick={calcularPrecioEstimado}>Cotizar</button>
          </div>

          <div className="center separador">
            <p className="importe">
              Precio estimado: $ <span id="valorPoliza">{precioEstimado.toFixed(2)}</span>
              <span className="guardar ocultar" title="Guardar en historial">
                💾
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
