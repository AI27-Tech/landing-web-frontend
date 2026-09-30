/// <reference types="vite/client" />

/*
 * La landing no consume variables de entorno: es estatica y no habla con ningun
 * backend. No se declara ninguna, a proposito — una interfaz vacia solo le daria
 * a eslint una regla que violar.
 *
 * Cuando aparezca la primera (el endpoint del formulario de cotizacion es el
 * candidato natural), se declara aqui:
 *
 *   interface ImportMetaEnv {
 *     readonly VITE_...? : string;
 *   }
 *   interface ImportMeta {
 *     readonly env: ImportMetaEnv;
 *   }
 *
 * Que sea aqui y no "donde se use" no es cosmetico: declarar por corchetes
 * (`import.meta.env['VITE_X']`) impide que Vite sustituya el valor en tiempo de
 * compilacion. Con punto, la sustitucion es estatica y el arbol de codigo muerto
 * se elimina del bundle.
 */
