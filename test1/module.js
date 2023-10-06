function getContentType(extension){
    let returnValue='';
    switch(extension){
        case '.css':
            returnValue= 'text/css';
            break;
    }
    return returnValue;
}
module.exports={getContentType:getContentType};