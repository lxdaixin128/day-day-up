let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://domain/service');

// request state change event
xhr.onreadystatechange = function () {
    // request completed?
    if (xhr.readyState !== 4) return;

    if (xhr.status === 200) {
        // request successful - show response
        console.log(xhr.responseText);
    } else {
        // request error
        console.log('HTTP error', xhr.status, xhr.statusText);
    }
};

// xhr.timeout = 3000; // 3 seconds
// xhr.ontimeout = () => console.log('timeout', xhr.responseURL);

// progress事件可以报告长时间运行的文件上传
// xhr.upload.onprogress = p => {
//     console.log(Math.round((p.loaded / p.total) * 100) + '%');
// }

// start request
xhr.send();

