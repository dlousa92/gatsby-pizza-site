import { MdLocalPizza as icon } from "react-icons/md";
import PriceInput from "../components/PriceInputs";

export default {
  // Computer name
  name: "pizza",
  // Visible title
  title: "Pizzas",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Pizza Name",
      type: "string",
      description: "Name of the pizza",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "toppings",
      title: "Toppings",
      type: "array",
      of: [{ type: "reference", to: [{ type: "topping" }] }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      inputComponent: PriceInput,
      description: "Price of the pizza in cents",
      validation: (Rule) => Rule.min(1000).max(50000),
    },
  ],
  preview: {
    select: {
      name: "name",
      media: "image",
      topping0: "toppings.0.name",
      topping1: "toppings.1.name",
      topping2: "toppings.2.name",
      topping3: "toppings.3.name",
    },
    prepare(fields) {
      const { name, media, ...toppings } = fields;
      const toppingsArray = Object.values(toppings);
      // filter undefined toppings out
      const toppingNames = toppingsArray.filter((topping) => topping);

      // return preview object for the pizza
      return {
        title: name,
        media: media,
        subtitle: toppingNames.join(", "),
      };
    },
  },
};
