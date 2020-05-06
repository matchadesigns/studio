// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

/*
    DOCUMENT TYPES
*/
import category from './documents/category'
import page from './documents/page/page'

// Project
import project from './documents/project/project'
import projectCategory from './documents/project/category'

// Shop
import product from './documents/product/product'
import productCategory from './documents/product/category'
import productVariantGroup from './documents/product/variantGroup'

import siteSettings from './documents/siteSettings'

// Object types
import bioPortableText from './objects/bioPortableText'
import blockContent from './objects/blockContent'
import figure from './objects/figure'
import projectPortableText from './objects/project/projectPortableText'
import simplePortableText from './objects/simplePortableText'
import productVariant from './objects/product/variant'
import price from './objects/price'
import youtube from './objects/youtube'
import pageSegment from './objects/page/segment'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    blockContent,
    figure,
    projectPortableText,
    simplePortableText,
    productVariant,
    price,
    youtube,
    pageSegment,
    // The following are document types which will appear
    // in the studio.
    category,
    page,
    ///
    project,
    projectCategory,
    product,
    productCategory,
    productVariantGroup,
    ///
    siteSettings
  ])
})
