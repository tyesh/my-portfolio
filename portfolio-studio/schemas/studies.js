export default {
    name: "studies",
    title: "studies",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "location",
        title: "Location",
        type: "string",
      },
      {
        name: "certificate",
        title: "Certificate",
        type: "url",
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{type: 'studies_category'}],
      },
    ],
  };
  