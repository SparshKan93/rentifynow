import apiClient from './client';

const getAll = async () => {
    try {
        const response = await apiClient.get('/api/posts/fetchallposts');

        if (response.status >= 200 && response.status < 300) {
            if (response.data && response.data.success) {
                return response.data.posts;
            } else {
                console.error('Error: Response data does not contain "success" field.');
                return [];
            }
        } else {
            console.error('Error: Unexpected response status:', response.status);
            return [];
        }
    } catch (error) {
        console.error('Error while getting posts:', error.message);
        return [];
    }
};

const getSelectedPosts = async (category) => {
    try {
        const response = await apiClient.get('/api/posts/fetchselectedposts', {
            params: { category }
        });

        if (response.status >= 200 && response.status < 300) {
            if (response.data && response.data.success) {
                return response.data.posts;
            } else {
                console.error('Error: Response data does not contain "success" field.');
                return [];
            }
        } else {
            console.error('Error: Unexpected response status:', response.status);
            return [];
        }
    } catch (error) {
        console.error('Error while getting selected posts:', error.message);
        return [];
    }
};

export default {
    getAll,
    getSelectedPosts
};
