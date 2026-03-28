export function generateId() {
    const randomValueArray = new Uint32Array(10);
    let randomValueString = "";
    window.crypto.getRandomValues(randomValueArray);
    for (let i = 0; i < randomValueArray.length; i++) {
        randomValueString += (randomValueArray[i] * 1246 * (i + 71)) + "0" + (randomValueArray[i] * 851);
    }
    return randomValueString;
}