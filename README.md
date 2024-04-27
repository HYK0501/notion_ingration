
## 怎麼啟用這個專案
先決條件 持有一個 notion 的帳號

### step 1
創建一個 notion 的文章 並在下方建立資料庫
![2024-04-27 15-24-34 的螢幕擷圖](https://github.com/HYK0501/notion_ingration/assets/84561208/6f4e3cbe-d773-4c51-8640-8285028c25d0)

### step 2
建好資料庫後 按下 share 點擊 copy link
![2024-04-27 15-25-37 的螢幕擷圖](https://github.com/HYK0501/notion_ingration/assets/84561208/d31e33aa-fe97-43c1-b683-c0e20b91b878)
此時會出現一個網址 \
https://www.notion.so/<database_id>?v=<view_id> \
這個 database id 記好 等等要連進去 \

### step3
再來的話就是創建一個 notion ingration \
https://www.notion.so/my-integrations \
點擊這個連結創建 \
https://developers.notion.com/docs/create-a-notion-integration \
創建的方法可以參考上面的教學 \
這個是我創好的 ingration 記得把你的 screte 記好 等等我們會用到 \
![2024-04-27 15-30-49 的螢幕擷圖](https://github.com/HYK0501/notion_ingration/assets/84561208/7b07fed2-adcb-4c65-94ef-a53bf0cb0a66)

### step4

回到剛剛的範例文章 把你的文章權限也分享給這個 bot

![2024-04-27 15-32-04 的螢幕擷圖](https://github.com/HYK0501/notion_ingration/assets/84561208/c3d440ed-a62f-47ec-80b2-5d5fe6df373b)

### step 5
再來就是啟動這個專案 \
```
npm install
```
### step 6
設定環境變數 在這個專案 開一個叫 .env 的檔案
![2024-04-27 15-35-28 的螢幕擷圖](https://github.com/HYK0501/notion_ingration/assets/84561208/a3788617-cf1b-4d8d-81cd-12ece1862f28)

### step 7
```
npm run start
```

![2024-04-27 15-46-50 的螢幕擷圖](https://github.com/HYK0501/notion_ingration/assets/84561208/a1ff6fcb-6940-4c58-acac-e8deb7c9bb62)
