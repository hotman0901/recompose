import * as videoApi from '../apis/video';

// program
export function program({ bobiCheck, pid, locale })
{
    bobiCheck = (typeof bobiCheck === 'string') ? JSON.parse(bobiCheck) : bobiCheck;
    return {
        types: ['VIDEO_PROGRAM_REQ', 'VIDEO_PROGRAM_SUC', 'VIDEO_PROGRAM_ERR'],
        promise: videoApi.program({ token: bobiCheck.token, pid, locale })
    };
}

// programsPopular
export function programsPopular()
{
    return {
        types: ['VIDEO_PROGRAMPOPULAR_REQ', 'VIDEO_PROGRAMPOPULAR_SUC', 'VIDEO_PROGRAMPOPULAR_ERR'],
        promise: videoApi.programsPopular()
    };
}

// programRelation
export function programRelation({ pid, bobiCheck })
{
    bobiCheck = (typeof bobiCheck === 'string') ? JSON.parse(bobiCheck) : bobiCheck;
    return {
        types: ['VIDEO_PROGRAMRELATION_REQ', 'VIDEO_PROGRAMRELATION_SUC', 'VIDEO_PROGRAMRELATION_ERR'],
        promise: videoApi.programRelation({ pid, token: bobiCheck.token })
    };
}

export function timebaseToSingle()
{
    return {
        type: 'TIMEBASE_TO_SINGLE'
    };
}
// createVideo
export function createVideo(callback)
{
    videoApi.createVideo((err, data) => {
        callback(err, data);
    });
}

// editVideoInfo
export function editVideoInfo(pid, data, callback = () => {})
{
    return videoApi.editVideoInfo(pid, data, callback);
}

// getVideoCategory
export function getVideoCategory()
{
    return {
        types: ['VIDEO_CATEGORY_REQ', 'VIDEO_CATEGORY_SUC', 'VIDEO_CATEGORY_ERR'],
        promise: videoApi.getVideoCategory()
    };
}

// getInfoByProgram 單支影片狀態頁內容
export function getInfoByProgram(pid)
{
    return {
        types: ['GET_INFOBYPROGRAM_REQ', 'GET_INFOBYPROGRAM_SUC', 'GET_INFOBYPROGRAM_ERR'],
        promise: videoApi.getInfoByProgram(pid)
    };
}

// getTransactionByProgram 單支影片交易摘要
export function getTransactionByProgram({ bobiCheck, pid })
{
    return {
        types: ['GET_TRANSACTIONPROGRAM_REQ', 'GET_TRANSACTIONPROGRAM_SUC', 'GET_TRANSACTIONPROGRAM_ERR'],
        promise: videoApi.getTransactionByProgram({ token: bobiCheck.token, pid })
    };
}

// getHotmapProgram 單支影片熱區分析
export function getHotmapByProgram({ bobiCheck, pid })
{
    return {
        types: ['GET_HOTMAPPROGRAM_REQ', 'GET_HOTMAPPROGRAM_SUC', 'GET_HOTMAPPROGRAM_ERR'],
        promise: videoApi.getHotmapByProgram({ token: bobiCheck.token, pid })
    };
}

// backend-program
export function backendProgram({ bobiCheck, pid, locale })
{
    bobiCheck = (typeof bobiCheck === 'string') ? JSON.parse(bobiCheck) : bobiCheck;
    return {
        types: ['VIDEO_BEPROGRAM_REQ', 'VIDEO_BEPROGRAM_SUC', 'VIDEO_BEPROGRAM_ERR'],
        promise: videoApi.backendProgram({ token: bobiCheck.token, pid, locale })
    };
}

// get-backend-program
export function getBackendProgram(pid, locale, callback = () => {})
{
    return videoApi.getBackendProgram(pid, locale, callback);
}

// getComment
export function comment({ pid })
{
    return {
        types: ['VIDEO_COMMENT_REQ', 'VIDEO_COMMENT_SUC', 'VIDEO_COMMENT_ERR'],
        promise: videoApi.videoComment(pid)
    };
}

// addComment
export function commentAdd(pid, data, callback)
{
    return {
        types: ['VIDEO_COMMAND_ADD_REQ', 'VIDEO_COMMAND_ADD_SUC', 'VIDEO_COMMAND_ADD_ERR'],
        promise: videoApi.videoCommentAdd(pid, data, (err, cbData) =>
        {
            callback(err, cbData);
        })
    };
}

// replyAdd
export function commentReplyAdd(pid, data, callback)
{
    return {
        types: ['VIDEO_COMMENT_REPLY_ADD_REQ', 'VIDEO_COMMENT_REPLY_ADD_SUC', 'VIDEO_COMMENT_REPLY_ADD_ERR'],
        promise: videoApi.videoCommentReplyAdd(pid, data, (err) =>
        {
            callback(err);
        })
    };
}

// deleteComment
export function commentReplyDelete(pid, data, callback)
{
    return {
        types: ['VIDEO_COMMENT_REPLY_DELETE_REQ', 'VIDEO_COMMENT_REPLY_DELETE_SUC', 'VIDEO_COMMENT_REPLY_DELETE_ERR'],
        promise: videoApi.videoCommentReplyDelete(pid, data, (err) =>
        {
            callback(err);
        })
    };
}

// exploreBanner
export function videoBanner()
{
    return {
        types: ['VIDEO_BANNER_REQ', 'VIDEO_BANNER_SUC', 'VIDEO_BANNER_ERR'],
        promise: videoApi.videoBanner()
    };
}

// uploadVideo
export function uploadVideo(pid, file, callback = () => {})
{
    return videoApi.uploadVideo(pid, file, callback);
}

// uploadVideoPreview
export function uploadVideoPreview(pid, file, callback = () => {})
{
    return videoApi.uploadVideoPreview(pid, file, callback);
}

// uploadVideoImage
export function uploadVideoImage(pid, files, callback)
{
    if (files[0] !== undefined && files[0] !== null)
    {
        videoApi.uploadVideoPoster(pid, files[0], callback);
    }
    if (files[1] !== undefined && files[1] !== null)
    {
        videoApi.uploadVideoKeyVision(pid, files[1], callback);
    }
    if (files[2] !== undefined && files[2] !== null)
    {
        videoApi.uploadVideoBanner(pid, files[2], callback);
    }
}

// 將上面的action 分別拆開個別api(poster)
export function uploadVideoPoster(pid, files, callback = () => {})
{
    return videoApi.uploadVideoPoster(pid, files, callback);
}

// 將上面的action 分別拆開個別api(主視覺)
export function uploadVideoKeyVision(pid, files, callback = () => {})
{
    return videoApi.uploadVideoKeyVision(pid, files, callback);
}

// 將上面的action 分別拆開個別api(banner)
export function uploadVideoBanner(pid, files, callback = () => {})
{
    return videoApi.uploadVideoBanner(pid, files, callback);
}

// uploadVideo
export function videoPublish(pid, data, callback = () => {})
{
    return videoApi.videoPublish(pid, data, callback);
}

// getProgramLatest
export function getProgramLatest(data, callback)
{
    videoApi.getProgramLatest(data, callback);
}

// programLatest
export function programLatest()
{
    return {
        types: ['VIDEO_PROGRAMLASTEST_REQ', 'VIDEO_PROGRAMLASTEST_SUC', 'VIDEO_PROGRAMLASTEST_ERR'],
        promise: videoApi.programLatest()
    };
}

// timebase的稽核與未稽核資料
// programOwnerTimebase
export function programOwnerTimebase({ bobiCheck, pid, locale })
{
    bobiCheck = (typeof bobiCheck === 'string') ? JSON.parse(bobiCheck) : bobiCheck;
    return {
        types: ['USER_PROGRAMOWNERTIMEBASE_REQ', 'USER_PROGRAMOWNERTIMEBASE_SUC', 'USER_PROGRAMOWNERTIMEBASE_ERR'],
        promise: videoApi.programOwnerTimebase({ token: bobiCheck.token, pid, locale })
    };
}

// single的稽核與未稽核資料
// programOwnerSingle
export function programOwnerSingle({ bobiCheck, pid, locale })
{
    bobiCheck = (typeof bobiCheck === 'string') ? JSON.parse(bobiCheck) : bobiCheck;
    return {
        types: ['USER_PROGRAMOWNERSINGLE_REQ', 'USER_PROGRAMOWNERSINGLE_SUC', 'USER_PROGRAMOWNERSINGLE_ERR'],
        promise: videoApi.programOwnerSingle({ token: bobiCheck.token, pid, locale })
    };
}

// 刪除影片
export function deleteVideo(pid, callback = () => {})
{
    return videoApi.deleteVideo(pid, callback);
}


// uploadVideo分割
export function uploadChunkVideo(pid, formData, callback = () => {})
{
    return videoApi.uploadChunkVideo(pid, formData, callback);
}

