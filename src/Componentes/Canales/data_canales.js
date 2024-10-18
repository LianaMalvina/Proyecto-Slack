import { v4 as uuidv4 } from 'uuid';

export const canales_data_inicial = [
  
    {
        titulo: 'Canales',
        id: 5,
        icon: ['PLAYDOWN'],
        canales: [
            { name: 'consultas', id: 1 },
            { name: 'general', id: 2 },
            { name: 'utilidades', id: 3 },
            { name: 'tareas-entregas', id: 4 },
        ],
    },
 
];

const obtenerNuevoCanal = () => {
    let nuevoscanales = localStorage.getItem('nuevoscanales');
    if (nuevoscanales) {
        return JSON.parse(nuevoscanales);
    } else {
        localStorage.setItem('nuevoscanales', JSON.stringify(canales_data_inicial));
        return canales_data_inicial;
    }
};

const crearNuevosCanales = (nuevoCanal) => {
    nuevoCanal.id = uuidv4();
    let nuevoscanales = obtenerNuevoCanal();
    nuevoscanales.push(nuevoCanal);
    localStorage.setItem('nuevoscanales', JSON.stringify(nuevoscanales));
};

export { obtenerNuevoCanal, crearNuevosCanales };
