export default {
  name: 'teas',
  type: 'document',
  title: 'Teas',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'name'}},
    {name: 'description', type: 'string', title: 'Description'},
    {name: 'price', type: 'number', title: 'Price'},
    {name: 'attributes', type: 'array', of: [{type: 'string'}], title: 'Attributes'},
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {hotspot: true, metadata: ['lqip']},
    },
  ],
}