let slugify = require("slugify");
const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
    async beforeCreate(event) {
        const { data } = event.params
        const id = event.params?.where?.id ?? null;
        console.log("beforeCreate", event.params.data)

        await generateSlug(id, data);
    },

    async afterCreate(event) {
        const { data } = event.params
        const id = event.params?.where?.id ?? null;
        console.log("afterCreate", event.params.data)

        await generateSlug(id, data);
    },

    async beforeUpdate(event) {
        const { where } = event.params
        const id = where.id;

        const data = await strapi.entityService.findOne("api::additional-page.additional-page", id)

        await generateSlug(id, data);
    }
  };
  
  const generateSlug = async (id, data) => {
    const DEFAULT_LOCALE = "ru";
    const locale = !id ? "ru" : await getLocale(id);
  
    //Generate slug for en locale only
    if (data.title && locale == DEFAULT_LOCALE) {
      data.slug = slugify(data.title, { lower: true });
    }
  
    if (!data.slug) {
      throw new ApplicationError("Slug is required!");
    }
  };
  
  const getLocale = async (id) => {
    const res = await strapi.service("api::additional-page.additional-page").findOne(id);
  
    return res.locale;
  };