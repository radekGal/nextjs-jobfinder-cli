export const sluger = (val1: string , val2: string) => {
  return `${val1} ${val2}`.toLowerCase().split(' ').join('-')
}