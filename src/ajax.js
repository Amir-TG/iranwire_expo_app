export default {
   async fetchHomePage(){
        try {
            const response = await fetch(
              'https://iranwire.com/fa/api/v1/home'
            );
            const responseJson = await response.json();
            return responseJson;
          } catch (error) {
            console.error(error);
          }
    },
    async fetchNewsDetails(newsId){
      try {
          const response = await fetch(
            'https://iranwire.com/fa/api/v1/articles/' + newsId
          );
          const responseJson = await response.json();
          return responseJson;
        } catch (error) {
          console.error(error);
        }
  },async fetchfeaturesDetails(newsId){
    try {
        const response = await fetch(
          'https://iranwire.com/fa/api/v1/articles/' + newsId
        );
        const responseJson = await response.json();
        return responseJson;
      } catch (error) {
        console.error(error);
      }

}
}
