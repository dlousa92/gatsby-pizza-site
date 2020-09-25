import { FaPepperHot as icon } from "react-icons/fa";

export default {
  // Computer name
  name: "topping",
  // Visible title
  title: "Toppings",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Toppings Name",
      type: "string",
      description: "Name of the topping",
    },
    {
      name: "vegetarian",
      title: "Vegetarian?",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
  ],
  preview: {
    select: {
      name: "name",
      vegetarian: "vegetarian",
    },
    prepare(fields) {
      const { name, vegetarian } = fields;

      return {
        title: `${name} ${vegetarian ? "🌱" : ""}`,
      };
    },
  },
};
