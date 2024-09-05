import type { Schema, Attribute } from '@strapi/strapi';

export interface ConfigDepartmentsConfigSlider extends Schema.Component {
  collectionName: 'components_config_departments_config_sliders';
  info: {
    displayName: 'departmentsConfigSlider';
    icon: 'star';
    description: '';
  };
  attributes: {
    viewStyle: Attribute.Enumeration<['classic', 'bento']> &
      Attribute.Required &
      Attribute.DefaultTo<'bento'>;
  };
}

export interface ConfigEmployeesConfig extends Schema.Component {
  collectionName: 'components_config_employees_configs';
  info: {
    displayName: 'employeesConfig';
    icon: 'star';
    description: '';
  };
  attributes: {
    showContacts: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    showHashtags: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ConfigEventsConfig extends Schema.Component {
  collectionName: 'components_config_events_configs';
  info: {
    displayName: 'EventsConfig';
    icon: 'clock';
    description: '';
  };
  attributes: {
    view: Attribute.Enumeration<['classic', 'calendar', 'bento']> &
      Attribute.Required &
      Attribute.DefaultTo<'calendar'>;
  };
}

export interface ConfigNewsConfig extends Schema.Component {
  collectionName: 'components_config_news_configs';
  info: {
    displayName: 'NewsConfig';
    icon: 'clock';
  };
  attributes: {
    count: Attribute.Integer & Attribute.Required;
    showGoToAllButton: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ConfigStructureConfig extends Schema.Component {
  collectionName: 'components_config_structure_configs';
  info: {
    displayName: 'structureConfig';
    icon: 'star';
    description: '';
  };
  attributes: {
    type: Attribute.Relation<
      'config.structure-config',
      'oneToOne',
      'api::department-type.department-type'
    >;
    category: Attribute.Enumeration<['Administration', 'Science', 'Education']>;
    view: Attribute.Enumeration<['classic', 'bento']> &
      Attribute.Required &
      Attribute.DefaultTo<'bento'>;
  };
}

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

export interface ContentButtonsBlock extends Schema.Component {
  collectionName: 'components_content_buttons_blocks';
  info: {
    displayName: 'ButtonsBlock';
    icon: 'link';
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
    alignButtons: Attribute.Enumeration<
      ['left', 'right', 'center', 'between', 'around', 'evenly']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'evenly'>;
    items: Attribute.Component<'items.buttons-block-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
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
          '\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B (\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435):edu-educational-programs',
          '\u041A\u0443\u0440\u0441\u044B \u0414\u041F\u041E:dpo-courses',
          '\u0412\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438:graduates',
          '\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438:employees',
          '\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B(\u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F):departments',
          '\u041D\u043E\u0432\u043E\u0441\u0442\u0438:news',
          '\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F:events'
        ]
      >;
    linkDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    connected: Attribute.Boolean & Attribute.DefaultTo<false>;
    showSearch: Attribute.Boolean & Attribute.DefaultTo<false>;
    showFilters: Attribute.Boolean & Attribute.DefaultTo<false>;
    departmentsConfig: Attribute.Component<'config.structure-config'>;
    employeesConfig: Attribute.Component<'config.employees-config'>;
    newsConfig: Attribute.Component<'config.news-config'>;
    eventsConfig: Attribute.Component<'config.events-config'>;
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
    image: Attribute.Media<'images'>;
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

export interface ContentFilesGrid extends Schema.Component {
  collectionName: 'components_content_files_grids';
  info: {
    displayName: 'FilesGrid';
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
    titleSecond: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    linkSecond: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    linkSecondDescription: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    itemsSecond: Attribute.Component<'items.files-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    linkSecondTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
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
    image: Attribute.Media<'images'>;
    imageDark: Attribute.Media<'images'>;
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

export interface ContentGroupCalendar extends Schema.Component {
  collectionName: 'components_content_group_calendars';
  info: {
    displayName: 'GroupCalendar';
    icon: 'clock';
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
    connected: Attribute.Boolean & Attribute.DefaultTo<false>;
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
    image: Attribute.Media<'images'>;
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
    employeesConfig: Attribute.Component<'config.employees-config'>;
    departmentsConfig: Attribute.Component<'config.departments-config-slider'>;
    news: Attribute.Relation<
      'content.slider-entity',
      'oneToMany',
      'api::new.new'
    >;
    titleAll: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
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
    photos: Attribute.Media<'images', true> & Attribute.Required;
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

export interface ContentSliderVideo extends Schema.Component {
  collectionName: 'components_content_slider_videos';
  info: {
    displayName: 'SliderVideo';
    icon: 'slideshow';
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
    items: Attribute.Component<'items.video-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
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
    images: Attribute.Media<'images', true> & Attribute.Required;
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

export interface ContentTextVideo extends Schema.Component {
  collectionName: 'components_content_text_videos';
  info: {
    displayName: 'TextVideo';
    icon: 'slideshow';
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
    text: Attribute.Blocks & Attribute.Required;
    alignVideo: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'right'>;
    items: Attribute.Component<'items.video-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
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

export interface EventsEventDay extends Schema.Component {
  collectionName: 'components_events_event_days';
  info: {
    displayName: 'EventDay';
    icon: 'clock';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    date: Attribute.Date & Attribute.Required;
    points: Attribute.Component<'events.event-point', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface EventsEventPoint extends Schema.Component {
  collectionName: 'components_events_event_points';
  info: {
    displayName: 'EventPoint';
    icon: 'clock';
    description: '';
  };
  attributes: {
    time: Attribute.Time & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    text: Attribute.Blocks;
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
    image: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.Text;
    imageDark: Attribute.Media<'images'> & Attribute.Required;
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
    image: Attribute.Media<'images'>;
    imageDark: Attribute.Media<'images'>;
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

export interface GroupCalendarDiploma extends Schema.Component {
  collectionName: 'components_group_calendar_diplomas';
  info: {
    displayName: 'Diploma';
    icon: 'crown';
  };
  attributes: {
    date: Attribute.DateTime & Attribute.Required;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    address: Attribute.Text & Attribute.Required;
    chairman: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface GroupCalendarEduPractice extends Schema.Component {
  collectionName: 'components_group_calendar_edu_practices';
  info: {
    displayName: 'EduPractice';
    icon: 'feather';
  };
  attributes: {
    dateStart: Attribute.Date & Attribute.Required;
    dateEnd: Attribute.Date;
  };
}

export interface GroupCalendarExams extends Schema.Component {
  collectionName: 'components_group_calendar_exams';
  info: {
    displayName: 'Exams';
    icon: 'star';
    description: '';
  };
  attributes: {
    date: Attribute.DateTime & Attribute.Required;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    address: Attribute.Text & Attribute.Required;
    teacher: Attribute.Relation<
      'group-calendar.exams',
      'oneToOne',
      'api::employee.employee'
    >;
  };
}

export interface GroupCalendarHolidays extends Schema.Component {
  collectionName: 'components_group_calendar_holidays';
  info: {
    displayName: 'Holidays';
    icon: 'emotionHappy';
  };
  attributes: {
    dateStart: Attribute.Date & Attribute.Required;
    dateEnd: Attribute.Date;
  };
}

export interface GroupCalendarInternship extends Schema.Component {
  collectionName: 'components_group_calendar_internships';
  info: {
    displayName: 'Internship';
    icon: 'shield';
  };
  attributes: {
    dateStart: Attribute.Date & Attribute.Required;
    dateEnd: Attribute.Date;
  };
}

export interface GroupCalendarStateExam extends Schema.Component {
  collectionName: 'components_group_calendar_state_exams';
  info: {
    displayName: 'StateExam';
    icon: 'emotionUnhappy';
  };
  attributes: {
    date: Attribute.DateTime & Attribute.Required;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    address: Attribute.Text & Attribute.Required;
    chairman: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface GroupCalendarTest extends Schema.Component {
  collectionName: 'components_group_calendar_tests';
  info: {
    displayName: 'Test';
    icon: 'check';
  };
  attributes: {
    date: Attribute.DateTime & Attribute.Required;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    address: Attribute.Text & Attribute.Required;
    teacher: Attribute.Relation<
      'group-calendar.test',
      'oneToOne',
      'api::employee.employee'
    >;
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
    image: Attribute.Media<'images'>;
  };
}

export interface ItemsButtonsBlockItem extends Schema.Component {
  collectionName: 'components_items_buttons_block_items';
  info: {
    displayName: 'ButtonsBlockItem';
    icon: 'plus';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
    link: Attribute.Text & Attribute.Required;
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
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    file: Attribute.Media<'images' | 'videos' | 'audios' | 'files'> &
      Attribute.Required;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
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
    image: Attribute.Media<'images'>;
    imageDark: Attribute.Media<'images'>;
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
    image: Attribute.Media<'images'>;
    imageDark: Attribute.Media<'images'>;
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

export interface ItemsVideoItem extends Schema.Component {
  collectionName: 'components_items_video_items';
  info: {
    displayName: 'VideoItem';
    icon: 'slideshow';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    video: Attribute.Media<'videos'>;
    embed: Attribute.Text;
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
    navBarImage: Attribute.Media<'images'>;
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

export interface SeoKeywords extends Schema.Component {
  collectionName: 'components_seo_keywords';
  info: {
    displayName: 'Keywords';
    icon: 'emotionHappy';
  };
  attributes: {
    word: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
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
      'config.departments-config-slider': ConfigDepartmentsConfigSlider;
      'config.employees-config': ConfigEmployeesConfig;
      'config.events-config': ConfigEventsConfig;
      'config.news-config': ConfigNewsConfig;
      'config.structure-config': ConfigStructureConfig;
      'content.accordion': ContentAccordion;
      'content.bento-grid': ContentBentoGrid;
      'content.buttons-block': ContentButtonsBlock;
      'content.collection-all': ContentCollectionAll;
      'content.contacts': ContentContacts;
      'content.files-grid': ContentFilesGrid;
      'content.files': ContentFiles;
      'content.form-block': ContentFormBlock;
      'content.group-calendar': ContentGroupCalendar;
      'content.icons-block': ContentIconsBlock;
      'content.numbers': ContentNumbers;
      'content.slider-entity': ContentSliderEntity;
      'content.slider-photos': ContentSliderPhotos;
      'content.slider-video': ContentSliderVideo;
      'content.text-block': ContentTextBlock;
      'content.text-grid': ContentTextGrid;
      'content.text-images': ContentTextImages;
      'content.text-video': ContentTextVideo;
      'content.timeline': ContentTimeline;
      'employee.meta': EmployeeMeta;
      'events.event-day': EventsEventDay;
      'events.event-point': EventsEventPoint;
      'footer.contacts': FooterContacts;
      'footer.logos': FooterLogos;
      'footer.social-network': FooterSocialNetwork;
      'graduate.old-program': GraduateOldProgram;
      'group-calendar.diploma': GroupCalendarDiploma;
      'group-calendar.edu-practice': GroupCalendarEduPractice;
      'group-calendar.exams': GroupCalendarExams;
      'group-calendar.holidays': GroupCalendarHolidays;
      'group-calendar.internship': GroupCalendarInternship;
      'group-calendar.state-exam': GroupCalendarStateExam;
      'group-calendar.test': GroupCalendarTest;
      'items.accordion-item': ItemsAccordionItem;
      'items.bento-item': ItemsBentoItem;
      'items.buttons-block-item': ItemsButtonsBlockItem;
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
      'items.video-item': ItemsVideoItem;
      'nav.nav-bar-fields': NavNavBarFields;
      'seo.keywords': SeoKeywords;
      'structure.contacts': StructureContacts;
      'structure.post': StructurePost;
    }
  }
}
