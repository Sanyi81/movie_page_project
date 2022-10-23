import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genreService = {
    getAll: () => axiosService.get(urls.genres),
    getById: (id) => axiosService.get(`${urls.genres}/${id}`)
}

export {genreService};