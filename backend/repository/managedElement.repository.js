const { connect, disconnect } = require("../config/database");
const { ManagedElement } = require("../model/managedElement");
const logger = require("../logger/api.logger");

class ManagedElementRepository {
  constructor() {
    connect();
  }

  async getManagedElements() {
    const managedElements = await ManagedElement.find({});
    console.log("ManagedElements:::", managedElements);
    return managedElements;
  }

  async createManagedElement(managedElement) {
    let data = {};
    try {
      data = await ManagedElement.create(managedElement);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateManagedElement(managedElement) {
    let data = {};
    try {
      data = await ManagedElement.updateOne(managedElement);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deleteManagedElement(managedElementId) {
    let data = {};
    try {
      data = await ManagedElement.deleteOne({ _id: managedElementId });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new ManagedElementRepository();
