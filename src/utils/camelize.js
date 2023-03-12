export const Camelize = (text = "") => {
    const arr = []
    for(let i = 0; i < (text.length); i++){
        i === 0 ? arr.push(text[i].toUpperCase()) : arr.push(text[i])
    }
    return arr.join("")
}