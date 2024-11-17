//
// Listing 5.18: A function with TSDoc comments
//

/**
 * Emits a string describing a ninja performing an action.
 *
 * @param ninja – The name of a ninja
 * @param action – The action the ninja is performing, or `null` if
 *                 they're doing nothing (defaults to "skulking")
 * @returns A string of the form "Yagyu sneaking"
 */
function performAction(ninja: string, action: string | null = "skulking") {
  if (action === null) {
    return ninja + " did nothing";
  }
  return ninja + " " + action;
}
