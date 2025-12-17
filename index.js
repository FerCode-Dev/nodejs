import {sum} from './cjs/index.js'
import {getFileStats} from './system/file-system.js'
import {getOsInfo} from './system/info.js'

console.log(sum(2, 3))
console.log(sum(8, 3))

console.log('Información del sistema operativo:')
console.log('-------------------')

const osInfo = getOsInfo()

console.log('Nombre del sistema operativo:', osInfo.platform)
console.log('Versión del sistema operativo:', osInfo.release)
console.log('Arquitectura:', osInfo.arch)
console.log('CPUs:', osInfo.cpus)
console.log('Memoria libre (MB):', osInfo.freeMemoryMB)
console.log('Memoria total (MB):', osInfo.totalMemoryMB)
console.log('Uptime (horas):', osInfo.uptimeHours)

const stats = getFileStats('archivo.txt')

console.log(stats.isFile, stats.isDirectory, stats.isSymbolicLink, stats.size)

console.log(osInfo.platform)
console.log(osInfo.arch)
console.log(osInfo.cpus)

console.log('Node running 🚀')

console.log('Node running 🚀')
