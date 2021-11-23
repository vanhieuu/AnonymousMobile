const MainURL  = 'https://voucherhunter.herokuapp.com';
const URL = {
    Login: MainURL + '/login',
    ValidateToken :MainURL + `/auth/profile`,
    User: MainURL +`/user`,
    Products: MainURL + `/product`,
    Register:MainURL +`/register`,
    News:(pageNumber:number) =>MainURL + `/news?page=${pageNumber}`,
    item:(productID :string) =>MainURL + `/product?productID=${productID}`,
}

export default URL