export default {
  name: 'work',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'webType',
      title: 'Web Type',
      type: 'string',
    },
    {
      name: 'charge',
      title: 'Charge',
      type: 'string',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'webURL',
      title: 'Web URL',
      type: 'url',
    },
    {
      name: 'playStoreURL',
      title: 'Play Store URL',
      type: 'url',
    },
    {
      name: 'iosStore',
      title: 'iOS Store',
      type: 'url',
    },
  ],
};
