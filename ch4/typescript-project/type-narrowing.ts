const getValueWithType = (value?: string | string[] | 23) => {
  if (value === 23) {
    return `number: ${value}`;
  }
  if (typeof value === "string") {
    return `string: ${value}`;
  }
  if (Array.isArray(value)) {
    return `array: ${value.join(", ")}`;
  }
  value satisfies undefined;
  return "undefined";
};
