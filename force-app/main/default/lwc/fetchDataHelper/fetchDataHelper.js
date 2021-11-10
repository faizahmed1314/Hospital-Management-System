export default function fetchDataHelper({ amountOfRecords }) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    }).then((response) => response.json());
}