export default {
    name: "references",
    title: "References",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "charge",
        title: "Charge",
        type: "string",
      },
      {
        name: "location",
        title: "Location",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "email",
      },
      {
        name: "show",
        title: "Show?",
        type: "boolean",
      },{
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  