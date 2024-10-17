import { v4 as uuidv4 } from 'uuid';

export const canales_data_inicial = [
    {
        titulo: 'UTN PWI TM LUN-MIE',
        id: 1,
        icon: ['ARROWDOWN', 'LINEASTRES', 'PENCIL'],
    },
    {
        titulo: 'Presentamos las listas',
        id: 2,
        text: 'Lleva seguimiento de',
        icon: ['CHAT'],
    },
    {
        titulo: 'Hilos de conversación',
        id: 3,
        icon: ['PLAY'],
    },
    {
        titulo: 'Borradores y enviados',
        id: 4,
        text: '1',
        icon: ['PENCILONLY', 'PLAY'],
    },
    {
        titulo: 'Canales',
        id: 5,
        icon: ['PLAYDOWN'],
        archivos: [
            { titulo: 'consultas', id: 1 },
            { titulo: 'general', id: 2 },
            { titulo: 'utilidades', id: 3 },
            { titulo: 'tareas-entregas', id: 4 },
        ],
    },
    {
        titulo: 'Mensajes directos',
        id: 6,
        icon: ['PLAY'],
    },
    {
        titulo: 'Liana Kachuk',
        id: 7,
        text: 'tu',
        icon: ['HUMAN'],
    },
    {
        titulo: 'Añadir compañeros de trabajo',
        id: 8,
        icon: ['PLUS'],
    },
    {
        titulo: 'Aplicaciones',
        id: 9,
        icon: ['PLAY'],
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
