import fs from 'node:fs'
import path from 'node:path'

export function getFileStats(fileName) {
  const __dirname = new URL('.', import.meta.url).pathname
  const filePath = path.join(__dirname, '..', fileName)

  const stats = fs.statSync(filePath)

  return {
    isFile: stats.isFile(),
    isDirectory: stats.isDirectory(),
    isSymbolicLink: stats.isSymbolicLink(),
    size: stats.size,
  }
}
