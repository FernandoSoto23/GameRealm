/// <reference types="react-scripts" />

declare module "react/jsx-runtime" {
    export default any;
  }

  declare namespace NodeJS {
    interface ProcessEnv {
       //types of envs
        NODE_ENV: 'development' | 'production' | 'test';
        PUBLIC_URL: string;
        RUTA : string ;

    }
}