import { GET_PARAMS } from './types';

export const getParams = (category) => dispatch => {
    console.log("category: "+category)
    fetch('http://localhost:8085/api/param/category?cat='+category,{
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDTEVSSzEzMSIsImF1dGgiOlt7ImF1dGhvcml0eSI6Ik5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTllOTk5OTk5OTk5OTk5OTk5OTk5OTllOTk5OTk5OTk5OTllOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OWVlZWVlOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5ZWU5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OIn1dLCJpYXQiOjE1NjI1MTExNjIsImV4cCI6MTU2MjUxNDc2Mn0.HrB5yubrjClSddTC0-4FtDjhqP78-1VXtOqK84FfJa4',
        },
    })
        .then( res => res.json())
        .then(params => dispatch({
            type: GET_PARAMS,
            payload: params.List
        }))
    .catch(error => console.log(error));
};