import axios from 'axios';

export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  const getNews = async () => {
    const baseUrl = 'https://nuxr3.zeabur.app';
    // console.log('baseUrl', baseUrl);
    isLoading.value = true;

    const url = `${baseUrl}/api/v1/home/news/`;

    try {
      const response = await axios.get(url);

      newsList.value = response.data.result;
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
    isLoading.value = false;
  };

  return {
    getNews,
    newsList,
    isLoading,
  };
};
