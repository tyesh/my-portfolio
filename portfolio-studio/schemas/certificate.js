export default {
    name: "certificate",
    title: "Certificate",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "url",
        title: "Certificate URL",
        type: "url",
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{type: 'certificate_category'}],
      },
    ],
  };
  