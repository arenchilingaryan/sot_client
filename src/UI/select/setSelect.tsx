
export function setSelect(...params: string[]) {
    const selectArr = []
    for (let i = 0; i < params.length; i++) {
        const arr = { id: i + 1, title: params[i] }
        selectArr.push(arr)
    }
    return selectArr
}