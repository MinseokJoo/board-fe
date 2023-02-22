# 🫐기민한 게시판🫐
tag를 추가 하여 게시물을 올릴 수 있는 게시판입니다
---

## 💻SERVICE

기본 게시판 형태에 태그를 넣을 수 있게 만들었습니다

![image](https://user-images.githubusercontent.com/111362623/220508372-4e4f1222-0835-4071-9006-e0ed374256a7.png)
![image](https://user-images.githubusercontent.com/111362623/220508417-758dc7f4-de95-4628-b766-6c070396dc3f.png)
---
```
  1. 게시물 작성 수정 삭제 기능
  2. 해당 게시물의 댓글 작성 수정 삭제 기능
  3. 내 정보에서 내 이름과 이메일 확인과 동시에 내가 쓴 게시물들만 볼 수 있는 기능
  4. 로그인 로그아웃
  5. 페이지네이션기능
```
___

## 👤역할 분담

김기민
```
- 게시글 상세조회
- 댓글 조회, 작성, 수정
- 게시글 수정, 삭제, 작성
```

주민석
```
- 회원가입, 로그인, 로그아웃
- 내 정보 조회 및 최신 게시글 10개 조회
- 게시물목록 조회
- top10 tag조회
- 태그별 게시글 조회
```

## 🔧사용 기술
---
BACKEND
```
- Node.js (express)
- Mysql (Sequelize)
```
FRONTEND
```
- HTML
- CSS
- Javascript
- Googleicon, font
```
TOOL
```
- GitHub
- VSCode
- AWS RDS
```
Dependencies
```
"dependencies": {
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "joi": "^17.7.1",
    "jsonwebtoken": "^9.0.0",
    "mysql2": "^3.1.2",
    "redis": "^4.6.4",
    "sequelize": "^6.28.0"
  },
  ```

폴더구조
  ```
├─config
│ └─config.json
│
├─controllers
│ ├─article.controller.js
│ ├─comments.controller.js
│ ├─tag.controller.js
│ └─user.controller.js
│
├─middleware
│ ├─auth.js
│ └─valudation.js
│
├─migrations
│ ├─20230209065545-create-user.js
│ ├─20230209065704-create-article.js
│ ├─20230209065745-create-tag.js
│ ├─20230209065840-create-article-tag-mapping.js
│ └─20230214073113-create-comments.js
│
├─models
│ ├─article_tag_mapping.js
│ ├─article.js
│ ├─comments.js
│ ├─index.js
│ ├─tag.js
│ └─user.js
│
├─repositorys
│ ├─article.repository.js
│ ├─comments.repository.js
│ ├─tag.repository.js
│ └─user.repository.js
│
├─routes
│ ├─article.route.js
│ ├─comments.routes.js
│ ├─routes.js
│ ├─tag.route.js
│ └─user.route.js
│
├─seeders
├─services
│ ├─article.service.js
│ ├─comments.service.js
│ ├─tag.service.js
│ └─user.service.js
│
├─util
│ ├─config.js
│ ├─redis.js
│
└─app.js

  ```
___

## 📜API 명세서
[API](https://www.notion.so/API-81407027de3049de951c36b8036a6668)

## ERD
[ERD](https://www.notion.so/ERD-91bcdb024414472d9c9c76b4d14372d1)



backend기능 깃허브 주소: https://github.com/jennaaaaaaaaa/board-be
