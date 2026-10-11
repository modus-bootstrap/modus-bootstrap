import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { getDocsFsPath } from '@libs/path'

// The build date, used when a page has no source file or Git has no date for it.
const buildDate = new Date().toISOString().slice(0, 10)

let isShallowRepository: boolean | undefined

// A shallow clone has only the latest commit, so Git dates in it are wrong for most files.
function isShallow() {
  if (isShallowRepository === undefined) {
    try {
      isShallowRepository =
        execFileSync('git', ['rev-parse', '--is-shallow-repository'], { encoding: 'utf8' }).trim() === 'true'
    } catch {
      isShallowRepository = true
    }
  }

  return isShallowRepository
}

// Returns the date (YYYY-MM-DD) of the last commit that changed a file, relative to the docs root.
// Falls back to the build date when the file is unknown, untracked, or the repository is a shallow clone.
export function getLastModified(filePath?: string) {
  if (!filePath || isShallow()) {
    return buildDate
  }

  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', path.join(getDocsFsPath(), filePath)], {
      encoding: 'utf8'
    }).trim()

    return date || buildDate
  } catch {
    return buildDate
  }
}
