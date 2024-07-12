export const head = (list: number[]):number | undefined => list.length !== 0 ? list.slice(0,1).pop() : undefined
export const tail = (list: number[]):number[] => list.slice(1)
export const init = (list: number[]):number[] => list.slice(0, list.length - 1)
export const last = (list: number[]):number | undefined => list.length !== 0 ? list.slice(-1)?.pop() : undefined
