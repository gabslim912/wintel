import type { TinaField } from "tinacms";
export function licencesFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "type",
      label: "Type",
      options: ["Client", "Partenaire"],
    },
    {
      type: "string",
      name: "title",
      label: "Nom",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
    },
    {
      type: "number",
      name: "prix",
      label: "Prix",
    },
    {
      type: "number",
      name: "frais_activation_omp",
      label: "Frais Activation OMP",
    },
    {
      type: "number",
      name: "frais_activation_wintel",
      label: "Frais Activation WINTEL",
    },
    {
      type: "number",
      name: "frais_activation_binance",
      label: "Frais Activation Binance",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "disclaimer",
      label: "Disclaimer",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function partenairesFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "nom",
      label: "Nom",
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
    },
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "description_pdf",
      label: "Description PDF",
    },
    {
      type: "object",
      name: "gallery",
      label: "Gallery",
      list: true,
      fields: [
        {
          type: "string",
          name: "titre",
          label: "Titre",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image ou Vidéo",
        },
      ],
    },
  ] as TinaField[];
}
export function projetsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: ["Category 1", "Category 2", "Category 3"],
    },
    {
      type: "image",
      name: "main_image",
      label: "Main image",
    },
    {
      type: "string",
      name: "mini_desc",
      label: "Mini Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "number",
      name: "fond",
      label: "Fond",
    },
    {
      type: "number",
      name: "participants",
      label: "Participants",
    },
    {
      type: "number",
      name: "contibutions",
      label: "Contibutions",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "auteur",
      label: "Auteur",
    },
    {
      type: "image",
      name: "profil_auteur",
      label: "Profil auteur",
    },
    {
      type: "string",
      name: "adresse",
      label: "Adresse",
    },
    {
      type: "number",
      name: "objectif",
      label: "Objectif",
    },
    {
      type: "string",
      name: "description_auteur",
      label: "Description auteur",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "video",
      label: "Video",
    },
    {
      type: "object",
      name: "gallery",
      label: "gallery",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
    },
    {
      type: "object",
      name: "faqs",
      label: "Faqs",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "response",
          label: "Response",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "updates",
      label: "Updates",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "reviews",
      label: "Reviews",
      list: true,
      fields: [
        {
          type: "string",
          name: "auteur",
          label: "Auteur",
        },
        {
          type: "image",
          name: "profile_picture",
          label: "Profile picture",
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "note",
          label: "Note",
          options: ["1", "2", "3", "4", "5"],
        },
      ],
    },
  ] as TinaField[];
}
