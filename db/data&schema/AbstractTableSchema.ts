import { NOW, column } from "astro:db";

const AbstractTable = {
  id: column.number({ primaryKey: true }),
  createUser: column.text(),
  updateUser: column.text(),
  deleteUser: column.text({ optional: true }),
  createdAt: column.date({ default: NOW, optional: true }),
  updatedAt: column.date({ default: NOW, optional: true }),
  deletedAt: column.date({ optional: true }),
};

export default AbstractTable;
