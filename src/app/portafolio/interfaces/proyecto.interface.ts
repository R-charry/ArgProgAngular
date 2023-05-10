export interface Experiencia {
    id?:          number;
    nombre_empresa:         string;
    referencia:          string;
    imagen:         string;
    puesto:         string;
}

export interface Educacion {
    id?:          number;
    institucion:          string;
    descripcion:         string;
    imagen:         string;

}

export interface Cursos {
    id?:          number;
    institucion:          string;
    nombre_curso:         string;
    imagen:         string;
}

export interface Contactos {
    id?:          number;
    nombre:          string;
    apellido:         string;
    email:         string;
    telefono:          number;
    comentarios:         string;
    creado_en:         string;
}

export interface Usuarios {
    id?:          number;
    nombre:          string;
    email:         string;
    contrasena:          number;
    creado_en:         string;
    apellido:         string;
    edad:               string;
    imagen:         string;
    
}
