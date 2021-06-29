const managedElementRepository = require("../repository/managedElement.repository");

class ManagedElementService {
  constructor() {}

  async getManagedElements() {
    return await managedElementRepository.getManagedElements();
  }

  async createManagedElement(managedElement) {
    return await managedElementRepository.createManagedElement(managedElement);
  }

  async updateManagedElement(managedElement) {
    return await managedElementRepository.updateManagedElement(managedElement);
  }

  async deleteManagedElement(managedElementId) {
    return await managedElementRepository.deleteManagedElement(
      managedElementId
    );
  }

  async getLLDP(sw) {
    return await managedElementRepository.getLLDP(
      sw
    );
  }
}

module.exports = new ManagedElementService();
