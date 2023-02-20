export type Application = {
  name: string;
  contributors: string[];
  version: number;
  apdex: number;
  host: string[];
};

export type ApplicationsByHost = {
  [key: string]: Application[];
};
