function reverseWords(str) {
    let res = str.split(' ').map(e => e.split('').reverse().join('')).join(' ')

    return res
}