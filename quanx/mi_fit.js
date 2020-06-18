// create by:ruicky
// create date: 2020-06-18 13:59:41

// 配置
/*
[MITM]
*.huami.com

[rewrite_local]
^https?:\/\/api-mifit-cn\.huami\.com\/v1\/data\/band_data\.json url script-request-body https://raw.githubusercontent.com/ruicky/scripts/master/quanx/mi_fit.js

*/

/**
 * @fileoverview Example of HTTP rewrite.
 *
 * @supported Quantumult X (v1.0.5-build173)
 */


// 原理会在同步手环信息的时候修改步数

var step =24510 // 可自定义
var body = $request.body;
console.log('body-->', body)

body = body.replace(/ttl%5C%22%3A[0-9]*%2C%5C%22dis/g,'ttl%5C%22%3A'+step+'%2C%5C%22dis')

if(/ttl%5C%22%3A[0-9]*%2C%5C%22dis/g.test(body)) {
    $notify('mi_fit', '获取步数成功', step)
}
$.setdata($request.body, body)
$done();