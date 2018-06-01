import { get, post, put, del } from 'superagent';
import { urlPath } from '../constants/config';

// uploadChunkVideo 影片分段上傳
export function uploadChunkVideo(pid, formData, callback)
{
    console.log(formData.get('name'));
    const url = `${urlPath}/uploadFile`;
    console.log('formData:', formData);
    return new Promise((resolve, reject) => {
        post(url)
            // .set('Content-Type', 'multipart/form-data')
            // .set('Content-Type', 'application/json;charset=utf-8')
            // .type('form')
            .send(formData)
            .end((err, res) =>
            {
                if (err || res.status !== 200 || res.body.result !== 1)
                {
                    // 發生status取不到值，先給default，上傳發生錯誤判斷用
                    const { status = 1 } = res;
                    if (err || res.status !== 200)
                    {
                        callback(1, 'video', status);
                        reject(new Error(err));
                    }
                    else
                    {
                        callback(2, 'video', status);
                        reject(res.body);
                    }
                }
                else
                {
                    // 上傳成功
                    console.log('ok', res.body);
                    resolve(200);
                }
            });
    });
}

