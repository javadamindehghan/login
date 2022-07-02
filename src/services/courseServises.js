import http from './httpService'
import config from './config.json'
export const getcourses=()=>{
    return http.get(`${config.toplearnapi}/api/courses`);
}