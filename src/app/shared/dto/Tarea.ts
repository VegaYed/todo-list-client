import { Categoria } from './Categorias';

export class Tarea {
    id:                 number;
    nombre:             string;
    fecha_realizacion:  Date;
    categorias:         Categoria[];
}