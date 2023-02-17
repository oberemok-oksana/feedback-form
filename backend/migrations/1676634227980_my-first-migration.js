/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("feedbacks", {
    id: "id",
    name: { type: "varchar(1000)", notNull: true },
    email: { type: "varchar(1000)", notNull: true },
    message: { type: "text", notNull: true },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("feedbacks");
};
