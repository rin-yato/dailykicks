export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Category Name',
            type: 'string',
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'reference',
            to: { type: 'brand' },
        }
    ],
}