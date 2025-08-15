const PackingRequest = require('./packingModel');

exports.processPackingRequest = async ({ destination, startDate, endDate, activities, tripType }) => {
  // Save to DB
  const newRequest = new PackingRequest({
    destination,
    startDate,
    endDate,
    activities,
    tripType
  });

  await newRequest.save();

  return {
    message: 'Packing request saved successfully',
    data: newRequest
  };
};
