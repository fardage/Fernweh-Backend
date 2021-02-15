module.exports = mongoose => {
    let itemSchema = mongoose.Schema(
        {
            _id: String,
            name: String,
            packed: Boolean
        },
        {
            timestamps: true,
            _id: false
        }
    );

    let itemCategorySchema = mongoose.Schema(
        {
            _id: String,
            name: String,
            icon: String,
            items: [itemSchema]
        },
        {
            timestamps: true,
            _id: false
        }
    );

    let tripSchema = mongoose.Schema(
        {
            _id: String,
            destination: String,
            startDate: Date,
            endDate: Date,
            categories: [itemCategorySchema],
            colorA: String,
            colorB: String
        },
        {
            timestamps: true,
            _id: false
        }
    );

    tripSchema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("trip", tripSchema);
};