import path from 'node:path'

export function showPathExamples() {
  // barra separadora de carpetas según SO
  console.log(path.sep)

  // unir rutas con path.join
  const filePath = path.join('content', 'subfolder', 'test.txt')
  console.log(filePath)

  // nombre del archivo
  const base = path.basename('/tmp/midu-secret-files/password.txt')
  console.log(base)

  const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
  console.log(filename)

  const extension = path.extname('my.super.image.jpg')
  console.log(extension)
}
s
