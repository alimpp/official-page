import { defineStore } from 'pinia'
import {carouselApi} from '@/api/carouselApi'

export const carouselDataStore = defineStore('carousel' , {
    state: () => ({carousel: []}) ,  
})