export const PUT_DATA = 'PUT_DATA';
export const LOAD_DATA = 'LOAD_DATA';

export const putData = (payload) => ({type: PUT_DATA, payload});
export const loadData = () => ({type: LOAD_DATA});