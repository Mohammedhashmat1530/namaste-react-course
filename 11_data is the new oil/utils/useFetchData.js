import React from 'react';

async function useFetchData(url) {
    const response = await fetch(url);
    const json = await response.json();

    return json;
}

export default useFetchData;
