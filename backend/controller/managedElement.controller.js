const managedElementService = require("../service/managedElement.service");
const logger = require("../logger/api.logger");

class TodoController {
  async getManagedElements() {
    logger.info("Controller: getManagedElements");
    return await managedElementService.getManagedElements();
  }

  async createManagedElement(managedElement) {
    logger.info("Controller: createManagedElement", managedElement);
    return await managedElementService.createManagedElement(managedElement);
  }

  async updateManagedElement(managedElement) {
    logger.info("Controller: updateManagedElement", managedElement);
    return await managedElementService.updateManagedElement(managedElement);
  }

  async deleteManagedElement(managedElementId) {
    logger.info("Controller: deleteManagedElement", managedElementId);
    return await managedElementService.deleteManagedElement(managedElementId);
  }

  async getLLDP(sw) {
    logger.info("Controller: getlldpNeighbors", sw);
    return await managedElementService.getLLDP(sw);
  }
}
module.exports = new TodoController();
