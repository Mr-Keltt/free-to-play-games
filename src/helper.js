const checkFetch = (response) => {
    if (!response.ok) {
        throw new Response('', {statusText: "Something went wrong!!!", status: response.status})
    }
}

const cleadGamesCash = () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        
        const dateCash = JSON.parse(localStorage.getItem(key)).dateCash

        if (dateCash !== null) {
            if (Date.now() - dateCash > 5 * 60 * 1000) {
                localStorage.removeItem(key)
            }
        }
    }
}

export {checkFetch, cleadGamesCash}