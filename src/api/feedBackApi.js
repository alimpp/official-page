import axios from 'axios'
import { base_url , application_path } from '@/services/applicationPath'
import { SuccessNotification } from '@/services/notifications'
import { ErrorNotification } from '@/services/notifications'

export const sendFeedback = async (param) => {
    console.log(param);
    await axios.post(`${base_url}${application_path.POST.sendFeedBack}`, 
    {name : param.name , email : param.email , message : param.message}
    ).then((res) => {
        SuccessNotification(3000,'FEED BACK IS DONE', 'bottom-center')
    })
    .catch((err) => {
        ErrorNotification(3000,'SERVER HAS ERROR PLEASE TRY AGAIN' , 'bottom-center')
    })
}