type ClassNamesObject = { [key: string]: boolean };
type ClassNames = string | undefined | null | false;

function clxs(classNames: ClassNames, obj?: ClassNamesObject): string {
  const objClassNames = obj ? Object.keys(obj).filter((key) => obj[key]) : [];
  const allClassNames = [classNames, ...objClassNames].filter(Boolean);
  return allClassNames.join(' ');
}

export { clxs };
