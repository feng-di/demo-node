'use strict;'

const promise = new Promise(function (resolve, reject) {
  // ... some code

  if (true /* 异步操作成功 */) {
    resolve(value)
  } else {
    reject(error)
  }
})

/**
 * Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
 */

promise.then(function (value) {
  // success
}, function (error) {
  // failure
})

/**
 * Example of using promise
 *
 * @param url
 * @returns {Promise<any>}
 */
const getJSON = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    const client = new XMLHttpRequest()
    client.open('GET', url)
    client.onreadystatechange = handler
    client.responseType = 'json'
    client.setRequestHeader('Accept', 'application/json')
    client.send()
  })

  return promise
}

getJSON('https://www.google.fr').then(function (json) {
  console.log('Contents: ' + json)
}, function (error) {
  console.error('出错了', error)
})

// --------------------------------------
async function f () {
  await Promise.reject('出错了')
}

f().then(v => console.log(v))
  .catch(e => console.log(e))
// 出错了

/************************************/
async function f () {
  try {
    await Promise.reject('出错了')
  } catch (e) {
  }
  return await Promise.resolve('hello world')
}

f()
  .then(v => console.log(v))

/**********************************/
async function dbFuc (db) {
  let docs = [{}, {}, {}]
  let promises = docs.map((doc) => db.post(doc))

  let results = await Promise.all(promises)
  console.log(results)
}

// 或者使用下面的写法

async function dbFuc (db) {
  let docs = [{}, {}, {}]
  let promises = docs.map((doc) => db.post(doc))

  let results = []
  for (let promise of promises) {
    results.push(await promise)
  }
  console.log(results)
}

fetch()
