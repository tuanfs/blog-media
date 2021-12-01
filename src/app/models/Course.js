const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        img: { type: String, maxLength: 255 },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String },
    },
    { timestamp: true }
);

//Add Plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('Course', Course);
