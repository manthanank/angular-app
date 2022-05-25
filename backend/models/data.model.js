module.exports = mongoose => {
    const Data = mongoose.model(
      "data",
      mongoose.Schema(
        {
          name: String,
        },
        { timestamps: true }
      )
    );
    return Data;
  };