import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
        Authorization: 'Client-ID YNUVBJVltb1A3P90I4Gb0YOjV010ERUc8hMIpoax9gU'
    },
    params: {
        query: term,
    },
    });

    console.log(response);

    return response.data.results;      
};

export default searchImages;