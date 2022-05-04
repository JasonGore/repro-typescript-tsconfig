// tsconfig.json is limiting types to jest, yet the import of IAudience below
// causes Node types to be available ambiently, allowing this import and use of fs
// to unexpectedly succeed. Commenting out the import of IAudience below will cause 
// these lines to fail as expected.
import * as fs from 'fs';

fs.writeFileSync('test.txt', 'test');

import { IAudience } from '@fluidframework/container-definitions';
let audience: IAudience | string = 'test';
fs.writeFileSync('test.txt', audience);
