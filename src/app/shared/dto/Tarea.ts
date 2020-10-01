import { Categoria } from './Categorias';

export class Tarea {
    idtarea?:                 number;
    tarea:             string;
    fechaRealizacion:  Date;
    categorias:         Categoria[];
}