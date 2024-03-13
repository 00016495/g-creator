import Joi from 'joi'

export const GROUPS_SCHEMA = Joi.object({
    group_name: Joi.string().max(20).required(),
    group_size: Joi.number().required(),
}).required()
