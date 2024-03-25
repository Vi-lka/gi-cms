import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentTextImages extends Schema.Component {
  collectionName: 'components_content_text_images';
  info: {
    displayName: 'Text_Images';
    icon: 'medium';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks & Attribute.Required;
    images: Attribute.Media & Attribute.Required;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    alignImages: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'right'>;
  };
}

export interface ContentText extends Schema.Component {
  collectionName: 'components_content_texts';
  info: {
    displayName: 'Text';
    icon: 'medium';
    description: '';
  };
  attributes: {
    text: Attribute.Blocks & Attribute.Required;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.text-images': ContentTextImages;
      'content.text': ContentText;
    }
  }
}
