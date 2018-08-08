async function f() {
    await Promise.reject('出错了');
}

f().then(v => console.log('success ' + v))
    .catch(e => console.log(e))
// 出错了
