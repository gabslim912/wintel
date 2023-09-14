import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "619a7f43-6a4a-4122-b9d2-8cdc6176e7ce", // Get this from tina.io
  token: "1cfe35a550c6f4e82ae9c441873b9107a47d0ec0", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "partenaire",
        label: "Partenaires",
        path: "content/partenaires",
        fields: [
          {
            type: "string",
            name: "layout",
            label: "partenaire",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "nom",
            label: "OmegaPro",
            required: true,
          },
        ],
      },
    ],
  },
});
