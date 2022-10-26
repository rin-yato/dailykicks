import {
    createCurrentUserHook,
    createClient,
} from 'next-sanity';

import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    // Find your project ID and dataset in `sanity.json` in your studio project
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    // Set useCdn to `false` if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
    useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);


// get the image url
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// get the current user
export const useCurrentUser = createCurrentUserHook(config);


