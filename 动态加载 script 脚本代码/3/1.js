console.log('1.js 开始执行');

function blockFor5Seconds() {
    const start = Date.now();  // 获取当前时间
    while (Date.now() - start < 5000) {
        // 循环 5 秒钟，阻塞线程
    }
    console.log('5 秒钟已过去');
}

console.log('开始阻塞');
blockFor5Seconds();  // 调用阻塞函数
console.log('1.js 同步代码执行阻塞结束');
