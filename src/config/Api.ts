const MainURL  = 'http://192.168.0.104:4000';
const URL = {
    Login: MainURL + '/login',
    ValidateToken :MainURL + `/validate`,
    User: MainURL +`/user`,
    Products: MainURL + `/product`,
    Register:MainURL +`/register`,
    News:(pageNumber:number) =>MainURL + `/news?page=${pageNumber}`
}

export default URL
    
export const articles_url = 'https://newsapi.org/v2/top-headlines?'
export const country_Code = 'us'
export const category='general'
export const api_key = 'e0524e4a7c424603baaa0d0e07fa62ac'