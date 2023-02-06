import axios from 'axios'
import { base_url , application_path } from '@/services/applicationPath'
import { carouselDataStore } from '@/stores/carouselDataStore'
const carouselStore = carouselDataStore()
import {ErrorNotification} from '@/services/notifications'

export const carouselApi = async () => {
    await axios.get(`${base_url}${application_path.GET.carousel}`)
    .then((res) => {
        carouselStore.carousel = res.data
    }).catch((err)=> {
        ErrorNotification(5000,'Network is low please check your network and try again' , 'bottom-center')
    })
}