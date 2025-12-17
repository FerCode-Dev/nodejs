import os from 'os'

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
