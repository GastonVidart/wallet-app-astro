import { column, defineTable } from "astro:db";
import AbstractTable from "../AbstractTableSchema";

export const TipoCategoria = defineTable({
  columns: {
    nombre: column.text(),
    icono: column.text(),
    color: column.text(),
    ...AbstractTable,
  },
});

export const TipoSubCategoria = defineTable({
  columns: {
    nombre: column.text(),
    icono: column.text(),
    idCategoria: column.number({ references: () => TipoCategoria.columns.id }),
    ...AbstractTable,
  },
});
