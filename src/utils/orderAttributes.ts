export function groupBy<T, K extends keyof T>(array: T[], key: K) {
  return array.reduce<Record<string, T[]>>((acc, item) => {
    const group = String(item[key])

    if (!acc[group]) {
      acc[group] = []
    }

    acc[group].push(item)

    return acc
  }, {})
}