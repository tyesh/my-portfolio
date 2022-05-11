export default {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{type: 'skill_category'}],
      },
    ],
  };
  