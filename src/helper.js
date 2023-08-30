const checkFetch = (response) => {
    if (!response.ok) {
        throw new Response('', {statusText: "Something went wrong!!!", status: response.status})
    }
}

export {checkFetch}