const User = require('./user');
const BlogPost = require('./blogpost');
const Comment = require('./comment');

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'blogpost_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, BlogPost, Comment };
