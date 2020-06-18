// create by:ruicky
// create date: 2020-06-18 13:59:41

// 配置
/*
[MITM]
*.huami.com

[rewrite_local]
^https?:\/\/api-mifit-cn\.huami\.com\/v1\/data\/band_data\.json url script-request-body https://raw.githubusercontent.com/ruicky/scripts/master/quanx/mi_fit.js

*/

// 原理会在同步手环信息的时候修改步数

var step = 24510 // 可自定义

// 采用随机数 范围是 24000 - 25000 之间
var max = 25000
var min = 24000
step = parseInt(Math.random()*(max-min+1)+min,10)

var body = $request.body;

body = body.replace(/ttl%5C%22%3A[0-9]*%2C%5C%22dis/g,'ttl%5C%22%3A'+step+'%2C%5C%22dis')

if(/ttl%5C%22%3A[0-9]*%2C%5C%22dis/g.test(body)) {
    $notify('mi_fit', '获取步数成功', step)
}
$done({url:$request.url, body});