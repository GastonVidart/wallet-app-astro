import seedCategoriasTransacciones from "./data&schema/CategoriaTransacciones/categoriasTransaccionesSeed";

// https://astro.build/db/seed
export default async function () {
  await seedCategoriasTransacciones();
}
