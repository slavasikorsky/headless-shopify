import seoFragment from "./seo";
import imageFragment from "./image";

export const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    updatedAt
    image {
      ...image
    }
  }
  ${seoFragment}, ${imageFragment}
`;
