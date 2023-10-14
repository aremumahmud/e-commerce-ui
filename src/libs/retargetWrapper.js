import get_user_info from "./get_user_info";
import retarget from "./retarget";

export default function retarget_wrapper(cart, currency) {
    get_user_info((err, user_data) => {
        let result = JSON.parse(user_data);
        if (result.error) return
        let { data } = result
        let { username, email_address } = data
        let jobsinlocal = localStorage.getItem('LOCALJOB_IDS')
        let jobids = jobsinlocal ? jobsinlocal.split('__') : []
        retarget(cart, email_address, jobids, { first_name: username, currency }, (err, res) => {
            try {
                let { jobId1, jobId2 } = res
                localStorage.setItem('LOCALJOB_IDS', (jobId1 + '__' + jobId2))
                console.log(res)
            } catch (e) {
                console.log(e)
            }

        })
    })
}