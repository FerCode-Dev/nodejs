import os from 'node:os'

/* ===============================
   LÓGICA
   =============================== */

export function getOsInfo() {
  const toMB = bytes => (bytes / 1024 / 1024).toFixed(2)

  return {
    platform: os.platform(),
    release: os.release(),
    arch: os.arch(),
    cpus: os.cpus().length,
    freeMemoryMB: toMB(os.freemem()),
    totalMemoryMB: toMB(os.totalmem()),
    uptimeHours: (os.uptime() / 60 / 60).toFixed(2),
  }
}

/* ===============================
   EJECUCIÓN (MISMO ARCHIVO)
   =============================== */
if (import.meta.url === `file://${process.argv[1]}`) {
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
}
