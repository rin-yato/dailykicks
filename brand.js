export default {
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Brand Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Brand Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],

}