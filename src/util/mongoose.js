module.exports = {
    multipleMongooseToObject: (courses) => {
        return courses.map((course) => course.toObject());
    },
    mongooseToObject: (course) => {
        return course.toObject();
    },
};
