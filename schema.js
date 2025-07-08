const Joi=require("joi");

module.exports.listingSchema=Joi.object({
    listing: Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
        price:Joi.number().required().min(0),
        category: Joi.string()
      .valid(
        "Trending",
        "Rooms",
        "Iconic Cities",
        "Mountains",
        "Castles",
        "Amazing Pools",
        "Farms",
        "Arctic",
        "Domes",
        "Boats"
      )
      .required(),
        image:Joi.object({
            url: Joi.string().uri().allow("",null)
        }).optional()
    }).required()
});

module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required()
})