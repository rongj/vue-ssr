const defaultOptions = {
    timeout: 8000,
    jsonpCallback: 'callback',
    jsonpCallbackFunction: null, // default: random callback function name
    params: {}
}

let window: any;


/**
 * Generate random string.
 * @method generateCallbackFunction
 * @return { String }
 */
function generateCallbackFunction(): string {
    return `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`
}

/**
 * Format params into querying string.
 * @param { Object }
 * @return { String }
 */
function formatParams(param: any): string {
    var arr: any[] = []
    Object.keys(param).forEach(function (name) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(param[name]))
    })
    return arr.join('&')
}

// Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined' error if request timeout
function clearFunction(functionName: string): void {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
        delete window[functionName]
    } catch (e) {
        window[functionName] = undefined
    }
}

function removeScript(scriptId: string): void {
    const script: any = document.getElementById(scriptId)
    document.getElementsByTagName('head')[0].removeChild(script)
}

function fetchJsonp(_url: string, options: any = {}): Promise<any> {
    // to avoid param reassign
    let url = _url
    const timeout: number = options.timeout || defaultOptions.timeout
    const jsonpCallback: any = options.jsonpCallback || defaultOptions.jsonpCallback
    const params: any = options.params || defaultOptions.params
    let queryStr: string = formatParams(params)

    let timeoutId: any

    return new Promise((resolve, reject) => {
        let callbackFunction: 'string' = options.jsonpCallbackFunction || generateCallbackFunction()
        const scriptId: string = `${jsonpCallback}_${callbackFunction}`

        window[callbackFunction] = (response: any) => {
            // resolve({
            //     ok: true,
            //     // keep consistent with fetch API
            //     json: () => Promise.resolve(response),
            // })
            resolve(response)

            if (timeoutId) {
                clearTimeout(timeoutId)
            }

            removeScript(scriptId)
            clearFunction(callbackFunction)
        }

        // Check if the user set their own params, and if not add a ? to start a list of params
        url = url + (/\?/.test(url) ? '&' : '?')
        // url += (url.indexOf('?') === -1) ? '?' : '&'

        if (queryStr) {
            url += (queryStr + '&')
        }

        const jsonpScript: any = document.createElement('script')
        jsonpScript.setAttribute('src', `${url}${jsonpCallback}=${callbackFunction}`)
        jsonpScript.id = scriptId
        document.getElementsByTagName('head')[0].appendChild(jsonpScript)

        timeoutId = setTimeout(() => {
            reject(new Error(`JSONP request to ${_url} timed out`))

            clearFunction(callbackFunction)
            removeScript(scriptId)
        }, timeout)
    })
}

export default fetchJsonp