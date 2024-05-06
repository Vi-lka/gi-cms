import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentAccordion extends Schema.Component {
  collectionName: 'components_content_accordions';
  info: {
    displayName: 'Accordion';
    icon: 'server';
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
    items: Attribute.Component<'items.accordion-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ContentBentoGrid extends Schema.Component {
  collectionName: 'components_content_bento_grids';
  info: {
    displayName: 'BentoGrid';
    icon: 'dashboard';
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
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    items: Attribute.Component<'items.bento-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 10;
        },
        number
      >;
  };
}

export interface ContentCollectionAllStructure extends Schema.Component {
  collectionName: 'components_content_collection_all_structures';
  info: {
    displayName: 'CollectionAllStructure';
    icon: 'apps';
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
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    type: Attribute.Relation<
      'content.collection-all-structure',
      'oneToOne',
      'api::department-type.department-type'
    >;
    category: Attribute.Enumeration<['Administration', 'Science', 'Education']>;
    view: Attribute.Enumeration<['classic', 'bento']> &
      Attribute.Required &
      Attribute.DefaultTo<'classic'>;
    connected: Attribute.Boolean & Attribute.DefaultTo<false>;
    showSearch: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ContentCollectionAll extends Schema.Component {
  collectionName: 'components_content_collection_alls';
  info: {
    displayName: 'CollectionAll';
    icon: 'apps';
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
    entity: Attribute.JSON &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          '\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B:educational-programs',
          '\u041A\u0443\u0440\u0441\u044B \u0414\u041F\u041E:dpo-courses',
          '\u0412\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438:graduates',
          '\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438:employees'
        ]
      >;
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    connected: Attribute.Boolean & Attribute.DefaultTo<false>;
    showSearch: Attribute.Boolean & Attribute.DefaultTo<false>;
    showFilters: Attribute.Boolean & Attribute.DefaultTo<false>;
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
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    secondTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    additionalText: Attribute.Blocks;
    alignContacts: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
  };
}

export interface ContentFiles extends Schema.Component {
  collectionName: 'components_content_files';
  info: {
    displayName: 'Files';
    icon: 'attachment';
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
    items: Attribute.Component<'items.files-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ContentFormBlock extends Schema.Component {
  collectionName: 'components_content_form_blocks';
  info: {
    displayName: 'FormBlock';
    icon: 'question';
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
    list: Attribute.Component<'items.form-block-item', true>;
    image: Attribute.Media;
    imageDark: Attribute.Media;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    colorDark: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    buttonTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    formTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    formDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    buttonLink: Attribute.Text;
    inNewTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    largeTitles: Attribute.Boolean & Attribute.DefaultTo<false>;
    linkDescription: Attribute.Text &
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
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ContentNumbers extends Schema.Component {
  collectionName: 'components_content_numbers';
  info: {
    displayName: 'Numbers';
    icon: 'typhoon';
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
    subTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    items: Attribute.Component<'items.numbers-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ContentSliderEntity extends Schema.Component {
  collectionName: 'components_content_slider_entities';
  info: {
    displayName: 'SliderEntity';
    icon: 'oneToMany';
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
    educational_programs: Attribute.Relation<
      'content.slider-entity',
      'oneToMany',
      'api::educational-program.educational-program'
    >;
    employees: Attribute.Relation<
      'content.slider-entity',
      'oneToMany',
      'api::employee.employee'
    >;
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    graduates: Attribute.Relation<
      'content.slider-entity',
      'oneToMany',
      'api::graduate.graduate'
    >;
    dpo_courses: Attribute.Relation<
      'content.slider-entity',
      'oneToMany',
      'api::dpo-course.dpo-course'
    >;
    departments: Attribute.Relation<
      'content.slider-entity',
      'oneToMany',
      'api::department.department'
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
    linkDescription: Attribute.Text &
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
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ContentTextGrid extends Schema.Component {
  collectionName: 'components_content_text_grids';
  info: {
    displayName: 'TextGrid';
    icon: 'grid';
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
    items: Attribute.Component<'items.text-grid-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    buttonTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    buttonLink: Attribute.Text;
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    bigTitles: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ContentTextImages extends Schema.Component {
  collectionName: 'components_content_text_images';
  info: {
    displayName: 'TextImages';
    icon: 'picture';
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
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ContentTimeline extends Schema.Component {
  collectionName: 'components_content_timelines';
  info: {
    displayName: 'Timeline';
    icon: 'filter';
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
    subTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    line: Attribute.Component<'items.timeline-item', true>;
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface EmployeeMeta extends Schema.Component {
  collectionName: 'components_employee_metas';
  info: {
    displayName: 'meta';
    icon: 'quote';
    description: '';
  };
  attributes: {
    degree: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    degreeShort: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    rank: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    rankShort: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    posts: Attribute.Component<'structure.post', true>;
  };
}

export interface FooterContacts extends Schema.Component {
  collectionName: 'components_footer_contacts';
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
    email: Attribute.Email;
    iconReact: Attribute.String &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    location: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface FooterLogos extends Schema.Component {
  collectionName: 'components_footer_logos';
  info: {
    displayName: 'Logos';
    icon: 'information';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    link: Attribute.Text;
    imageDark: Attribute.Media & Attribute.Required;
  };
}

export interface FooterSocialNetwork extends Schema.Component {
  collectionName: 'components_footer_social_networks';
  info: {
    displayName: 'SocialNetwork';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    iconReact: Attribute.String &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    image: Attribute.Media;
    imageDark: Attribute.Media;
    link: Attribute.String & Attribute.Required;
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

export interface ItemsAccordionItem extends Schema.Component {
  collectionName: 'components_items_accordion_items';
  info: {
    displayName: 'AccordionItem';
    icon: 'server';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    text: Attribute.Blocks & Attribute.Required;
  };
}

export interface ItemsBentoItem extends Schema.Component {
  collectionName: 'components_items_bento_items';
  info: {
    displayName: 'BentoItem';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    textDescription: Attribute.Blocks;
    iconReact: Attribute.String &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    image: Attribute.Media;
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

export interface ItemsFilesItem extends Schema.Component {
  collectionName: 'components_items_files_items';
  info: {
    displayName: 'FilesItem';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    file: Attribute.Media & Attribute.Required;
  };
}

export interface ItemsFormBlockItem extends Schema.Component {
  collectionName: 'components_content_form_block_items';
  info: {
    displayName: 'FormBlockItem';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    iconReact: Attribute.String &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    image: Attribute.Media;
    imageDark: Attribute.Media;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
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
        'deal',
        'science',
        'idea',
        'healthy_mind',
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
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    image: Attribute.Media;
    imageDark: Attribute.Media;
  };
}

export interface ItemsNavBarItem extends Schema.Component {
  collectionName: 'components_items_nav_bar_items';
  info: {
    displayName: 'NavBarItem';
    icon: 'oneWay';
    description: '';
  };
  attributes: {
    subLinks: Attribute.Component<'items.nav-bar-sub-item', true> &
      Attribute.Required;
  };
}

export interface ItemsNavBarSubItem extends Schema.Component {
  collectionName: 'components_items_nav_bar_sub_items';
  info: {
    displayName: 'NavBarSubItem';
    icon: 'oneWay';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    link: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ItemsNumbersItem extends Schema.Component {
  collectionName: 'components_items_numbers_items';
  info: {
    displayName: 'NumbersItem';
    icon: 'typhoon';
    description: '';
  };
  attributes: {
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
    number: Attribute.Integer & Attribute.Required;
  };
}

export interface ItemsTextGridItem extends Schema.Component {
  collectionName: 'components_items_text_grid_items';
  info: {
    displayName: 'TextGridItem';
    icon: 'italic';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    text: Attribute.Blocks & Attribute.Required;
  };
}

export interface ItemsTimelineItem extends Schema.Component {
  collectionName: 'components_items_timeline_items';
  info: {
    displayName: 'TimelineItem';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    text: Attribute.Blocks & Attribute.Required;
  };
}

export interface NavNavBarFields extends Schema.Component {
  collectionName: 'components_nav_nav_bar_fields';
  info: {
    displayName: 'NavBarFields';
    icon: 'layer';
    description: '';
  };
  attributes: {
    navBarImage: Attribute.Media;
    navBarTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
  };
}

export interface StructureContacts extends Schema.Component {
  collectionName: 'components_structure_contacts';
  info: {
    displayName: 'Contacts';
    icon: 'book';
  };
  attributes: {
    url: Attribute.Text;
    email: Attribute.Email;
    phone: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    location: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface StructurePost extends Schema.Component {
  collectionName: 'components_structure_posts';
  info: {
    displayName: 'Post';
    icon: 'alien';
  };
  attributes: {
    post: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    department: Attribute.Relation<
      'structure.post',
      'oneToOne',
      'api::department.department'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.accordion': ContentAccordion;
      'content.bento-grid': ContentBentoGrid;
      'content.collection-all-structure': ContentCollectionAllStructure;
      'content.collection-all': ContentCollectionAll;
      'content.contacts': ContentContacts;
      'content.files': ContentFiles;
      'content.form-block': ContentFormBlock;
      'content.icons-block': ContentIconsBlock;
      'content.numbers': ContentNumbers;
      'content.slider-entity': ContentSliderEntity;
      'content.slider-photos': ContentSliderPhotos;
      'content.text-block': ContentTextBlock;
      'content.text-grid': ContentTextGrid;
      'content.text-images': ContentTextImages;
      'content.timeline': ContentTimeline;
      'employee.meta': EmployeeMeta;
      'footer.contacts': FooterContacts;
      'footer.logos': FooterLogos;
      'footer.social-network': FooterSocialNetwork;
      'graduate.old-program': GraduateOldProgram;
      'items.accordion-item': ItemsAccordionItem;
      'items.bento-item': ItemsBentoItem;
      'items.edu-prog-slider': ItemsEduProgSlider;
      'items.files-item': ItemsFilesItem;
      'items.form-block-item': ItemsFormBlockItem;
      'items.icon-select': ItemsIconSelect;
      'items.icons-block-item': ItemsIconsBlockItem;
      'items.nav-bar-item': ItemsNavBarItem;
      'items.nav-bar-sub-item': ItemsNavBarSubItem;
      'items.numbers-item': ItemsNumbersItem;
      'items.text-grid-item': ItemsTextGridItem;
      'items.timeline-item': ItemsTimelineItem;
      'nav.nav-bar-fields': NavNavBarFields;
      'structure.contacts': StructureContacts;
      'structure.post': StructurePost;
    }
  }
}
