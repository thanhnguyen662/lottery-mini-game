const testHistoryController = (req, res, next) => {
   return res.status(200).json({
      message: 'OK',
   });
};

module.exports = {
   testHistoryController,
};
