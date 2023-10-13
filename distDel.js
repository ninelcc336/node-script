// const fs = require('fs')
// const path = require('path')

import fs from 'fs'
import path from 'path'

/**
 * 删除目录下 指定 文件方法
 * 参数： dir 文件夹名称
 * fs.readdir => 读取文件夹内容
 * fs.stat => 获取文件信息
 * fs.unlink => 删除文件
 */

/**
 * 操作目录方法
 * 参数 dir 目录名称
 * fs.rmdir => 删除目录
 */

const deleteFiles = (dir) => {
    fs.readdir(dir, (err, files) => {

        // console.log(files);
        files.forEach(fileName => {
            let src = path.join(dir, fileName)
            fs.stat(src, (err, st) => {
                // console.log(err, st)
                if (err) {
                    throw err
                }


                /* 
                // 判断是否为文件 删除文件
                if (st.isFile()) {
                    if (/dist/.test(fileName)) {

                        fs.unlink(src, err => {
                            if (err) throw err

                            console.log('已删除文件：' + src)
                        })
                    }
                } else {
                    // 递归文件夹
                    deleteFiles(src)
                } 
                */

                // 判断是否是目录 删除目录
                if (st.isDirectory()) {
                    if (/dist/.test(fileName)) {
                        fs.rmdir(src, err => {
                            if (err) throw err

                            console.log('已删除目录：' + src);
                        })
                    }
                }
            })
        })
    })
}

deleteFiles('./')