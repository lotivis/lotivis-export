import { GERMAN_NUMBER_FORMAT } from "./formats.js";

/**
 * Gets or sets the configuration of lotivis.
 * @param {*} input
 */
export function ltv_config(input) {
  // return config object for no arguments
  if (!arguments.length) return config;

  // return the value for the given key if input is string
  if (arguments.length === 1 && typeof input === "string")
    return Object.hasOwnProperty.call(config, input) ? config[input] : null;

  // iterate values of input, add them to lotivis config
  for (const key in input) {
    if (!Object.hasOwnProperty.call(input, key)) continue;
    if (Object.hasOwnProperty.call(config, key)) {
      config[key] = input[key];
      ltv_debug("update config", key, " = ", config[key]);
    } else {
      ltv_debug("unknown config key", key);
    }
  }
}

export function runsInBrowser() {
  return !(typeof document === "undefined");
}

/**
 * Gets or sets whethter lotivis is in debug mode.
 * @param {Boolean} enabled Enable debug logging
 */
export function ltv_debug(...args) {
  if (!arguments.length) {
    return config.debug;
  } else if (arguments.length === 1 && typeof args[0] === "boolean") {
    ltv_config({ debug: args[0] });
  } else if (config.debug) {
    console.log("[ltv] ", ...args);
  }
}
