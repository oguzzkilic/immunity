import { Options } from '../methods';

import getModuleIndex from './getModuleIndex';
import loadFile from './loadFile';

function load(moduleName: string, globals: { [key: string]: any }, options: Options): any {
    const moduleIndex = getModuleIndex(options, moduleName);

    return loadFile(moduleIndex, globals);
}

export {
    load as default,
};