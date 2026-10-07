// Document types
import homepage from './documents/homepage'
import page from './documents/page/page'
import productCategory from './documents/product/category'
import product from './documents/product/product'
import productVariantGroup from './documents/product/variantGroup'
import projectCategory from './documents/project/category'
import project from './documents/project/project'
import siteSettings from './documents/siteSettings'

// Object types
import barcode from './objects/barcode'
import bioPortableText from './objects/bioPortableText'
import blockContent from './objects/blockContent'
import figure from './objects/figure'
import homepageSlide from './objects/homepageSlide'
import pageSegment from './objects/page/segment'
import price from './objects/price'
import productVariant from './objects/product/variant'
import projectPortableText from './objects/project/projectPortableText'
import simplePortableText from './objects/simplePortableText'
import youtube from './objects/youtube'

export const schemaTypes = [
  // Objects
  barcode,
  bioPortableText,
  blockContent,
  figure,
  homepageSlide,
  projectPortableText,
  simplePortableText,
  productVariant,
  price,
  youtube,
  pageSegment,
  // Documents
  homepage,
  page,
  project,
  projectCategory,
  product,
  productCategory,
  productVariantGroup,
  siteSettings,
]
