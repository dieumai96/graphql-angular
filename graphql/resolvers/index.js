const employeeResolver = require('./employee');
const buildingResolver = require('./building');
const rootResolver = {
  ...employeeResolver,
  ...buildingResolver
};

module.exports = rootResolver;