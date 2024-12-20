import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginReactIconsIconlibrary extends Schema.CollectionType {
  collectionName: 'iconlibrary';
  info: {
    singularName: 'iconlibrary';
    pluralName: 'iconlibraries';
    displayName: 'IconLibrary';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    abbreviation: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 3;
      }>;
    isEnabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::react-icons.iconlibrary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::react-icons.iconlibrary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginPublisherAction extends Schema.CollectionType {
  collectionName: 'actions';
  info: {
    singularName: 'action';
    pluralName: 'actions';
    displayName: 'actions';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    executeAt: Attribute.DateTime;
    mode: Attribute.String;
    entityId: Attribute.Integer;
    entitySlug: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::publisher.action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAdditionalPageAdditionalPage extends Schema.CollectionType {
  collectionName: 'additional_pages';
  info: {
    singularName: 'additional-page';
    pluralName: 'additional-pages';
    displayName: '\u0414\u043E\u043F. \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    additional_pages: Attribute.Relation<
      'api::additional-page.additional-page',
      'oneToMany',
      'api::additional-page.additional-page'
    >;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::additional-page.additional-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::additional-page.additional-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::additional-page.additional-page',
      'oneToMany',
      'api::additional-page.additional-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDepartmentDepartment extends Schema.CollectionType {
  collectionName: 'departments';
  info: {
    singularName: 'department';
    pluralName: 'departments';
    displayName: '~S: \u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B (\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    order: Attribute.BigInteger &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    educationalPrograms: Attribute.Relation<
      'api::department.department',
      'oneToMany',
      'api::educational-program.educational-program'
    >;
    head: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'api::employee.employee'
    >;
    employees: Attribute.Relation<
      'api::department.department',
      'manyToMany',
      'api::employee.employee'
    >;
    media: Attribute.Media<'images' | 'videos', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Blocks &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contacts: Attribute.Component<'structure.contacts'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shortTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    type: Attribute.Relation<
      'api::department.department',
      'manyToOne',
      'api::department-type.department-type'
    >;
    dpoCourses: Attribute.Relation<
      'api::department.department',
      'oneToMany',
      'api::dpo-course.dpo-course'
    >;
    events: Attribute.Relation<
      'api::department.department',
      'manyToMany',
      'api::event.event'
    >;
    eduEducationalPrograms: Attribute.Relation<
      'api::department.department',
      'oneToMany',
      'api::edu-educational-program.edu-educational-program'
    >;
    projects: Attribute.Relation<
      'api::department.department',
      'manyToMany',
      'api::project.project'
    >;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::department.department',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::department.department',
      'oneToMany',
      'api::department.department'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDepartmentTypeDepartmentType extends Schema.CollectionType {
  collectionName: 'department_types';
  info: {
    singularName: 'department-type';
    pluralName: 'department-types';
    displayName: '~S: \u0422\u0438\u043F\u044B \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440 (\u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0439)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    departments: Attribute.Relation<
      'api::department-type.department-type',
      'oneToMany',
      'api::department.department'
    >;
    category: Attribute.Enumeration<
      ['Administration', 'Science', 'Education']
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::department-type.department-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::department-type.department-type',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::department-type.department-type',
      'oneToMany',
      'api::department-type.department-type'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDocsDocs extends Schema.SingleType {
  collectionName: 'documents';
  info: {
    singularName: 'docs';
    pluralName: 'documents';
    displayName: '\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    items: Attribute.Component<'items.docs-item', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::docs.docs', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::docs.docs', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::docs.docs',
      'oneToMany',
      'api::docs.docs'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDpoDpo extends Schema.SingleType {
  collectionName: 'dpos';
  info: {
    singularName: 'dpo';
    pluralName: 'dpos';
    displayName: '/dpo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::dpo.dpo', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::dpo.dpo', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::dpo.dpo',
      'oneToMany',
      'api::dpo.dpo'
    >;
    locale: Attribute.String;
  };
}

export interface ApiDpoCourseDpoCourse extends Schema.CollectionType {
  collectionName: 'dpo_courses';
  info: {
    singularName: 'dpo-course';
    pluralName: 'dpo-courses';
    displayName: '~A: \u041A\u0443\u0440\u0441\u044B \u0414\u041F\u041E';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    dateStart: Attribute.Date;
    dateEnd: Attribute.Date;
    hours: Attribute.Integer;
    price: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'>;
    order: Attribute.Integer;
    location: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    department: Attribute.Relation<
      'api::dpo-course.dpo-course',
      'manyToOne',
      'api::department.department'
    >;
    employees: Attribute.Relation<
      'api::dpo-course.dpo-course',
      'manyToMany',
      'api::employee.employee'
    >;
    graduates: Attribute.Relation<
      'api::dpo-course.dpo-course',
      'manyToMany',
      'api::graduate.graduate'
    >;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    events: Attribute.Relation<
      'api::dpo-course.dpo-course',
      'manyToMany',
      'api::event.event'
    >;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::dpo-course.dpo-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::dpo-course.dpo-course',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::dpo-course.dpo-course',
      'oneToMany',
      'api::dpo-course.dpo-course'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEduEducationalProgramEduEducationalProgram
  extends Schema.CollectionType {
  collectionName: 'edu_educational_programs';
  info: {
    singularName: 'edu-educational-program';
    pluralName: 'edu-educational-programs';
    displayName: '~E: \u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B (\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    code: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    mainName: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    mainCode: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    type: Attribute.Enumeration<['bachelor', 'magistracy', 'postgraduate']> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    order: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    department: Attribute.Relation<
      'api::edu-educational-program.edu-educational-program',
      'manyToOne',
      'api::department.department'
    >;
    employees: Attribute.Relation<
      'api::edu-educational-program.edu-educational-program',
      'manyToMany',
      'api::employee.employee'
    >;
    events: Attribute.Relation<
      'api::edu-educational-program.edu-educational-program',
      'manyToMany',
      'api::event.event'
    >;
    groups: Attribute.Relation<
      'api::edu-educational-program.edu-educational-program',
      'oneToMany',
      'api::group.group'
    >;
    graduates: Attribute.Relation<
      'api::edu-educational-program.edu-educational-program',
      'manyToMany',
      'api::graduate.graduate'
    >;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::edu-educational-program.edu-educational-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::edu-educational-program.edu-educational-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::edu-educational-program.edu-educational-program',
      'oneToMany',
      'api::edu-educational-program.edu-educational-program'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEducationPageEducationPage extends Schema.SingleType {
  collectionName: 'education_pages';
  info: {
    singularName: 'education-page';
    pluralName: 'education-pages';
    displayName: '/education';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::education-page.education-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::education-page.education-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::education-page.education-page',
      'oneToMany',
      'api::education-page.education-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEducationalProgramEducationalProgram
  extends Schema.CollectionType {
  collectionName: 'educational_programs';
  info: {
    singularName: 'educational-program';
    pluralName: 'educational-programs';
    displayName: '~A: \u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B (\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    code: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    mainName: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    mainCode: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'>;
    type: Attribute.Enumeration<['bachelor', 'magistracy', 'postgraduate']> &
      Attribute.Required;
    order: Attribute.Integer;
    graduates: Attribute.Relation<
      'api::educational-program.educational-program',
      'manyToMany',
      'api::graduate.graduate'
    >;
    department: Attribute.Relation<
      'api::educational-program.educational-program',
      'manyToOne',
      'api::department.department'
    >;
    employees: Attribute.Relation<
      'api::educational-program.educational-program',
      'manyToMany',
      'api::employee.employee'
    >;
    events: Attribute.Relation<
      'api::educational-program.educational-program',
      'manyToMany',
      'api::event.event'
    >;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::educational-program.educational-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::educational-program.educational-program',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::educational-program.educational-program',
      'oneToMany',
      'api::educational-program.educational-program'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEmployeeEmployee extends Schema.CollectionType {
  collectionName: 'employees';
  info: {
    singularName: 'employee';
    pluralName: 'employees';
    displayName: '~P: \u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Attribute.Media<'images'>;
    email: Attribute.Email;
    phone: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    location: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    hashtags: Attribute.Relation<
      'api::employee.employee',
      'manyToMany',
      'api::hashtag.hashtag'
    >;
    meta: Attribute.Component<'employee.meta'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    order: Attribute.BigInteger &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    showContacts: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    showHashtags: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<true>;
    head_in_department: Attribute.Relation<
      'api::employee.employee',
      'oneToOne',
      'api::department.department'
    >;
    departments: Attribute.Relation<
      'api::employee.employee',
      'manyToMany',
      'api::department.department'
    >;
    educationalPrograms: Attribute.Relation<
      'api::employee.employee',
      'manyToMany',
      'api::educational-program.educational-program'
    >;
    dpoCourses: Attribute.Relation<
      'api::employee.employee',
      'manyToMany',
      'api::dpo-course.dpo-course'
    >;
    events: Attribute.Relation<
      'api::employee.employee',
      'manyToMany',
      'api::event.event'
    >;
    eduEducationalPrograms: Attribute.Relation<
      'api::employee.employee',
      'manyToMany',
      'api::edu-educational-program.edu-educational-program'
    >;
    projects: Attribute.Relation<
      'api::employee.employee',
      'manyToMany',
      'api::project.project'
    >;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::employee.employee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::employee.employee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::employee.employee',
      'oneToMany',
      'api::employee.employee'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEmployeesPageEmployeesPage extends Schema.SingleType {
  collectionName: 'employees_pages';
  info: {
    singularName: 'employees-page';
    pluralName: 'employees-pages';
    displayName: '/structure/employees';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::employees-page.employees-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::employees-page.employees-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::employees-page.employees-page',
      'oneToMany',
      'api::employees-page.employees-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEntrancePageEntrancePage extends Schema.SingleType {
  collectionName: 'entrance_pages';
  info: {
    singularName: 'entrance-page';
    pluralName: 'entrance-pages';
    displayName: '/admission';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::entrance-page.entrance-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::entrance-page.entrance-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::entrance-page.entrance-page',
      'oneToMany',
      'api::entrance-page.entrance-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events';
  info: {
    singularName: 'event';
    pluralName: 'events';
    displayName: '~I: \u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    text: Attribute.Blocks &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    dateStart: Attribute.DateTime &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    dateEnd: Attribute.DateTime &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    days: Attribute.Component<'events.event-day', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    location: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    online: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    departments: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::department.department'
    >;
    educationalPrograms: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::educational-program.educational-program'
    >;
    dpoCourses: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::dpo-course.dpo-course'
    >;
    employees: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::employee.employee'
    >;
    news: Attribute.Relation<'api::event.event', 'manyToMany', 'api::new.new'>;
    showSchedule: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<true>;
    eduEducationalPrograms: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::edu-educational-program.edu-educational-program'
    >;
    projects: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::project.project'
    >;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::event.event',
      'oneToMany',
      'api::event.event'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEventsPageEventsPage extends Schema.SingleType {
  collectionName: 'events_pages';
  info: {
    singularName: 'events-page';
    pluralName: 'events-pages';
    displayName: '/info/events';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::events-page.events-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::events-page.events-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::events-page.events-page',
      'oneToMany',
      'api::events-page.events-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    subtitle: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    contacts: Attribute.Component<'footer.contacts', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    logos: Attribute.Component<'footer.logos', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    copyright: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    socialNetworks: Attribute.Component<'footer.social-network', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::footer.footer',
      'oneToMany',
      'api::footer.footer'
    >;
    locale: Attribute.String;
  };
}

export interface ApiGraduateGraduate extends Schema.CollectionType {
  collectionName: 'graduates';
  info: {
    singularName: 'graduate';
    pluralName: 'graduates';
    displayName: '~P: \u0412\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0438';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    additionalInfo: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    educational_programs: Attribute.Relation<
      'api::graduate.graduate',
      'manyToMany',
      'api::educational-program.educational-program'
    >;
    oldPrograms: Attribute.Component<'graduate.old-program', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media<'images'>;
    dpoCourses: Attribute.Relation<
      'api::graduate.graduate',
      'manyToMany',
      'api::dpo-course.dpo-course'
    >;
    projects: Attribute.Relation<
      'api::graduate.graduate',
      'manyToMany',
      'api::project.project'
    >;
    eduEducationalPrograms: Attribute.Relation<
      'api::graduate.graduate',
      'manyToMany',
      'api::edu-educational-program.edu-educational-program'
    >;
    order: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::graduate.graduate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::graduate.graduate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::graduate.graduate',
      'oneToMany',
      'api::graduate.graduate'
    >;
    locale: Attribute.String;
  };
}

export interface ApiGroupGroup extends Schema.CollectionType {
  collectionName: 'groups';
  info: {
    singularName: 'group';
    pluralName: 'groups';
    displayName: '~E: \u0413\u0440\u0443\u043F\u043F\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    course: Attribute.Enumeration<
      [
        'bachelor-1',
        'bachelor-2',
        'bachelor-3',
        'bachelor-4',
        'magistracy-1',
        'magistracy-2',
        'postgraduate-1',
        'postgraduate-2',
        'postgraduate-3',
        'postgraduate-4'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    eduEducationalProgram: Attribute.Relation<
      'api::group.group',
      'manyToOne',
      'api::edu-educational-program.edu-educational-program'
    >;
    exams: Attribute.Component<'group-calendar.exams', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    holidays: Attribute.Component<'group-calendar.holidays', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    eduPractices: Attribute.Component<'group-calendar.edu-practice', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    internships: Attribute.Component<'group-calendar.internship', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tests: Attribute.Component<'group-calendar.test', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    diplomas: Attribute.Component<'group-calendar.diploma', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    stateExams: Attribute.Component<'group-calendar.state-exam', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    preGraduatePractices: Attribute.Component<
      'group-calendar.pre-graduate-practice',
      true
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rescheduling: Attribute.Component<'group-calendar.test', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    retakes: Attribute.Component<'group-calendar.test', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::group.group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::group.group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::group.group',
      'oneToMany',
      'api::group.group'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHashtagHashtag extends Schema.CollectionType {
  collectionName: 'hashtags';
  info: {
    singularName: 'hashtag';
    pluralName: 'hashtags';
    displayName: '~P: #\u0425\u044D\u0448\u0442\u0435\u0433\u0438';
    description: '\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u044F\u044E\u0442\u0441\u044F \u043A \u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    employees: Attribute.Relation<
      'api::hashtag.hashtag',
      'manyToMany',
      'api::employee.employee'
    >;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hashtag.hashtag',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hashtag.hashtag',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::hashtag.hashtag',
      'oneToMany',
      'api::hashtag.hashtag'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHeroAboutHeroAbout extends Schema.SingleType {
  collectionName: 'hero_abouts';
  info: {
    singularName: 'hero-about';
    pluralName: 'hero-abouts';
    displayName: 'Hero About';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    icons: Attribute.Media<'images', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    items: Attribute.Component<'items.icons-block-item', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    link: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    linkTitle: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hero-about.hero-about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hero-about.hero-about',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::hero-about.hero-about',
      'oneToMany',
      'api::hero-about.hero-about'
    >;
    locale: Attribute.String;
  };
}

export interface ApiInfoInfo extends Schema.SingleType {
  collectionName: 'infos';
  info: {
    singularName: 'info';
    pluralName: 'infos';
    displayName: '/info';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::info.info', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::info.info', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::info.info',
      'oneToMany',
      'api::info.info'
    >;
    locale: Attribute.String;
  };
}

export interface ApiJournalJournal extends Schema.CollectionType {
  collectionName: 'journals';
  info: {
    singularName: 'journal';
    pluralName: 'journals';
    displayName: '~D: \u0416\u0443\u0440\u043D\u0430\u043B\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    order: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::journal.journal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::journal.journal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::journal.journal',
      'oneToMany',
      'api::journal.journal'
    >;
    locale: Attribute.String;
  };
}

export interface ApiJournalsPageJournalsPage extends Schema.SingleType {
  collectionName: 'journals_pages';
  info: {
    singularName: 'journals-page';
    pluralName: 'journals-pages';
    displayName: '/journals';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::journals-page.journals-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::journals-page.journals-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::journals-page.journals-page',
      'oneToMany',
      'api::journals-page.journals-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiJustWaitJustWait extends Schema.SingleType {
  collectionName: 'just_waits';
  info: {
    singularName: 'just-wait';
    pluralName: 'just-waits';
    displayName: '/just-wait';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::just-wait.just-wait',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::just-wait.just-wait',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::just-wait.just-wait',
      'oneToMany',
      'api::just-wait.just-wait'
    >;
    locale: Attribute.String;
  };
}

export interface ApiMainPageMainPage extends Schema.SingleType {
  collectionName: 'main_pages';
  info: {
    singularName: 'main-page';
    pluralName: 'main-pages';
    displayName: '/';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-page.main-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-page.main-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::main-page.main-page',
      'oneToMany',
      'api::main-page.main-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiNavBarNavBar extends Schema.SingleType {
  collectionName: 'nav_bars';
  info: {
    singularName: 'nav-bar';
    pluralName: 'nav-bars';
    displayName: 'NavBar (\u0414\u043E\u043F)';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    info: Attribute.Component<'items.nav-bar-item'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    structure: Attribute.Component<'items.nav-bar-item'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    education: Attribute.Component<'items.nav-bar-item'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    admission: Attribute.Component<'items.nav-bar-item'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    dpo: Attribute.Component<'items.nav-bar-item'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    science: Attribute.Component<'items.nav-bar-item'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    projects: Attribute.Component<'items.nav-bar-item'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    journals: Attribute.Component<'items.nav-bar-item'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::nav-bar.nav-bar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::nav-bar.nav-bar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::nav-bar.nav-bar',
      'oneToMany',
      'api::nav-bar.nav-bar'
    >;
    locale: Attribute.String;
  };
}

export interface ApiNewNew extends Schema.CollectionType {
  collectionName: 'news';
  info: {
    singularName: 'new';
    pluralName: 'news';
    displayName: '~I: \u041D\u043E\u0432\u043E\u0441\u0442\u0438';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    text: Attribute.Blocks &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    events: Attribute.Relation<
      'api::new.new',
      'manyToMany',
      'api::event.event'
    >;
    projects: Attribute.Relation<
      'api::new.new',
      'manyToMany',
      'api::project.project'
    >;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::new.new', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::new.new',
      'oneToMany',
      'api::new.new'
    >;
    locale: Attribute.String;
  };
}

export interface ApiNewsPageNewsPage extends Schema.SingleType {
  collectionName: 'news_pages';
  info: {
    singularName: 'news-page';
    pluralName: 'news-pages';
    displayName: '/info/news';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::news-page.news-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::news-page.news-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::news-page.news-page',
      'oneToMany',
      'api::news-page.news-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiPoliticPolitic extends Schema.SingleType {
  collectionName: 'politics';
  info: {
    singularName: 'politic';
    pluralName: 'politics';
    displayName: '\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    url: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    file: Attribute.Media<'images' | 'files'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::politic.politic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::politic.politic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::politic.politic',
      'oneToMany',
      'api::politic.politic'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: '~D: \u041F\u0440\u043E\u0435\u043A\u0442\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 300;
      }>;
    text: Attribute.Blocks &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    year: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    head: Attribute.Component<'projects.project-head'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    members: Attribute.DynamicZone<
      ['projects.project-member', 'projects.project-member-out-side']
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    employees: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::employee.employee'
    >;
    departments: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::department.department'
    >;
    graduates: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::graduate.graduate'
    >;
    news: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::new.new'
    >;
    events: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::event.event'
    >;
    order: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::project.project',
      'oneToMany',
      'api::project.project'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProjectsPageProjectsPage extends Schema.SingleType {
  collectionName: 'projects_pages';
  info: {
    singularName: 'projects-page';
    pluralName: 'projects-pages';
    displayName: '/projects';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::projects-page.projects-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::projects-page.projects-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::projects-page.projects-page',
      'oneToMany',
      'api::projects-page.projects-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiSiteDescriptionSiteDescription extends Schema.SingleType {
  collectionName: 'site_descriptions';
  info: {
    singularName: 'site-description';
    pluralName: 'site-descriptions';
    displayName: '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    keywords: Attribute.Component<'seo.keywords', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    category: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    publisher: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    abbreviation: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 6;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-description.site-description',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::site-description.site-description',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::site-description.site-description',
      'oneToMany',
      'api::site-description.site-description'
    >;
    locale: Attribute.String;
  };
}

export interface ApiStructureStructure extends Schema.SingleType {
  collectionName: 'structures';
  info: {
    singularName: 'structure';
    pluralName: 'structures';
    displayName: '/structure';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    navBarConfig: Attribute.Component<'nav.nav-bar-fields'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    content: Attribute.DynamicZone<
      [
        'content.accordion',
        'content.bento-grid',
        'content.buttons-block',
        'content.collection-all',
        'content.contacts',
        'content.doc-request-form',
        'content.files-grid',
        'content.files',
        'content.form-block',
        'content.group-calendar',
        'content.icons-block',
        'content.numbers',
        'content.slider-entity',
        'content.slider-photos',
        'content.slider-video',
        'content.text-block',
        'content.text-grid',
        'content.text-images',
        'content.text-video',
        'content.timeline'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::structure.structure',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::structure.structure',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::structure.structure',
      'oneToMany',
      'api::structure.structure'
    >;
    locale: Attribute.String;
  };
}

export interface ApiWeekendWeekend extends Schema.SingleType {
  collectionName: 'weekends';
  info: {
    singularName: 'weekend';
    pluralName: 'weekends';
    displayName: '\u0412\u044B\u0445\u043E\u0434\u043D\u044B\u0435 (\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0413\u0440\u0443\u043F\u043F)';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    days: Attribute.Component<'group-calendar.holidays', true> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::weekend.weekend',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::weekend.weekend',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::react-icons.iconlibrary': PluginReactIconsIconlibrary;
      'plugin::publisher.action': PluginPublisherAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::additional-page.additional-page': ApiAdditionalPageAdditionalPage;
      'api::department.department': ApiDepartmentDepartment;
      'api::department-type.department-type': ApiDepartmentTypeDepartmentType;
      'api::docs.docs': ApiDocsDocs;
      'api::dpo.dpo': ApiDpoDpo;
      'api::dpo-course.dpo-course': ApiDpoCourseDpoCourse;
      'api::edu-educational-program.edu-educational-program': ApiEduEducationalProgramEduEducationalProgram;
      'api::education-page.education-page': ApiEducationPageEducationPage;
      'api::educational-program.educational-program': ApiEducationalProgramEducationalProgram;
      'api::employee.employee': ApiEmployeeEmployee;
      'api::employees-page.employees-page': ApiEmployeesPageEmployeesPage;
      'api::entrance-page.entrance-page': ApiEntrancePageEntrancePage;
      'api::event.event': ApiEventEvent;
      'api::events-page.events-page': ApiEventsPageEventsPage;
      'api::footer.footer': ApiFooterFooter;
      'api::graduate.graduate': ApiGraduateGraduate;
      'api::group.group': ApiGroupGroup;
      'api::hashtag.hashtag': ApiHashtagHashtag;
      'api::hero-about.hero-about': ApiHeroAboutHeroAbout;
      'api::info.info': ApiInfoInfo;
      'api::journal.journal': ApiJournalJournal;
      'api::journals-page.journals-page': ApiJournalsPageJournalsPage;
      'api::just-wait.just-wait': ApiJustWaitJustWait;
      'api::main-page.main-page': ApiMainPageMainPage;
      'api::nav-bar.nav-bar': ApiNavBarNavBar;
      'api::new.new': ApiNewNew;
      'api::news-page.news-page': ApiNewsPageNewsPage;
      'api::politic.politic': ApiPoliticPolitic;
      'api::project.project': ApiProjectProject;
      'api::projects-page.projects-page': ApiProjectsPageProjectsPage;
      'api::site-description.site-description': ApiSiteDescriptionSiteDescription;
      'api::structure.structure': ApiStructureStructure;
      'api::weekend.weekend': ApiWeekendWeekend;
    }
  }
}
