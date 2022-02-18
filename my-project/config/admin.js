module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6672a8985f7fd2496a43fffd9ac9dfac'),
  },
});
