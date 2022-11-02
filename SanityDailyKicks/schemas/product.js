export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'reference',
            to: { type: 'brand' },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: 'category' },
        },
        {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            default: false,
        },
        {
            name: 'description',
            title: 'Product Description',
            type: 'text',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'oldPrice',
            title: 'Old Price',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Product Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{ type: 'image' }],
        },
    ],
}