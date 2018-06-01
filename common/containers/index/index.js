import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import isNode from 'detect-node';
import { Helmet } from 'react-helmet';
import { Container } from '../../widgets/container';
import { Button, Button2 } from '../../widgets/button';
import * as videoAction from '../../actions/video';

@translate([], { wait: isNode ? false : true })
class Index extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
        this.upload = this.upload.bind(this);
    }


    async upload()
    {
        const video = document.querySelector('#upFile').files[0];
        // 取出原始檔案大小與名稱
        const { name, size } = document.querySelector('#upFile').files[0];
        // 做一個時間搓
        const stamp = new Date() / 1;
        // 執行成功筆數
        let succeed = [];
        // 取出副檔名
        let ext;
        let extIndex = name.lastIndexOf('.');
        if (extIndex !== -1) {
            ext = name.substr(extIndex + 1, name.length);
        }

        // 切割檔案的基本size
        const shardUnitSize = 50 * 1024 * 1024; // 2M
        // 該檔案總共會切割成幾份
        const shardTotalCount = Math.ceil(size / shardUnitSize);

        //  要執行promise All的 action
        let promiseArray = [];
        for (let i = 0; i < shardTotalCount; i += 1)
        {
            // 起始切割的檔案位置
            let start = i * shardUnitSize;
            // 結束切割檔案的位置
            let end = Math.min(size, start + shardUnitSize);
            // 組合要傳遞的資料
            let form = new FormData();
            // 每個檔案切割
            form.append('file', video.slice(start, end));
            // 檔案名稱
            form.append('name', name);
            // 時間搓
            form.append('stamp', stamp);
            // 副檔名
            form.append('ext', ext);
            // 檔案總size
            form.append('size', size);
            // 總數切個檔案數
            form.append('total', shardTotalCount);
            // 目前是第幾個檔案
            form.append('index', i + 1);

            // 將所有的action都塞入array，因為要使用 promise all
            promiseArray.push(videoAction.uploadChunkVideo('aaaabbbb', form, this.updateProgress));
        }

        Promise.all(promiseArray).then((values) =>
        {
            console.log('values-l:', values.length);
            // 這裡取得的是全部api的resolve 陣列
            // succeed = values;
            // 當回傳成功的筆數等於切割總數
            if (values.length === shardTotalCount)
            {
                console.log('===============2=====================');
                console.log(succeed);
                console.log('===============2=====================');
            }
            else
            {
                console.log('===============3=====================');
                console.log(succeed);
                console.log('===============3=====================');
            }
        }).catch(() =>
        {
            console.log('catch');
            return false;
        });
    }

    updateProgress(status)
    {
        console.log('status:', status);
    }

    render()
    {
        return (
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="" />
                    <meta property="og:title" content="" />
                    <meta property="og:description" content="" />
                    <meta property="og:url" content="" />
                    <meta property="og:image" content="" />
                    <link rel="canonical" href="" />
                </Helmet>

                <Button>styled-components</Button>
                <Button2 bgc="blue">style-components-btn</Button2>
                <input type="file" id="upFile" />
                <input type="button" value="click" onClick={this.upload} />

            </Container>
        );
    }
}

export default connect()(Index);
