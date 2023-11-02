import { isDefined } from 'tutility';

export const getComponentParameter = <I extends object>(instance: I) => {
  return (params: { parameter: keyof I; description: string; type?: string }) => {
    const type = params.type ?? typeof instance[params.parameter];

    return {
      parameter: params.parameter,
      type,
      description: params.description,
      default: isDefined(instance[params.parameter]) ? `${instance[params.parameter]}` : undefined,
    };
  };
};
