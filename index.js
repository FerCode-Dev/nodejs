import {sum} from './cjs/index.js'
import {getFileStats} from './system/fs-stats.js'
import {getOsInfo} from './system/info.js'
import {readFile} from './system/fs-readFile.js'
import {readTextFile} from './system/fs-readFile-promises.js'

console.log(sum(2, 3))
console.log(sum(8, 3))
