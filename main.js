const str = `
010-1234-5678
kms89123@gmail.com
https://google.com
The quick brown fox for jumps over the lazy dog.
abbcccdddd
habp
http://google.com
`;

// const regExp = new RegExp('the', 'gi');
// const regExp = /the/gi;
// console.log(str.match(regExp));

// const regExp = /fox/gi;
// console.log(regExp.test(str));

// const regExp = /fox/gi;
// console.log(str.replace(regExp, 'msko'));

// \.$/gi: 마지막 문자열이 .인지 확인 => null
console.log(str.match(/\.$/gi));
// \.$/gim: 라인별로 마지막 문자열이 .인지 확인 => ["."]
console.log(str.match(/\.$/gim));

console.log(str.match(/d$/gm));
console.log(str.match(/^t/gim));

console.log(str.match(/h..p/g));
console.log(str.match(/fox|dog/g));
console.log(str.match(/fox|dog/));
console.log(str.match(/https?/g));

console.log(str.match(/d{2}/g));
console.log(str.match(/d{2,}/g));
console.log(str.match(/d{2,5}/g));

// \w: 숫자,영어,_
console.log(str.match(/\w{2,3}/g));
// \b: 경계(\w와 반대)
console.log(str.match(/\b\w{2,3}\b/g));

// f로 시작하는 단어
console.log(str.match(/\bf\w{1,}\b/g));

const h = `  the hello  world   !

`;

//공백제거
console.log(h.replace(/\s/g, ''));

//@기준 앞 문자 가져오기
console.log(str.match(/.{1,}(?=\@)/g));

//@기준 뒤 문자 가져오기
console.log(str.match(/(?<=\@).{1,}/g));
