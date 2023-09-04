import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'cd93aa7188f1470b99c4514e8183ce23'
    }
})