import CallToAction from "./CallToAction";
import CallToActionV5 from "./CallToActionV5";
import HeroV1 from "./HeroV1";
import FooterV2 from "./FooterV2";
import ProductCardGridV2 from "./ProductCardGridV2";
import GalleryV3 from "./GalleryV3";
import TextV1 from "./TextV1";
import ProductDetailV1 from "./ProductDetailV1";

const data = [
  { id: "1", c: CallToAction, label: "CallToAction", tag: "CTA" },
  { id: "2", c: CallToActionV5, label: "CallToActionV5", tag: "CTA" },
  { id: "3", c: HeroV1, label: "HeroV1", tag: "Hero" },
  { id: "4", c: FooterV2, label: "FooterV2", tag: "Footer" },
  { id: "5", c: ProductCardGridV2, label: "ProductCardGridV2", tag: "Product" },
  { id: "6", c: GalleryV3, label: "GalleryV3", tag: "Gallery" },
  { id: "7", c: TextV1, label: "TextV1", tag: "Text" },
  { id: "8", c: ProductDetailV1, label: "ProductDetailV1", tag: "Product" }
];

let tagArray = Array.from(new Set(data.map(i => i.tag)));
tagArray.unshift("All");
export const tags = tagArray;

export default data;
