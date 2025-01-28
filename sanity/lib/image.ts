// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }

import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

// Ensure projectId and dataset are defined
if (!projectId || !dataset) {
  throw new Error("Sanity projectId and dataset must be defined in the environment.");
}

// Initialize the image URL builder
const builder = createImageUrlBuilder({
  projectId,
  dataset,
});

// Helper function to generate image URLs
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
