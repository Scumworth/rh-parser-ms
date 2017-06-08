const getUserObj = (req) => {
    userObj = {};
    const rawIp = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress;
    const rawLang = req.headers["accept-language"];
    const rawOs = req.headers["user-agent"]
    
    //parse ip address
    if (rawIp.indexOf(':') !== -1) {
        userObj.ipaddress = rawIp.split(':').pop();
    }
    else {
        userObj.ipaddress = rawIp;
    }

    //parse language
    userObj.language = rawLang.split(',')[0];
    
    //parse os
    const osDetails = rawOs.match(/\(([^)]+)\)/)
    if(osDetails.length) {
        userObj.software = osDetails[1];
    }

    return userObj;
    
};

module.exports.getUserObj = getUserObj;
