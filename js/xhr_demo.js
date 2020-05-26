function execInstance(){
    var url = "http://nrpc.oa.com/idc/rerun-service/create_task";
    var params = {module_info: {address: "ip://9.144.143.136:18211", module_name: "st_hot_svr", service_cmd: 1},task_name: "图文链路热点test1"};
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(JSON.stringify(params));
}

var url = "http://nrpc.oa.com/idc/rerun-service/create_task";
var params = {module_info: {address: "ip://9.144.143.136:18211", module_name: "st_hot_svr", service_cmd: 1},task_name: "图文链路热点test"};
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.statusText);
        }
    }
};
xhr.onerror = function (e) {
    console.error(xhr.statusText);
};
xhr.send(JSON.stringify(params));


var url = "http://nrpc.oa.com/idc/rerun-service/run_exec_instance";
var params = "instance_id='201912061611_619860'";
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.onload = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.statusText);
        }
    }
};
xhr.onerror = function (e) {
    console.error(xhr.statusText);
};