import { defineDb } from "astro:db";
import { TipoCategoria, TipoSubCategoria } from "./data&schema/CategoriaTransacciones/categoriasTransaccionesSchema";

// https://astro.build/db/config
export default defineDb({
  tables: { TipoCategoria, TipoSubCategoria },
});
