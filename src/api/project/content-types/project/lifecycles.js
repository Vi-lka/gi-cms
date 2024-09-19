let slugify = require("slugify");
const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeCreate(project) {
      const { data } = project.params
      console.log("beforeCreate", project.params)

      await generateSlug(data);
  },
};
  
const generateSlug = async (data) => {
  const DEFAULT_LOCALE = "ru";
  console.log("locale: ", data.locale)

  //Generate slug for ru locale only
  if (data.title && data.locale === DEFAULT_LOCALE) {
    data.slug = slugify(data.title, { lower: true });
  }

  if (!data.slug) {
    throw new ApplicationError("Slug is required!");
  }
};