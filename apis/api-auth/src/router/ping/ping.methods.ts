import os from "os";
interface PingMethodsInterface {
  getPing: () => Promise<Record<string, unknown>>;
}
const { name, version, description } = require("../../../package.json");
/**
 * @description Root Methods
 */
export default class PingMethods implements PingMethodsInterface {
  /**
   * @description Get Root
   */
  async getPing(): Promise<Record<string, unknown>> {
    return {
      name: name,
      description,
      version,
      uptime: process.uptime(),
      hostname: os.hostname(),
      platform: os.platform(),
      environment: process.env.NODE_ENV,
    };
  }
}
