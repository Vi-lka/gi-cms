import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentCollectionAll extends Schema.Component {
  collectionName: 'components_content_collection_alls';
  info: {
    displayName: 'CollectionAll';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    link: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    linkTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    entity: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          '\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B:educational-programs',
          '\u041A\u0443\u0440\u0441\u044B \u0414\u041F\u041E:additional-edu',
          '\u0412\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438:graduates',
          '\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0438:lecturers'
        ]
      >;
  };
}

export interface ContentContacts extends Schema.Component {
  collectionName: 'components_additional_contacts';
  info: {
    displayName: 'Contacts';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    phone: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    email: Attribute.Email &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    location: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media;
    link: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    linkTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ContentIconsBlock extends Schema.Component {
  collectionName: 'components_content_icons_blocks';
  info: {
    displayName: 'IconsBlock';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    link: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    linkTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media;
    backgroundOn: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    isList: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    items: Attribute.Component<'items.icons-block-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    moreTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    moreLink: Attribute.Text;
    alignImage: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface ContentSliderEntity extends Schema.Component {
  collectionName: 'components_content_slider_entities';
  info: {
    displayName: 'SliderEntity';
    icon: 'manyToMany';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    link: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    linkTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    educational_programs: Attribute.Relation<
      'content.slider-entity',
      'oneToMany',
      'api::educational-program.educational-program'
    >;
  };
}

export interface ContentSliderPhotos extends Schema.Component {
  collectionName: 'components_content_slider_photos';
  info: {
    displayName: 'SliderPhotos';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    photos: Attribute.Media & Attribute.Required;
    link: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    linkTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ContentTextBlock extends Schema.Component {
  collectionName: 'components_for_pages_text_blocks';
  info: {
    displayName: 'TextBlock';
    icon: 'medium';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    link: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    text: Attribute.Blocks & Attribute.Required;
    linkTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ContentTextImages extends Schema.Component {
  collectionName: 'components_content_text_images';
  info: {
    displayName: 'TextImages';
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
    link: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    linkTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface GraduateOldProgram extends Schema.Component {
  collectionName: 'components_graduate_old_programs';
  info: {
    displayName: 'OldProgram';
    icon: 'oneToOne';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    code: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    mainName: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    mainCode: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    type: Attribute.Enumeration<['bachelor', 'magistracy', 'postgraduate']> &
      Attribute.Required;
  };
}

export interface ItemsEduProgSlider extends Schema.Component {
  collectionName: 'components_items_edu_prog_sliders';
  info: {
    displayName: 'EduProgSlider';
    icon: 'manyToMany';
    description: '';
  };
  attributes: {
    titleGoToAll: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    educational_programs: Attribute.Relation<
      'items.edu-prog-slider',
      'oneToMany',
      'api::educational-program.educational-program'
    >;
  };
}

export interface ItemsIconSelect extends Schema.Component {
  collectionName: 'components_content_icon_selects';
  info: {
    displayName: 'IconSelect';
    icon: 'star';
    description: '';
  };
  attributes: {
    icon: Attribute.Enumeration<
      [
        'video-call',
        'presentation',
        'man-desktop',
        'businessman',
        'certificate',
        'budget',
        'deadline',
        'authentication',
        'graph'
      ]
    > &
      Attribute.Required;
  };
}

export interface ItemsIconsBlockItem extends Schema.Component {
  collectionName: 'components_content_icons_block_items';
  info: {
    displayName: 'IconsBlockItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    iconReact: Attribute.String &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    iconCustom: Attribute.Enumeration<
      [
        'video-call',
        'presentation',
        'man-desktop',
        'businessman',
        'certificate',
        'budget',
        'deadline',
        'authentication',
        'graph'
      ]
    >;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.collection-all': ContentCollectionAll;
      'content.contacts': ContentContacts;
      'content.icons-block': ContentIconsBlock;
      'content.slider-entity': ContentSliderEntity;
      'content.slider-photos': ContentSliderPhotos;
      'content.text-block': ContentTextBlock;
      'content.text-images': ContentTextImages;
      'graduate.old-program': GraduateOldProgram;
      'items.edu-prog-slider': ItemsEduProgSlider;
      'items.icon-select': ItemsIconSelect;
      'items.icons-block-item': ItemsIconsBlockItem;
    }
  }
}
