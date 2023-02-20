type ClassNamesObject = { [key: string]: boolean };
type ClassNames = string;

function classNames(classes: ClassNames, obj?: ClassNamesObject): string {
  const objClasses = obj ? Object.keys(obj).filter((key) => obj[key]) : [];
  const allClasses = [classes, ...objClasses].filter(Boolean);
  return allClasses.join(' ');
}

export { classNames };
