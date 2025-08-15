const packingService = require('./packingService');

exports.createPackingRequest = async (req, res, next) => {
  try {
    const { destination, startDate, endDate, activities, tripType } = req.body;

    if (
      !destination ||
      !startDate ||
      !endDate ||
      !Array.isArray(activities) ||
      !tripType
    ) {
      return res.status(400).json({
        error:
          'Invalid input. Provide destination, startDate, endDate, activities array, and tripType.'
      });
    }

    const result = await packingService.processPackingRequest({
      destination,
      startDate,
      endDate,
      activities,
      tripType
    });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
