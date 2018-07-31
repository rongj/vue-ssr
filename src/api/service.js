import axios from 'axios';

/* 详情 */
export const getArticleDetail = async data => 
    await axios.get('http://staticize.mop.com/subject/getArticleById', {params: data})
    .then((res) => res.data)
    .catch((e) => console.error(e))

/* 列表 */
export const getRecommendList = async data => 
    await axios.get('http://staticize.mop.com/dzh/subject/v2.0/wap/recommend', {params: data})
        .then(res => res.data)
        .catch(e => console.error(e))
