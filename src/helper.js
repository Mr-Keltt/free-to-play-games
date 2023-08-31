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

const getFilterObject = (params) => {
    const {platform, category, sortBy} = params;
    const filterObject = {}

    if (platform && platform !== 'all') {
        filterObject['platform'] = platform
    }

    if (category && category !== 'all') {
        filterObject['category'] = category
    }

    if (sortBy && sortBy !=="all") {
        filterObject['\'sort-by\''] = sortBy
    }

    return filterObject;
}

export {checkFetch, cleadGamesCash, getFilterObject}